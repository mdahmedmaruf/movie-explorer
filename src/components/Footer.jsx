export default function Footer() {
    const fullYear = new Date().getFullYear()
    return (
        <div className='bg-gray-200 py-6'>
            <p className='font-lato text-base text-center'>
                {fullYear} &copy; MovieExplorer{' '}
            </p>
        </div>
    )
}
