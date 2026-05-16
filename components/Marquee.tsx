interface Props { items: string[]; }

export default function Marquee({ items }: Props) {
  // Duplicate the items so the loop is seamless
  const loop = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <span key={i}>
            <em className="italic" style={{ color: "var(--maroon)" }}>{item}</em>
            <span className="dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
