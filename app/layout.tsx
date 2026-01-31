import "./globals.css";


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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
