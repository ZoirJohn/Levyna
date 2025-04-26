'use client'
import React, { useEffect, useRef, useState } from 'react'

type CounterProps = {
        target: number
        duration?: number
        className: string
}

const Counter: React.FC<CounterProps> = ({ target, duration = 2000, className }) => {
        const [count, setCount] = useState(0)
        const ref = useRef<HTMLDivElement | null>(null)
        const hasAnimated = useRef(false)

        useEffect(() => {
                const current = ref.current
                const observer = new IntersectionObserver(
                        ([entry]) => {
                                if (entry.isIntersecting && !hasAnimated.current) {
                                        hasAnimated.current = true
                                        startCounting()
                                }
                        },
                        { threshold: 0.5 }
                )

                if (current) observer.observe(current)

                return () => {
                        if (current) observer.unobserve(current)
                }
        })

        const startCounting = () => {
                const startTime = performance.now()
                console.log(startTime)
                const animate = (time: number) => {
                        const elapsed = time - startTime
                        const progress = Math.min(elapsed / duration, 1)
                        const currentCount = Math.floor(progress * target)

                        setCount(currentCount)

                        if (progress < 1) requestAnimationFrame(animate)
                }

                requestAnimationFrame(animate)
        }

        return (
                <h3 ref={ref} className={className}>
                        {count}+
                </h3>
        )
}

export default Counter
