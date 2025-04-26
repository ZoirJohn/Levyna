'use client'
import Image from 'next/image'
import logowhite from '../../public/logowhite.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Footer = () => {
        const pathname = usePathname()
        return (
                <footer className='bg-chinese'>
                        <div className='wrapper py-10 flex justify-between items-center max-md:flex-col gap-10'>
                                <Image src={logowhite} alt='white logo' />
                                <nav>
                                        <ul className='text-white flex gap-10 flex-wrap justify-center max-xs:flex-col max-xs:items-center'>
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
                        </div>
                </footer>
        )
}

export default Footer
