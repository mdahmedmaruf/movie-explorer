import { Link } from 'react-router'

export default function Header() {
    return (
        <div className='bg-gray-100 border-b border-gray-200 py-6 fixed w-full z-10'>
            <div className='container mx-auto px-6 md:px-0'>
                <div className='flex items-center justify-between'>
                    <div className='font-lato font-light text-2xl'>
                        <Link to={`/`}>MovieExplorer</Link>
                    </div>
                    <div className='font-lato text-base'>
                        <Link to={`/shows`}>Shows</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
