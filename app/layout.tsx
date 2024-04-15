import './globals.css'
import {Inter} from 'next/font/google'
import {Providers} from '@/features/common/store/provider'

const inter = Inter({subsets: ['latin']})
export const metadata = {
  title: 'Outil de marquage de LIMQ',
  description: 'Cet outil permet la sasie des données de match',
}
export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <Providers>{children}</Providers>
    </body>
    </html>
  )
}
