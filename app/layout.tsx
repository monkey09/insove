import { poppins } from "./utils"
import type { Metadata } from "next"
import "./globals.css"
import 'swiper/css'
import 'swiper/css/pagination'

export const metadata: Metadata = {
  title: "Insove",
  description: "Medical Healthcare",
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={poppins}>{children}</body>
    </html>
  )
}

export default RootLayout
