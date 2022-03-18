import Link from 'next/link'

export default function GridButton({color, textColor, icon, link}) {
    return (
      <button className={'bg-'+color+' p-2 m-2 border-2 rounded-lg border-transparent text-'+textColor+' tracking-widest transition duration-700 hover:shadow-3xl'}>
          <Link href={link}><a target="_blank">{icon}</a></Link>
      </button>
    )
  }
  