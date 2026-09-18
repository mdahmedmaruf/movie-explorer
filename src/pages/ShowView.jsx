import { useState } from 'react'
import ShowCard from '../components/ShowCard'
import ShowModal from '../components/ShowModal'
import useShows from '../hooks/useShows'

export default function ShowView() {
    const [search, setSearch] = useState('')
    const { shows, loading, error } = useShows(search)
    const [modal, setModal] = useState(null)
    const [sortBy, setSortBy] = useState('popular')

    // const filterShows = shows.filter((show) =>
    //     show.name.toLowerCase().includes(search.toLocaleLowerCase()),
    // )

    const sortedShows = [...shows].sort((a, b) => {
        if (sortBy === 'rating-desc')
            return (b.rating?.average || 0) - (a.rating?.average || 0)
        if (sortBy === 'rating-asc')
            return (a.rating?.average || 0) - (b.rating?.average || 0)
        if (sortBy === 'name-asc') return a.name.localeCompare(b.name)
        if (sortBy === 'name-desc') return b.name.localeCompare(a.name)
        if (sortBy === 'date-desc')
            return new Date(b.premiered || 0) - new Date(a.premiered || 0)
        if (sortBy === 'date-ase')
            return new Date(a.premiered || 0) - new Date(b.premiered || 0)
        return 0
    })

    return (
        <div className='container mx-auto py-10 px-6 md:px-0'>
            <div className='flex justify-between items-center mb-6 mt-20'>
                <input
                    type='text'
                    name=''
                    id=''
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search shows...'
                    className='border border-gray-300 px-3 py-2 rounded-md w-full max-w-sm font-lato text-sm'
                />
                <select
                    name='sort'
                    id='sort'
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className='border border-gray-300 px-3 py-2 rounded-md w-full max-w-sm font-lato text-sm'
                >
                    <option value='popular'>Most Popular</option>
                    <option value='rating-desc'>Highest Rating</option>
                    <option value='rating-asc'>Lowest Rating</option>
                    <option value='name-asc'>A to Z</option>
                    <option value='name-desc'>Z to A</option>
                    <option value='date-desc'>Most Recently Added</option>
                    <option value='date-asc'>Least Recently Added</option>
                </select>
            </div>

            {loading && <p className='font-lato text-base'>Loading...</p>}
            {error && <p className='font-lato text-base'>Error: {error}</p>}

            {sortedShows.length === 0 ? (
                <p className='font-lato text-base'>No shows found "{search}"</p>
            ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    {sortedShows.map((show) => (
                        <ShowCard
                            key={show.id}
                            show={show}
                            onModalOpen={() => setModal(show)}
                        />
                    ))}
                </div>
            )}
            {modal && <ShowModal show={modal} onClose={() => setModal(null)} />}
        </div>
    )
}
