import type { Metadata } from "next";
import {
  Libre_Caslon_Text,
  Libre_Franklin,
  Fragment_Mono,
} from "next/font/google";
import "./globals.css";

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
});

const libreCaslonText = Libre_Caslon_Text({
  variable: "--font-libre-caslon-text",
  subsets: ["latin"],
  weight: ["400"],
});

const fragmentMono = Fragment_Mono({
  variable: "--font-fragment-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "RAT · May 22 – June 4, 1970",
  description: "Women’s LibeRATion",
  openGraph: {
    images: [
      {
        url: "/opengraph.gif",
        width: 1920,
        height: 1080,
        type: "image/gif",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph.gif"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${libreFranklin.variable} ${libreCaslonText.variable} ${fragmentMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-serif">{children}</body>
    </html>
  );
}
