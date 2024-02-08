import "./globals.css"
import { poppins } from "./utils"
import type { Metadata } from "next"

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
    <html lang="en">
      <body className={poppins}>{children}</body>
    </html>
  )
}

export default RootLayout
