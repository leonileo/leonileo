import { FiArrowUpRight } from "react-icons/fi";
import banner from '../assets/logo.png'
import my_gym from '../assets/my_gym.png'
import ethio_amba from '../assets/ethio_amba.png'
import fleet_ease from '../assets/fleet_ease.png'
import warka from '../assets/warka.png'
import pumpx from '../assets/pumpx.png'
import mia from '../assets/mia.png'

const Projects = () => {

  // projects
  const projects = [
    {banner: my_gym, name: "MY GYM - Full Stack Web App", tags: ["mvp", "web app", "fitness"], link: "https://my-gym.onrender.com"},
    {banner: mia, name: "Restaurant web app", tags: ["mvp", "web app", "restaurant"], link: "https://rwa-jg4r.onrender.com/"},
    {banner: warka, name: "Warka", tags: ["e-commerce", "web app"], link: "https://warka.onrender.com/"},
    {banner: ethio_amba, name: "Ethioamba - Full Stack Web App", tags: ["mvp", "web app", "startup"], link: "https://ethioamba.com/"},
    {banner: fleet_ease, name: "Fleet-Ease", tags: ["mvp", "web app", "fleet"], link: "https://fleet-ease.onrender.com/"},
    {banner: pumpx, name: "pump-x gym", tags: ["mvp", "web app", "fintech"], link: "https://pump-x.onrender.com/"},
  ]

  return (
    <div id="projects" className="my-5 pt-12 text-light space-y-8">
      <h1 className='text-title font-bold'>My portfolio highlights</h1>
      <div className="project-div grid gap-3 xl:grid-cols-2 grid-cols-1 2xl:grid-cols-3">
        {/* project cards */}
        {/* loop through projects */}
        {projects.map((pr, x) => 
          <div key={x} className='bg-about rounded-md p-5 space-y-6'>
            <div className={`top rounded h-[20vh] hover:animate-none ${pr.banner === banner ? "animate-pulse": "animate-none"}`} 
            style={{
              background: `url(${pr.banner})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: `${pr.banner !== banner ? "contain" : ""}`
            }}
            ></div>
            <div className="bottom flex items-center justify-between">
              <div className="left space-y-2">
                <div className="title font-semibold">{pr.name}</div>
                <div className="tags flex md:flex-nowrap flex-wrap gap-4">
                  {/* loop through the pr tags */}
                  {pr.tags.map((e, x) => (
                    <p key={x} className='bg-tag hover:bg-nav cursor-pointer transition-all  p-4 py-1 rounded'>{e}</p>
                  ))}
                </div>
              </div>

              <a target="_blank" href={pr.link} className="right rounded-md group bg-primary p-2">
                <FiArrowUpRight className="w-8 h-8 group-hover:p-1 transition-all" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects