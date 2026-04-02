import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PayKare - Premium Payments & Loans",
  description: "Your ultimate financial app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-blue-50">
        {children}
      </body>
    </html>
  );
}