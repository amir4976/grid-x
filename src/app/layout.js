import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Modules/Navbar/Navbar";
import Footer from "@/components/Modules/Footer/Footer";
import PreLoader from "@/components/Templates/preLoader/PreLoader";
const inter = Inter({ subsets: ["latin"] });

 
export const metadata = {
  title: 'GRID-X',
  description: 'AMIR H AHAMDI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       
      <body className={inter.className}>
        <PreLoader />
        <div className="max-w-6xl mx-auto ">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
