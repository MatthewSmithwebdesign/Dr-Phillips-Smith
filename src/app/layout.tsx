import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import content from "@/data/content.json";

export const metadata: Metadata = {
  title: content.profile.name,
  description: "Academic portfolio showcasing research, publications, and community work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header name={content.profile.name} />
        <main>{children}</main>
        <Footer name={content.profile.name} />
      </body>
    </html>
  );
}