import './globals.css'
import { Poppins } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ weight: ["400", "700"], subsets: ['latin'] })

export const metadata = {
  title: 'Gabriel Campos | Software Engineer',
  description: 'A software engineer based in Natal, Brazil.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
