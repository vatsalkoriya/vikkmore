import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Providers } from "./Providers";
import AppShell from "@/components/AppShell";
import { Music2, X } from "lucide-react";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "vikkmore - Premium Music Experience",
  description: "Experience music like never before with vikkmore.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        elements: {
          footer: "hidden",
          watermark: "hidden",
        }
      }}
    >
      <html lang="en" className="dark">
        <body className={`${outfit.variable} font-outfit bg-black text-white antialiased overflow-hidden`}>
          <Providers>
            <AppShell>{children}</AppShell>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
