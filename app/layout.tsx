import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lorem Ipsum",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className="min-h-screen bg-[#202020] antialiased">
      {children}
      </body>
      </html>
  );
}