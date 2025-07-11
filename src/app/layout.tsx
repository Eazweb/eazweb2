import type { Metadata } from "next";
import { funnelDisplay, redHatDisplay } from "@/lib/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "EAZWeb",
  description: "EAZWeb ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${funnelDisplay.variable} ${redHatDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
