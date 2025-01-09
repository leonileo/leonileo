import CountUp from "react-countup"

const About = () => {
  const info = 
  <>
      Welcome! I&apos;m <b> Kaleb wendwessen </b>, 
      a professional software engineer and full-stack web developer passionate about building dynamic,
      user-friendly web solutions. 
      With a blend of technical precision and creative flair, 
      I transform ideas into seamless digital experiences that deliver both impact and performance.
  </>;

  const status = [
    {title: "projects done", num: 5},
    {title: "years of experience", num: 2},
  ]


  return (
    <div id="about" className="my-5 pt-12 text-light">
      <div className=" w-full md:flex space-y-5 bg-about md:pl-16 p-5 py-8 rounded-xl">
        {/* left section */}
        <div className="left w-full space-y-8">
          <div className="top xl:w-[47%] md:w-[70%] text-pretty">
            <h3 className="text-md">{info}</h3>
          </div>
          <div className="bottom flex gap-[22px]">
            {/* loop through status */}
            {status.map((status, x) => 
            <div key={x}>
              <p className="xl:text-4xl text-3xl font-bold">
                <CountUp start={0} end={status.num}/>
                <span className="text-primary"> +</span>
              </p>
              <p className="normal-case">{status.title}</p>
            </div>
          )}
          </div>
        </div>
        {/* right section */}
        <div className="right xl:min-w-[10%] min-w-[15%] w-auto flex  items-end justify-center">
          <b className="lg:text-5xl text-4xl">K.w</b>
        </div>
      </div>
    </div>
  )
}

export default About