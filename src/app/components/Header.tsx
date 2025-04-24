'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
        const pathname = usePathname()
        return (
                <header className='fixed w-full py-6 top-0'>
                        <div className='wrapper flex items-center'>
                                <Link href='/'>
                                        <Image src='/logo.png' alt='logo' width={125} height={36} priority />
                                </Link>
                                <nav className='mx-auto'>
                                        <ul className='flex gap-x-10'>
                                                <li>
                                                        <Link href='/' className={`${pathname == '/' && 'text-highlight'}`}>
                                                                Home
                                                        </Link>
                                                </li>
                                                <li>
                                                        <Link href='/service' className={`${pathname == '/service' && 'text-highlight'}`}>
                                                                Service
                                                        </Link>
                                                </li>
                                                <li>
                                                        <Link href='/blog' className={`${pathname == '/blog' && 'text-highlight'}`}>
                                                                Blog
                                                        </Link>
                                                </li>
                                                <li>
                                                        <Link href='/about' className={`${pathname == '/about' && 'text-highlight'}`}>
                                                                About Us
                                                        </Link>
                                                </li>
                                                <li>
                                                        <Link href='/testimonial' className={`${pathname == '/testimonial' && 'text-highlight'}`}>
                                                                Testimonial
                                                        </Link>
                                                </li>
                                        </ul>
                                </nav>
                                <Link href='/Service' className='py-4 px-5 bg-highlight text-white font-semibold hover:opacity-9        0 transition-all'>Consultation</Link>
                        </div>
                </header>
        )
}

export default Header
