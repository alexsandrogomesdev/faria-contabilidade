import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playFair = Playfair_Display({
  variable: "--font-playFair",
  subsets: ["latin"],
});
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plusJakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Faria Contabilidade",
  description: "Gestão contábil e tributária",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${playFair.variable} ${plusJakarta.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
