import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageLayout from "@/layouts/Page";

const inter = Inter({ subsets: ["latin"] });

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
            <body className={`${inter.className}`}>
                <PageLayout>{children}</PageLayout>
            </body>
        </html>
    );
}
