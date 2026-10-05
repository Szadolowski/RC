import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pl">
      <body className="min-h-full flex flex-col bg-(--bg-950)">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
