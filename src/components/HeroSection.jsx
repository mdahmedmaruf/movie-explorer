import { useState } from 'react'
import { Link } from 'react-router'
import useShows from '../hooks/useShows'

export default function HeroSection() {
    const { shows } = useShows()

    const [randomIndex] = useState(() => Math.floor(Math.random() * 50))
    const randomShow =
        shows.length > 0 ? shows[randomIndex % shows.length] : null
    const bgImage = randomShow?.image?.original || ''

    return (
        <div
            style={{ backgroundImage: bgImage ? `url(${bgImage})` : undefined }}
            className='h-screen flex items-center justify-center bg-no-repeat bg-cover bg-center relative'
        >
            <div className='absolute inset-0 bg-black/50 backdrop-blur-[1px]' />
            <div className='relative z-10 flex flex-col gap-5 text-center'>
                <h1 className='font-lato font-bold text-6xl text-white'>
                    Discover Shows
                </h1>
                <p className='font-lato font-light text-2xl text-white mb-5'>
                    Explore & Discover Your Favorite Shows Around the World
                </p>
                <Link
                    to={`/shows`}
                    className='bg-white py-2 px-5 w-fit m-auto font-lato text-base uppercase rounded-md'
                >
                    Explore Now
                </Link>
            </div>
        </div>
    )
}
