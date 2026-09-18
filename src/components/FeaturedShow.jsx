import { useState } from 'react'
import { Link } from 'react-router'
import useShows from '../hooks/useShows'
import ShowCard from './ShowCard'
import ShowModal from './ShowModal'

export default function FeaturedShow() {
    const { shows, loading, error } = useShows()
    const [modal, setModal] = useState(null)

    const featuredGenreShows = [
        'Action',
        'Thriller',
        'Comedy',
        'Romance',
        'Drama',
    ]

    return (
        <div className='container mx-auto py-12 px-4'>
            {loading && <p className='font-lato text-base'>Loading...</p>}
            {error && <p className='font-lato text-base'>Error: {error}</p>}
            {!loading &&
                !error &&
                featuredGenreShows.map((genre) => {
                    const genreShows = shows
                        .filter((show) => show.genres?.includes(genre))
                        .slice(0, 4)
                    if (genreShows.length === 0) return null

                    return (
                        <div key={genre}>
                            <div className='flex justify-between items-center py-4 my-6'>
                                <h2 className='font-lato font-bold text-2xl'>
                                    Treading in {genre}
                                </h2>
                                <Link
                                    to={`/shows`}
                                    className='bg-gray-800 text-white py-2 px-5 font-lato text-base uppercase rounded-md'
                                >
                                    Explore Now
                                </Link>
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                                {genreShows.map((show) => (
                                    <ShowCard
                                        key={show.id}
                                        show={show}
                                        onModalOpen={() => setModal(show)}
                                    />
                                ))}
                            </div>
                        </div>
                    )
                })}
            <ShowModal show={modal} onClose={() => setModal(null)} />
        </div>
    )
}
