import { CiAt } from "react-icons/ci";
import kaleb from "../assets/kaleb.png"
import { HiDownload } from "react-icons/hi";

const Hero = () => {

  // contents
  const status = "Available for work"
  const heading = "Building scalable modern websites for the future"

  return (
    <div id="home" className="my-5 pt-12 text-light xl:flex xl:space-y-0 space-y-20 xl:mx-0 mx-10 justify-center gap-40">
      {/* left section */}
      <div className="left">
        <div className="img flex justify-center pt-12 px-12 rounded-b-3xl"
          style={{
            background: "linear-gradient(rgba(28, 32, 36, 0.5), rgba(37, 90, 114, 0.86))"
          }}
        >
          <img src={kaleb} className="relative -bottom-[.5px]" alt="Kaleb wendwessen." />
        </div>
      </div>

      {/* right section */}
      <div className="right space-y-12">
        <p className="flex items-center gap-3">{status} <span className="w-2 h-2 block bg-green-400 rounded-full animate-pulse shadow-sm shadow-green-600"></span></p>
        <div className="text xl:text-4xl text-2xl xl:w-[340px] ">
          <h2 className="leading-normal">{heading}</h2>
        </div>
        <div className="cta flex gap-[32px]">
          <a href="/cv.pdf" download="kaleb_wendwessen_cv.pdf"
            className="bg-primary text-nowrap border-2 border-transparent transition-all hover:bg-secondary hover:border-primary p-2 py-3 rounded-md capitalize flex gap-3 items-center"
           >
            Download my CV <HiDownload /> </a>
          <button className="flex gap-3 items-center bg-secondary text-nowrap border-2 border-primary transition-all hover:bg-primary p-2 rounded-md">Contact me <CiAt /> </button>
        </div>
      </div>
    </div>
  )
}

export default Hero