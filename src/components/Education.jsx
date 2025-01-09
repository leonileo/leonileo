
const Education = () => {
  // education timeline
  const etimeline = [
    {date: "2023 / 11 - 2025 / 01", title: "Software Engineering - ALX", description: "An intensive, year-long program designed to equip participants with industry-ready skills. The course demands a commitment of 10 hours per day, focusing on hands-on projects, real-world problem-solving, and mastering both frontend and backend development technologies."},
    {date: "2023 / 01 - 2023 / 02", title: "Python computer programming course - Brighter generation", description: "An intensive 2-week program focused on Python programming, leadership, project management, and real-world problem-solving. The course was delivered by MIT students, combining technical expertise with practical insights to prepare participants for real-world challenges."},
    {date: "2021 - 2023", title: "Highschool diploma - Dejazmach Wondirad senior secondary school", description: "Successfully completed high school education, demonstrating strong academic performance and foundational skills."},
    {date: "2022 / 01 - 2022 / 02", title: "Responsive web design - Free code camp", description: "An in-depth course focused on building and designing responsive websites using HTML, CSS, and modern web design principles. It emphasizes accessibility, mobile-first design, and creating user-friendly interfaces across various devices."},
  ]

  return (
    <div id="education" className="my-5 pt-12 text-light md:space-y-16 space-y-10">
      <h1 className='text-title font-bold'>My Education</h1>
      {/* timeline */}
      <div className="timeline md:mx-10 border-l-about border-l-2 rounded-sm space-y-10">
        {/* loop through education array */}
        {etimeline.map((time, x) =>
        <div key={x} className="card px-10 relative">
          <span className={`absolute w-2 h-2 bg-white ${x === 0 && "shadow-sm animate-bounce shadow-white w-4 h-4 -left-[9px]"} rounded-full -left-[5px] top-1`}></span>
          <div className="txt space-y-4">
            <div className="date text-md">{time.date}</div>
            <div className="desc space-y-2">
              <div className={`ename text-xl font-semibold ${x ===0 && "text-white"}`}>{time.title}</div>
              <div className="edesc font-light xl:w-[70%]">{time.description}</div>
            </div>
          </div>
        </div>
        )}

      </div>
    </div>
  )
}

export default Education