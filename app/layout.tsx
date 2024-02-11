import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Urbanist } from "next/font/google";
import "./globals.css";
import ModalProvider from "@/providers/ModalProvider";
import ToastProvider from "@/providers/ToastProvider";
import getStore from "@/actions/getStore";

const urbanist = Urbanist({ subsets: ["latin"] });

export async function generateMetadata() {
  const store = await getStore();
  return { title: store.name, description: "" };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const store = await getStore();
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar store={store} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
