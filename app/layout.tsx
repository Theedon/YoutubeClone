import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PageHeader } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Youtube Clone",
  description: "A youtube clone created with love by Theedon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-h-screen flex flex-col">
          <div className="flex flex-1">
            <PageHeader />
          </div>
          <div className="flex flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
