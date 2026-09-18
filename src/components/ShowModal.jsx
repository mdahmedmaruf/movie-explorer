import { StarIcon, XCircleIcon } from '@heroicons/react/16/solid'

export default function ShowModal({ show, onClose }) {
    if (!show) return null
    return (
        <div className='fixed inset-0 z-20 flex items-center justify-center p-5 bg-black/80 backdrop-blur-sm'>
            <div className='relative w-full max-w-4xl bg-gray-100 rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-hidden'>
                <button
                    onClick={onClose}
                    className='absolute top-2 right-2 cursor-pointer'
                >
                    <XCircleIcon className='size-6 text-white md:text-gray-800' />
                </button>

                <div className='w-full md:w-2/5'>
                    <img
                        src={show.image?.original || show.image?.medium}
                        alt={show.name}
                        className='w-full h-64 md:h-full object-cover'
                    />
                </div>
                <div className='w-full md:w-3/5 p-6 md:p-8'>
                    <div className='flex flex-col justify-between h-full'>
                        <div>
                            <h2 className='font-lato font-light text-2xl md:text-3xl mb-2'>
                                {show.name}
                            </h2>
                            <div className='flex items-center gap-3 mb-4'>
                                <p className='flex items-center gap-1 font-lato font-semibold text-xs md:text-sm'>
                                    <StarIcon className='size-5 text-amber-400' />
                                    {show.rating?.average || 'N/A'}
                                </p>
                                <span>|</span>
                                <p className='font-lato text-sm'>
                                    {show.premiered?.slice(0, 4)}
                                </p>
                                <span>|</span>
                                <p className='font-lato text-xs uppercase bg-gray-300 px-2 py-1'>
                                    {show.language}
                                </p>
                            </div>
                            <div className='max-h-48 md:max-h-60 overflow-y-auto overscroll-auto md:overscroll-contain leading-relaxed py-2 px-2 bg-gray-200 md:bg-transparent rounded-md'>
                                <p
                                    className='font-lato text-sm md:text-base'
                                    dangerouslySetInnerHTML={{
                                        __html: show.summary,
                                    }}
                                />
                            </div>
                        </div>
                        <div className='border-t border-gray-200 pt-4 mt-6 grid grid-cols-2 gap-y-2 gap-x-4 text-xs md:text-sm'>
                            <p className=''>
                                <strong>Genres:</strong>{' '}
                                {show.genres?.join(', ')}
                            </p>
                            <p>
                                <strong>Type: </strong>
                                {show?.type}
                            </p>
                            <p>
                                <strong>Status: </strong>
                                {show?.status}
                            </p>
                            <p>
                                <strong>Runtime: </strong>
                                {show?.runtime}
                            </p>
                        </div>
                        <p className='font-lato text-xs md:text-sm mt-4'>
                            <strong>Official Site: </strong>
                            {show?.officialSite || 'N/A'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
