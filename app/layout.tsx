import "./globals.css";


export const metadata = {
  title: "Lokesh | Software Engineer",
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
