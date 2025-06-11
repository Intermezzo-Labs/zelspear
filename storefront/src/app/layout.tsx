import { getBaseURL } from "@lib/util/env"
import { clx } from "@medusajs/ui"
import { GoogleAnalytics } from "@next/third-parties/google"
import { Metadata } from "next"
import { Zen_Dots, Open_Sans } from "next/font/google"
import "styles/globals.css"

const zenDots = Zen_Dots({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-zen-dots",
})

const openSans = Open_Sans({
  weight: ["300", "400", "500", "800"],
  subsets: ["latin"],
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: {
    template: "%s — Zelspear",
    default: "Zelspear — Helldivers 2, Monster Hunter, anime and more",
  },
  description:
    "A safe place for nerds like us to be ourselves and share things we are passionate about.",
  openGraph: {
    images: [new URL("https://zelspear.com/banner.jpg")],
  },
  twitter: {
    images: [new URL("https://zelspear.com/banner.jpg")],
  },
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={clx(zenDots.variable, openSans.variable, "font-sans")}
    >
      <body>
        <main className="relative">{props.children}</main>
        <GoogleAnalytics gaId="G-LLWW19MMYY" />
      </body>
    </html>
  )
}
