import { useEffect, useState } from 'react'

export default function useShows(search = '') {
    const [shows, setShows] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchShows = async () => {
            try {
                const url = search.trim()
                    ? `https://api.tvmaze.com/search/shows?q=${search}`
                    : 'https://api.tvmaze.com/shows'
                const res = await fetch(url)

                if (!res.ok) throw new Error('Failed to load shows')

                const data = await res.json()
                const list = search.trim()
                    ? data.map((item) => item.show)
                    : data
                setShows(list)
            } catch (err) {
                setError(`Failed to load shows ${err}`)
            } finally {
                setLoading(false)
            }
        }
        fetchShows()
    }, [search])
    return { loading, shows, error }
}
