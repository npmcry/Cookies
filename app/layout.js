import { Poppins, Montserrat_Alternates } from "next/font/google";
import "./globals.css";

// Load fonts
const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const montserrat = Montserrat_Alternates({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Cookies",
  description: "Stay Informed. Cookies are taking over the world!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
