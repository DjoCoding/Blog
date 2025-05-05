import "./globals.css";
import NavBar from "@/components/NavBar";
import { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Djo's Blog",
    default: "Djo's Blog",
  },
  description: "Mohammed Djaoued Bouhadda personal blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="flex flex-col min-h-screen mb-8 overflow-x-hidden max-w-lvw">
        <NavBar />
        <div className="w-full grow flex lg:mt-8 py-8">
          {children}
        </div>
      </body>
    </html>
  );
}
