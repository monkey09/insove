import { Poppins } from "next/font/google"

const poppins_init = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300', '600']
})

export const poppins = poppins_init.className