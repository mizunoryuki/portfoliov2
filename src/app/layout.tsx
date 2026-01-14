import "./globals.css";

import type { Metadata } from "next";
import { Comfortaa, Inter, Noto_Sans_JP } from "next/font/google";

import { PageLayout } from "@/layouts/page";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto",
});
const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
});

export const metadata: Metadata = {
  title: {
    default: "mimimimimimi's portfolio",
    template: "%s | mimimimimimi's portfolio", // %s に各ページの title が入る
  },
  description: "mimimimimimi is created",
  metadataBase: new URL("https://bike-bun-bun.com"),
  openGraph: {
    locale: "ja_JP",
    type: "website",
    siteName: "mimimimimimi's portfolio",
    title: "mimimimimimi's portfolio",
    description: "【超絶必見】俺のポートフォリオサイトですよ",
    url: new URL("https://bike-bun-bun.com"),
  },
  twitter: {
    card: "summary_large_image",
    creatorId: "mimimimimimi",
    creator: "@Atui_yaroo",
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION || "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${inter.variable} ${notoSansJp.variable} ${comfortaa.variable}`}
      >
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
