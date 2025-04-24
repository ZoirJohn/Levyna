import type { Metadata } from 'next'
import { Poppins, Geist_Mono } from 'next/font/google'
import './globals.css'

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
                        <body className={`${poppins.variable} antialiased`}>{children}</body>
                </html>
        )
}
