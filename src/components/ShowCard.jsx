import { CalendarDaysIcon, StarIcon } from '@heroicons/react/16/solid'

export default function ShowCard({ show, onModalOpen }) {
    const { image, name, rating, premiered } = show

    console.log(show)
    return (
        <div className='rounded-lg overflow-hidden transition duration-300 transform shadow-md hover:shadow-xl'>
            <div className='aspect-2/3 w-full bg-gray-950'>
                <img
                    src={image?.medium || image?.original}
                    alt={name}
                    className='w-full h-full object-cover'
                />
            </div>
            <div className='p-3'>
                <h2 className='font-lato font-light text-2xl truncate text-gray-600 leading-10 mb-2'>
                    {name}
                </h2>
                <p className='font-lato text-gray-500 text-base flex items-center justify-between pb-6'>
                    <span className='flex items-center gap-1'>
                        <StarIcon className='size-5 text-amber-400' />
                        {rating?.average || 'N/A'}
                    </span>
                    <span className='flex items-center gap-1'>
                        <CalendarDaysIcon className='size-5 text-gray-600' />
                        {premiered?.slice(0, 4)}
                    </span>
                </p>
                <button
                    onClick={onModalOpen}
                    className='bg-gray-800 text-gray-100 font-lato uppercase text-sm tracking-wide py-2 px-5 rounded-lg cursor-pointer'
                >
                    See Details
                </button>
            </div>
        </div>
    )
}
