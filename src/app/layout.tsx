import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import QueryProvider from "@/components/query-provider";
import { Toaster } from "@/components/ui/sonner";


const poppins = Poppins({ weight: "400", subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(poppins.className, "antialiased min-h-screen")}
      >
        <QueryProvider>
          <Toaster/>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
