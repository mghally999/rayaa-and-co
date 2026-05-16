"use client";

/**
 * HeroCanvas
 * Subtle warm gradient + animated grain rendered with raw WebGL.
 * Uses the brand's --bg / --maroon CSS variables so it follows the theme.
 * Cheap to render: single full-screen quad, simplex-ish noise in fragment shader.
 */

import { useEffect, useRef } from "react";

const VERT = `
attribute vec2 a_position;
varying vec2 v_uv;
void main() {
  v_uv = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const FRAG = `
precision mediump float;
varying vec2 v_uv;
uniform float u_time;
uniform vec2  u_res;
uniform vec3  u_c1;   // base
uniform vec3  u_c2;   // soft accent (warm)
uniform vec3  u_c3;   // deep accent (maroon)

// Compact 2D hash
float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}
float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p *= 2.07;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = v_uv;
  vec2 p  = uv * vec2(u_res.x / u_res.y, 1.0);

  float t = u_time * 0.06;
  float n = fbm(p * 1.4 + vec2(t, -t * 0.7));
  float m = fbm(p * 2.6 - vec2(t * 0.5, t));

  // soft radial vignette warmth
  float r = length(uv - vec2(0.5, 0.45));
  float vignette = smoothstep(1.05, 0.25, r);

  vec3 col = mix(u_c1, u_c2, smoothstep(0.25, 0.85, n));
  col      = mix(col, u_c3, smoothstep(0.55, 0.95, m) * 0.35);
  col     *= 0.92 + 0.18 * vignette;

  // film grain
  float g = hash(uv * u_res + u_time * 60.0);
  col += (g - 0.5) * 0.04;

  gl_FragColor = vec4(col, 1.0);
}
`;

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "").trim();
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const r = parseInt(full.slice(0, 2), 16) / 255;
  const g = parseInt(full.slice(2, 4), 16) / 255;
  const b = parseInt(full.slice(4, 6), 16) / 255;
  return [r, g, b];
}

function readVar(name: string, fallback: string): [number, number, number] {
  if (typeof window === "undefined") return hexToRgb(fallback);
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  if (!v) return hexToRgb(fallback);
  if (v.startsWith("#")) return hexToRgb(v);
  // rgb() form
  const m = v.match(/(\d+(\.\d+)?)/g);
  if (m && m.length >= 3) {
    return [parseFloat(m[0]) / 255, parseFloat(m[1]) / 255, parseFloat(m[2]) / 255];
  }
  return hexToRgb(fallback);
}

export default function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { antialias: true, premultipliedAlpha: false });
    if (!gl) return;

    const compile = (src: string, type: number) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.warn(gl.getShaderInfoLog(s));
      }
      return s;
    };

    const vs = compile(VERT, gl.VERTEX_SHADER);
    const fs = compile(FRAG, gl.FRAGMENT_SHADER);
    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );
    const aPos = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, "u_time");
    const uRes  = gl.getUniformLocation(program, "u_res");
    const uC1   = gl.getUniformLocation(program, "u_c1");
    const uC2   = gl.getUniformLocation(program, "u_c2");
    const uC3   = gl.getUniformLocation(program, "u_c3");

    const setColors = () => {
      gl.uniform3fv(uC1, readVar("--bg",      "#f3ead6"));
      gl.uniform3fv(uC2, readVar("--bg-warm", "#e8dcc0"));
      gl.uniform3fv(uC3, readVar("--maroon",  "#5e1a1d"));
    };
    setColors();

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      const w = canvas.clientWidth | 0;
      const h = canvas.clientHeight | 0;
      canvas.width  = (w * dpr) | 0;
      canvas.height = (h * dpr) | 0;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    // re-read CSS vars when theme switches (cheap; runs once per attr change)
    const mo = new MutationObserver(setColors);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    let raf = 0;
    let start = performance.now();
    const tick = () => {
      const t = (performance.now() - start) / 1000;
      gl.uniform1f(uTime, t);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      mo.disconnect();
    };
  }, []);

  return <canvas ref={ref} className="hero-canvas" aria-hidden="true" />;
}
