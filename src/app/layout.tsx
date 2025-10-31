import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { artistInfo } from "@/lib/artwork-data";

export const metadata: Metadata = {
  title: `${artistInfo.name} - ${artistInfo.tagline}`,
  description: "Contemporary artist portfolio showcasing original works in digital art, painting, and photography.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
