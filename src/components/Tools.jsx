import Figma from '../assets/figma.png';
import Css from '../assets/css.png';
import JavaScript from '../assets/js.png';
import NodeJs from '../assets/nodejs.png';
import ExpressJs from '../assets/express.png';
import MongoDB from '../assets/mongoDB.png';
import ReactJs from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import { useState } from 'react';
import { RiArrowDownDoubleFill } from "react-icons/ri";

const Tools = () => {

  // states
  const [show, setShow] = useState(false);

  // tools
  const tools = [
    {icon: Figma, title: "Figma", description: "Design and prototype tool"},
    {icon: Css, title: "Css", description: "User interface"},
    {icon: JavaScript, title: "JavaScript", description: "User interaction"},
    {icon: NodeJs, title: "NodeJs", description: "Web server"},
    {icon: ExpressJs, title: "ExpressJs", description: "Node framework"},
    {icon: MongoDB, title: "MongoDB", description: "Database"},
    {icon: ReactJs, title: "ReactJs", description: "JavaScript framework"},
    {icon: Tailwind, title: "Tailwind", description: "User interface"},
  ];

  return (
    <div className="my-5 pt-12 text-light space-y-16">
      <div className="top space-y-2">
        <h1 className='text-title font-bold'>Essential tools i use</h1>
        <p className="w-[50%]">Discover the powerful tools and technologies i use to create exceptional, high-performing websites & applications.</p>
      </div>

      {/* tools div */}
      <div className="tools grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-4 my-5">
        {/* loop through the tools. */}
        {tools.map((tools, x) => (
          <div key={x} className=" tool border-2 rounded-lg border-tool-stroke p-2 flex gap-5 hover:bg-secondary transition-all cursor-pointer">
            <div className="icon bg-tool-fill w-[80px] px-4 p-2 rounded-md flex items-center justify-center">
              <img src={tools.icon} />
            </div>
            <div className="desc">
              <p className="text-2xl">{tools.title}</p>
              <p className="">{tools.description}</p>
            </div>
          </div>
        )).splice(0, `${ show ? tools.length : 8}`)}
      </div>
      <div className="btn flex items-center justify-center">
        {tools.length > 8 &&
          <button onClick={() => setShow(!show)} className='text-white'>
            {show ? "Show less" : "Show more"}
            <span className={`flex justify-center w-full ${show ? "hidden" : "block"}`}><RiArrowDownDoubleFill className='w-6 h-6 animate-pulse  delay-1000' /></span> 
          </button>
        }
      </div>
    </div>
  )
}

export default Tools