export default function Skill({name, icon}) {
    return (
      <div className='flex flex-col items-center justify-center w-20 h-20 lg:w-24 lg:h-24 lg:gap-y-2 gap-x-4 text-xs lg:text-sm text-center p-2 lg:m-2 border-2 rounded-lg border-transparent tracking-widest transition duration-700 hover:shadow-3xl'>
          <img src={icon} alt={name} className='lg:w-10 lg:h-10 w-8 h-8'/>
          <p>{name}</p>
      </div>
    )
  }  