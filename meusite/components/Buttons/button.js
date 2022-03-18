

export default function Button({children, color, textColor, margin}) {
  return (
    <button className={'bg-'+color+' p-2 px-6 rounded-2xl text-'+textColor+' tracking-widest '+margin}>
        {children}
    </button>
  )
}