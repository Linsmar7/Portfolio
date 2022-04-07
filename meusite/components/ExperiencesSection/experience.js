import Link from 'next/link'

export default function Experience({icon, name, description, date, link}) {
    return (
    <a href={link} target='_blank'>
        <div className='flex flex-col items-center justify-center w-60 h-44 lg:w-72 lg:h-56 lg:gap-y-2 text-xs lg:text-sm text-center p-2 lg:m-2 border-2 rounded-lg border-transparent tracking-widest transition duration-700 hover:shadow-3xl'>
            <img src={icon} alt={name} className='lg:w-14 lg:h-20 w-10 h-14 object-fill'/>
            <p className='font-bold'>{name}</p>
            <p>{description}</p>
            <p className='italic text-xs'>{date}</p>
        </div>
    </a>
    )
}  