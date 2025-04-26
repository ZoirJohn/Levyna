'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const Header = () => {
        const pathname = usePathname()
        const [scroll, setScroll] = useState<boolean>(false)
        const [isOpen, setIsOpen] = useState<boolean>(false)
        useEffect(() => {
                window.addEventListener('scroll', () => setScroll(window.scrollY > 30))
                if (window.scrollY > 30) {
                        setScroll(true)
                }
        }, [])
        useEffect(() => {
                isOpen ? document.documentElement.classList.add('lock') : document.documentElement.classList.remove('lock')
        }, [isOpen])
        return (
                <header className={`fixed w-full py-6 top-0 ${scroll && 'bg-aqua'} z-20 max-md:before:absolute before:w-full before:h-full before:bg-aqua before:z-20 before:top-0`}>
                        <div className='wrapper flex items-center'>
                                <Link href='/' className='z-50'>
                                        <Image src='/logo.png' alt='logo' width={125} height={36} priority />
                                </Link>
                                <nav
                                        className={`mx-auto max-md:absolute max-md:bg-myrtle max-md:w-full max-md:h-screen max-md:top-0 max-md:left-0 max-md:-translate-y-full transition duration-500 z-10 ${
                                                isOpen ? 'max-md:translate-y-0' : ''
                                        }`}
                                >
                                        <ul className='flex gap-x-10 max-lg:gap-x-5 max-lg:text-base max-md:flex-col max-md:text-white max-md:pt-27 max-md:text-3xl max-md:gap-6 max-md:justify-center max-md:items-center max-md:h-screen max-md:overflow-y-scroll'>
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
                                <Link href='/Service' className='py-4 px-5 bg-highlight text-white font-semibold hover:opacity-90 transition-all max-md:ml-auto z-20 max-xs:py-2 max-xs:px-2.5'>
                                        Consultation
                                </Link>
                                <span
                                        className={`md:hidden relative w-8 h-4 ml-4 before:absolute before:w-full before:h-0.5 before:bg-highlight before:top-0 before:transition-all after:absolute after:w-full after:h-0.5 after:bg-highlight after:top-full after:transition-all z-20 ${
                                                isOpen ? 'before:rotate-45 before:top-1/2 after:-rotate-45 after:!top-1/2' : ''
                                        } max-xs:ml-2`}
                                        onClick={() => setIsOpen(!isOpen)}
                                ></span>
                        </div>
                </header>
        )
}

export default Header
