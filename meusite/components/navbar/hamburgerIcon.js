export default function HamburgerIcon({onClick}) {
  return (
    <div className="space-y-3 fixed top-0 right-0 mt-10 mr-10 lg:hidden" onClick={onClick}>
        <div className="w-14 h-1.5 bg-purple-300"></div>
        <div className="w-14 h-1.5 bg-purple-300"></div>
        <div className="w-14 h-1.5 bg-purple-300"></div>
    </div>
  )
}
