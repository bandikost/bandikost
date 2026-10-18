import { Quicksand } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";
import Header from "@/Layouts/Header";
import { cookies } from "next/headers";
import { Metadata } from "next";


const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
})

export const metadata: Metadata = {
  title: "Bandikost",
  icons: {
    icon: "/title.svg",
  },
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const cookieStore = await cookies()
    const lang = cookieStore.get("lang")?.value ?? "en"
    const theme = cookieStore.get("theme")?.value === "dark"
      ? "dark"
      : "light"
  return (
    <html lang={lang} className={`${quicksand.variable}`}>
      <body data-theme={theme}>
        <LanguageProvider>
          <Header />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
