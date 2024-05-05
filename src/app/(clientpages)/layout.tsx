import type { Metadata } from "next";
import ClientNavbar from "./components/ClientNavbar";

export const metadata: Metadata = {
    title: "KI Doces",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <ClientNavbar />
            {children}
        </>
    );
}