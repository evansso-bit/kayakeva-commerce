import type { Metadata } from "next";
import "@/styles/globals.css";
import { MainNav } from "@/components/main-nav";
import { urbanist, playFair } from "@/components/fonts";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Kayakeva",
    description: "Kayakeva E-Commerce Store",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    " bg-amber-50  font-fira antialiased min-h-screen",
                    urbanist.variable,
                    playFair.variable
                )}>
                <MainNav />
                {children}
            </body>
        </html>
    );
}
