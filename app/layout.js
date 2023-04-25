import "./globals.css";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import HappySad from "app/happySad.jpg";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className={`$montserrat.className mx-32 bg-[#1f1f1f]`}>
        <nav className="bg-transparent flex justify-between my-8 bg-[#1f1f1f] py-4">
          <div className="bg-transparent">
            <Image
              className="opacity-80"
              width={100}
              height="auto"
              src={HappySad}
              alt="happy-sad-logo"
              priority
            />
            <p className="text-red-500 text-[15px]">Movie-Chime</p>
          </div>
          <ul className="flex text-white items-center">
            <li className="mr-8 text-lg hover:text-red-500">
              <a href="#">About</a>
            </li>
            <li className="mr-4 text-lg hover:text-red-500">
              <a href="#">Signup</a>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
