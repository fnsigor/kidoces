'use client'

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    

    return (
        <html lang="pt-BR">
            <body className={inter.className}>
                <QueryClientProvider client={new QueryClient()}>{children}</QueryClientProvider>
            </body>
        </html>
    );
}
