import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rayaaandco.com"),
  title: {
    default: "Rayaa & Co — A House of Embroidery",
    template: "%s — Rayaa & Co",
  },
  description: "Quiet luxury, crafted by hand. Mirror-work, hand-beading and silk-thread embroidery on heirloom silhouettes. Dubai.",
  openGraph: {
    title: "Rayaa & Co",
    description: "Hand-embroidered editions from our Dubai atelier.",
    url: "/",
    siteName: "Rayaa & Co",
    images: [{ url: "/images/look-09.jpg", width: 1200, height: 1600 }],
    locale: "en_AE",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/logo.png", apple: "/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cormorant.variable} ${inter.variable}`}>
        <ThemeProvider>
          <SmoothScroll />
          <Nav />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
