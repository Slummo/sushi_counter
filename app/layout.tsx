import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/app/globals.css";

import { cn } from "@/lib/utils";
import Providers from "@/components/custom/Providers";

const font = Roboto({
    variable: "--font-roboto-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Sushi counter",
    description:
        "A simple sushi counter app that lets you track how many sushi pieces you and your friends eat, and compete to see who eats the most",
};

type RootLayoutProps = {
    children: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang="it" suppressHydrationWarning>
            <body className={cn(font.variable, "antialiased absolute w-screen h-screen")}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
};

export default RootLayout;
