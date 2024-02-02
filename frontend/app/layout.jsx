import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CAFENA",
  description: "Проект кафена создан на next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${inter.className} w-screen overflow-x-hidden bg-[#F4F1EE] text-[#404040]  `}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
