"use client";
import React from "react";
import { Metadata } from "next";
import Head from "next/head"
import { Ubuntu } from "@next/font/google";
import Navbar from "./components/Navbar";
import { FormspreeProvider } from "@formspree/react";

import "./globals.css";

export const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400"],
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Head><title>Sofia Drejmark</title></Head>
      <FormspreeProvider project="2308835887540076003">
        <body className="w-screen h-screen m-0 p-0 overflow-x-hidden relative">
          <Navbar />
          <main className="w-full h-full overflow-x-hidden">{children}</main>
        </body>
      </FormspreeProvider>
    </html>
  );
}
