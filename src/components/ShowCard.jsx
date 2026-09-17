import { CalendarDays, Star } from 'lucide-react'

export default function ShowCard({ show }) {
    const { image, name, rating, premiered } = show
    console.log(show)
    return (
        <div className='border border-gray-200 p-4 rounded-lg'>
            <img
                src={image.medium}
                alt={name}
                className='w-fit h-90 mx-auto object-contain rounded-xl'
            />
            <h2 className='font-exo font-semibold text-2xl text-gray-600 leading-10 mb-2'>
                {name}
            </h2>
            <p className='font-roboto text-gray-500 text-base flex items-center justify-between pb-6'>
                <span className='flex items-center gap-1'>
                    <Star fill='gold' color='gold' size={20} />
                    {rating.average}
                </span>
                <span className='flex items-center gap-1'>
                    <CalendarDays color='gray' size={20} />
                    {premiered}
                </span>
            </p>
            <button className='bg-gray-800 text-gray-100 font-exo text-base py-2 px-5 rounded-lg cursor-pointer'>
                See Details
            </button>
        </div>
    )
}
