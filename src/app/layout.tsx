import "./globals.css";

import { Lato, Roboto } from "next/font/google";

import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";
import type { Metadata } from "next";

const robotoSans = Roboto({
  weight: ["300", "400", "500"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

const latoSans = Lato({
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Landing page",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoSans.variable}  ${latoSans.variable} antialiased`}>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
