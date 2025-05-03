import "./globals.css";
import NavBar from "@/components/NavBar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en" className={poppins.variable}>
      <body className="flex flex-col min-h-screen mb-8 overflow-x-hidden">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
