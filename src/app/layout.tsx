import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import PageLayout from "@/layouts/Page";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansJp = Noto_Sans_JP({ subsets: ["latin"], variable: "--font-noto" });

export const metadata: Metadata = {
    title: "mimimimimimi's portfolio",
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
            <body className={`${inter.variable} ${notoSansJp.variable}`}>
                <PageLayout>{children}</PageLayout>
            </body>
        </html>
    );
}
