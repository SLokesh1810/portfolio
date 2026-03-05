import "./globals.css";
import { Alex_Brush } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';
import { Lobster_Two } from "next/font/google";

const lobsterTwo = Lobster_Two({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-lobster-two',
});

const playfair = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-playfair',
});

const alexBrush = Alex_Brush({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-alex-brush',
});

export const metadata = {
  title: "Lokesh | Portfolio",
  description: "Portfolio of Lokesh – Software Engineer (Backend & ML)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${alexBrush.variable} ${playfair.variable} ${lobsterTwo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
