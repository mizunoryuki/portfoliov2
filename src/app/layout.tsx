import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import PageLayout from "@/layouts/Page";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansJp = Noto_Sans_JP({ subsets: ["latin"], variable: "--font-noto" });

export const metadata: Metadata = {
    title: "mimimimimimi's portfolio",
    description: "mimimimimimi is created",
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
