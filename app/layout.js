import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Componets/Layout/Navber/Navbar";
import Footer from "./Componets/Layout/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Triple-I | Smart IT Solutions & Technology Services",
  description: "Empowering your business with innovative IT solutions. We specialize in web development, cloud solutions, cybersecurity, and digital transformation services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
