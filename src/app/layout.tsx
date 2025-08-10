import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "gomanga - Read the latest manga updates for free.",
  description: "gomanga - Read the latest manga updates for free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
