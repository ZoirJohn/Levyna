import Link from 'next/link'

export default () => {
        return (
                <section className='bg-[url(/bg.png)] bg-no-repeat bg-cover pt-30 h-180'>
                        <div className='wrapper'>
                                <h2 className='font-bold w-2/3'>
                                        We are ready to help you in making your{' '}
                                        <span className='text-highlight relative before:absolute before:w-full before:bg-[url(/underline.svg)] before:h-2 before:bottom-0 before:bg-cover'>
                                                Dream Home
                                        </span>
                                </h2>
                                <p className='text-lg opacity-50 leading-11 w-[45%] mt-5 mb-7.5'>
                                        We try to understand as best we can because of your desire to realize your dream home, of course with minimal costs but the best quality possible
                                </p>
                                <Link href='/service' className='text-highlight border-3 border-highlight py-5 px-9 inline-block hover:bg-highlight hover:text-white transition-all'>Let's start building</Link>
                        </div>
                </section>
        )
}
