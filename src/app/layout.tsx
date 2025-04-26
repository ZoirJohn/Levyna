import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const poppins = Poppins({
        variable: '--poppins',
        subsets: ['latin'],
        weight: ['400', '500', '600'],
})
export const metadata: Metadata = {
        title: 'Levyna',
}

export default function RootLayout({
        children,
}: Readonly<{
        children: React.ReactNode
}>) {
        return (
                <html lang='en'>
                        <body className={`${poppins.variable} antialiased font-sans`}>
                                <Header />
                                <main>{children}</main>
                                <Footer />
                        </body>
                </html>
        )
}
