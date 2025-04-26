import Image from 'next/image'
import Link from 'next/link'
import Counter from '../components/Count'
import building from '../../public/building.png'

export default () => {
        return (
                <>
                        <section className='bg-[url(/bg.png)] bg-no-repeat bg-cover bg-right pt-30 h-180 max-md:before:absolute before:w-full before:h-full before:bg-white before:top-26 before:opacity-70 before:z-0 max-xs:before:top-21 relative overflow-hidden'>
                                <div className='wrapper relative z-10'>
                                        <h2 className='font-bold w-2/3 max-md:w-full max-sm:'>
                                                We are ready to help you in making your{' '}
                                                <span className='text-highlight relative before:absolute before:w-full before:bg-[url(/underline.svg)] before:h-2 before:bottom-0 before:bg-cover'>
                                                        Dream Home
                                                </span>
                                        </h2>
                                        <p className='description w-[45%] mt-5 mb-7.5 max-md:w-full'>
                                                We try to understand as best we can because of your desire to realize your dream home, of course with minimal costs but the best quality possible
                                        </p>
                                        <Link href='/service' className='text-highlight border-3 border-highlight py-5 px-9 inline-block hover:bg-highlight hover:text-white transition-all'>
                                                Let's start building
                                        </Link>
                                </div>
                        </section>
                        <section className='mt-25 max-md:mt-15'>
                                <div className='wrapper flex flex-col gap-y-9.5 '>
                                        <div className='flex xl:gap-x-32 gap-x-16 max-lg: items-center max-lg:flex-col'>
                                                <h2 className='font-semibold basis-1/2'>The best service we offer to you</h2>
                                                <p className='basis-1/2 shrink-0 description max-lg:text-center'>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                                                        the 1500s,
                                                </p>
                                        </div>
                                        <div className='flex justify-between group transition-all text-sm flex-wrap gap-10 max-lg:justify-center'>
                                                <div className='hover:scale-110 transition-all cursor-pointer basis-77.5 w-full'>
                                                        <Image src='/card1.png' alt='cardImage' width={309} height={406} className='mb-5' />
                                                        <h4 className='font-semibold mb-1'>Choose Interior</h4>
                                                        <p className='opacity-50 mb-7.5 leading-11'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                                        <Link href='/' className='flex gap-x-4 items-center'>
                                                                Contact Now
                                                                <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#000'>
                                                                        <path d='m600-200-57-56 184-184H80v-80h647L544-704l56-56 280 280-280 280Z' />
                                                                </svg>
                                                        </Link>
                                                </div>
                                                <div className='hover:scale-110 transition-all cursor-pointer basis-77.5 w-full'>
                                                        <Image src='/card2.png' alt='cardImage' width={309} height={406} className='mb-5' />
                                                        <h4 className='font-semibold mb-1'>Best Construction</h4>
                                                        <p className='opacity-50 mb-7.5 leading-11'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                                        <Link href='/' className='flex gap-x-4 items-center'>
                                                                Contact Now
                                                                <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#000'>
                                                                        <path d='m600-200-57-56 184-184H80v-80h647L544-704l56-56 280 280-280 280Z' />
                                                                </svg>
                                                        </Link>
                                                </div>
                                                <div className='hover:scale-110 transition-all cursor-pointer basis-77.5 w-full'>
                                                        <Image src='/card3.png' alt='cardImage' width={309} height={406} className='mb-5' />
                                                        <h4 className='font-semibold mb-1'>Color Provider</h4>
                                                        <p className='opacity-50 mb-7.5 leading-11'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                                        <Link href='/' className='flex gap-x-4 items-center'>
                                                                Contact Now
                                                                <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#000'>
                                                                        <path d='m600-200-57-56 184-184H80v-80h647L544-704l56-56 280 280-280 280Z' />
                                                                </svg>
                                                        </Link>
                                                </div>
                                                <div className='hover:scale-110 transition-all cursor-pointer basis-77.5 w-full'>
                                                        <Image src='/card4.png' alt='cardImage' width={309} height={406} className='mb-5' />
                                                        <h4 className='font-semibold mb-1'>Security Contract</h4>
                                                        <p className='opacity-50 mb-7.5 leading-11'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                                        <Link href='/' className='flex gap-x-4 items-center'>
                                                                Contact Now
                                                                <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#000'>
                                                                        <path d='m600-200-57-56 184-184H80v-80h647L544-704l56-56 280 280-280 280Z' />
                                                                </svg>
                                                        </Link>
                                                </div>
                                        </div>
                                </div>
                        </section>
                        <section className='mt-25 bg-myrtle max-md:mt-15'>
                                <div className='wrapper py-16 text-white flex items-center gap-12.5 max-lg:flex-col'>
                                        <div className='max-w-106 max-lg:max-w-full'>
                                                <h3 className='font-semibold text-center'>How much have we accomplished ?</h3>
                                        </div>
                                        <div className='flex gap-17 max-lg:gap-7 flex-wrap justify-center max-xs:flex-col'>
                                                <div>
                                                        <Counter target={36} key={12} className='text-highlight font-semibold' />
                                                        <p className='text-nowrap'>Project Complete</p>
                                                </div>
                                                <div>
                                                        <Counter target={25} key={12} className='text-highlight font-semibold' />
                                                        <p className='text-nowrap'>Different Cities</p>
                                                </div>
                                                <div>
                                                        <Counter target={10} key={12} className='text-highlight font-semibold' />
                                                        <p className='text-nowrap'>Contractor Award</p>
                                                </div>
                                                <div>
                                                        <Counter target={40} key={12} className='text-highlight font-semibold' />
                                                        <p className='text-nowrap'>Happy Client</p>
                                                </div>
                                        </div>
                                </div>
                        </section>
                        <section className='mt-25 max-md:mt-15'>
                                <div className='wrapper flex items-center gap-12 max-xl:gap-6 max-lg:flex-col max-lg:text-center'>
                                        <Image src={building} alt='building' className='max-w-132 w-full shrink-0' />
                                        <div className='pr-19 max-xl:pr-0'>
                                                <h2 className='font-semibold'>Levyna will provide a pleasant experience in making a house</h2>
                                                <p className='description mt-5 mb-7.5'>
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                                                        the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                                </p>
                                                <Link href='/' className='button'>
                                                        Consultation with Us
                                                </Link>
                                        </div>
                                </div>
                        </section>
                </>
        )
}
