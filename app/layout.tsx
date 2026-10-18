import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Agros Group — Solusi Fulfillment & Ekspedisi Toko Online Indonesia",
  description:
    "Layanan pergudangan fleksibel, packing rapi, dan pengiriman multi-ekspedisi hemat untuk seller online dan UMKM di seluruh Indonesia.",
  keywords: [
    "fulfillment indonesia",
    "gudang seller shopee tiktok",
    "jasa packing paket",
    "ekspedisi murah umkm",
    "agros group fulfillment",
  ],
  authors: [{ name: "Agros Group" }],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="font-sans bg-[#f8faff] text-[#0b1c30] antialiased selection:bg-[#cce5ff] selection:text-[#004b73]">
        {children}
      </body>
    </html>
  );
}


