'use client'

const Buttons = () => {
        return (
                <div className='absolute top-3/4 left-144 flex max-md:left-1/2 max-md:top-4/5 max-md:-translate-x-1/2'>
                        <button
                                onClick={(e) => {
                                        e.target.addEventListener('click', () => {
                                                document.getElementsByClassName('hidescroll')[0].scrollBy({ left: -1300 })
                                        })
                                }}
                                className='w-12 h-12 bg-white cursor-pointer inline-flex justify-center items-center'
                        >
                                <svg height='24px' width='24px' className='rotate-180'>
                                        <use href='#arrow'></use>
                                </svg>
                        </button>
                        <button
                                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                        e.target.addEventListener('click', () => {
                                                document.getElementsByClassName('hidescroll')[0].scrollBy({ left: 1300 })
                                        })
                                }}
                                className='w-12 h-12 bg-highlight cursor-pointer inline-flex justify-center items-center'
                        >
                                <svg height='24px' width='24px'>
                                        <use href='#arrow'></use>
                                </svg>
                        </button>
                </div>
        )
}

export default Buttons
