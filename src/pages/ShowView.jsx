import { useEffect, useState } from 'react'
import ShowCard from '../components/ShowCard'

export default function ShowView() {
    const [shows, setShows] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchShows = async () => {
            try {
                const res = await fetch('https://api.tvmaze.com/shows')
                const data = await res.json()
                setShows(data)
            } catch (err) {
                setError(`Failed to load shows ${err}`)
            } finally {
                setLoading(false)
            }
        }
        fetchShows()
    }, [])
    return (
        <div className='container mx-auto py-10'>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <div className='grid grid-cols-4 gap-5'>
                {shows.map((show) => (
                    <ShowCard key={show.id} show={show} />
                ))}
            </div>
        </div>
    )
}
