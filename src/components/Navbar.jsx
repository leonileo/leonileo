import IMAGE from '../assets/logo.png'
import { useState } from 'react'
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {

    const [active, setActive] = useState(0);
    const [activeTab, setActiveTab] = useState(false);

    // links
    const links = [
        {title: "Home", link: "/#", num: 0},
        {title: "About", link: "/#about", num: 1},
        {title: "Projects", link: "/#projects", num: 2},
        {title: "Education", link: "/#education", num: 3},
    ]

  return (
    <div id='home' className="sticky top-2 flex justify-between h-[50px] mb-[50px] items-center z-50">
        {/* logo */}
        <div className="logo h-[20px] block w-[80px]"
            style={{
                background: `url(${IMAGE})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center"
            }}
        ></div>
        {/* nav links */}
        <div className="nav bg-nav-bg p-2 rounded-md flex gap-8 transition-all text-nav">
            {/* loop through navigation links */}
                {/* big screen links */}
                {links.map((nl, x) =>
                    <a 
                    className={`xl:block hidden hover:bg-white ${active === nl.num && "bg-opacity-100 transition-all translate-y-[-2px]"} bg-opacity-0 transition-all bg-[#FFFFFF] rounded-md p-2`} 
                    onClick={() => setActive(nl.num)} 
                    key={x} href={nl.link}>
                        {nl.title}
                    </a>
                )}
                {/* small screen links */}
                <div className={`z-20 small-links-div relative xl:hidden ${ activeTab === true ? "overflow-visible": "overflow-hidden"}`}>
                    <button onClick={() => setActiveTab(!activeTab)} className='text-white transition-all relative flex items-center justify-center w-[30px] overflow-hidden'>
                        <CiMenuFries className={`m-1 transition-all ${activeTab === false ? "translate-x-1 opacity-100" :"-translate-x-5 opacity-0"}`}/>
                        <p className={`opacity-100 transition-all ${activeTab === true ? "-translate-x-[9.5px]" : "translate-x-5"}`}>X</p>
                    </button>
                    <div className={`nav-link-small xl:z-0 opacity-0 w-[125px] bg-nav-bg top-7 rounded-md transition-all flex items-center justify-center ${activeTab ? "block opacity-100 -z-10 translate-x-0 -left-32": "translate-x-5 opacity-0 -z-10"} p-2 absolute transition-all`}>
                        <div className='grid space-y-5'>
                            {/* links */}
                            <div className="links-small">
                                {links.map((nl, x) =>
                                    <a 
                                    className={`block w-fit ${active === nl.num && "bg-opacity-100 transition-all translate-y-[-2px]"} bg-opacity-0 transition-all bg-[#FFFFFF] rounded-md p-2`} 
                                    onClick={() => setActiveTab(false)} 
                                    key={x} href={nl.link}>
                                        {nl.title}
                                    </a>
                                )}
                            </div>
                            {/* contact btn */}
                            <a href="#contact" className='bg-white p-2 rounded-md text-nav'>Contact me</a>
                        </div>
                    </div>
                </div>
        </div>
        {/* contact me button */}
        <a href="#contact" className='xl:block hidden bg-white p-2 rounded-md text-nav'>Contact me</a>
    </div>
  )
}

export default Navbar