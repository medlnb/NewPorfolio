import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@styles/globals.css";
import NavBar from "@components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lanabi Mohamed",
  description: "Lanabi Mohamed portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="text-white">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
