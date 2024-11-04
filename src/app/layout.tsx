import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const Poppin = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Pilih variasi berat yang diperlukan
});

export const metadata: Metadata = {
  title: "HSHFMW Portfolio",
  description: "HahsfiM Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <body
          className={`${Poppin.className} antialiased bg-slate-100" id="home`}
        >
          {children}
        </body>
      </head>
    </html>
  );
}
