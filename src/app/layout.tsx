import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "iDecide Blog – Abortion Care, Options & Support",
  description:
    "iDecide Blog provides comprehensive, evidence-based information about abortion care, procedures, options, and support resources. Learn about medical and surgical abortion, what to expect, and how to make informed decisions for your reproductive health.",
  keywords: [
    "abortion",
    "abortion care",
    "abortion options",
    "medical abortion",
    "surgical abortion",
    "reproductive health",
    "unplanned pregnancy",
    "contraception",
    "support resources",
    "evidence-based",
    "women's health",
    "healthcare",
    "iDecide"
  ],
  openGraph: {
    title: "iDecide Blog – Abortion Care, Options & Support",
    description:
      "Comprehensive, evidence-based information about abortion procedures, options, and support. Empowering you to make informed decisions about your reproductive health.",
    url: "https://yourdomain.com/blog",
    type: "website",
    images: [
      {
        url: "https://www.howtouseabortionpill.org/static/9998fb543550dd331d7eb317c09de1f7/48819/myths-and-facts-around-contraception-en.webp",
        width: 1200,
        height: 630,
        alt: "Abortion Care Information",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iDecide Blog – Abortion Care, Options & Support",
    description:
      "Comprehensive, evidence-based information about abortion procedures, options, and support. Empowering you to make informed decisions about your reproductive health.",
    images: [
      "https://www.howtouseabortionpill.org/static/9998fb543550dd331d7eb317c09de1f7/48819/myths-and-facts-around-contraception-en.webp",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="iDecide Blog Team" />
        <meta name="robots" content="index, follow" />
      </head>
      <body
        className={`${merriweather.variable} font-serif antialiased bg-[#f9f9ea]`}
        style={{ fontFamily: "var(--font-merriweather), serif", backgroundColor:"#f9f9ea" }}
      >
        {children}
      </body>
    </html>
  );
}