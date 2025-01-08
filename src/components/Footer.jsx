
const Footer = () => {
  return (
    <div id='footer' className="my-5 pt-12 text-light space-y-16 xl:flex justify-around">
      {/* left */}
      <div className="left space-y-8">
        <h2 className='text-title font-semibold'>Let&apos;s work <br /> together today!</h2>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-primary shadow-primary shadow rounded-full "></span>
          <p className="text-sm">Site updated at 2025 - 01 - 06</p>
        </div>
      </div>

      {/* right */}
      <div className="right flex gap-20">
        <div className="sitemap">
          <p className="font-bold mb-1">Sitemap</p>
          <p>Home</p>
          <p>About</p>
          <p>Projects</p>
          <p>Education</p>
          <p>Contact me</p>
        </div>
        <div className="socials">
          <p className="font-bold mb-1">Socials</p>
          <a className="block" href="https://https://github.com/leonileo" target="_blank" >Github</a>
          <a className="block" href="https://www.linkedin.com/in/kaleb-wendwessen/" target="_blank" >Linkedin</a>
          <a className="block" href="https://x.com/kalebleonileo" target="_blank" >x (twitter)</a>
          <a className="block" href="https://instagram.com/kalebleo4" target="_blank" >Instagram</a>
          <a className="block" href="https://t.me/kaleb_leo" target="_blank" >Telegram</a>
        </div>
      </div>
    </div>
  )
}

export default Footer