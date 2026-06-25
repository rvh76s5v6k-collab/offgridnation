import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OffGrid Nation | OffGrid AI",
  description:
    "Private AI that works without internet. Custom local AI vaults for people, families, and businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
