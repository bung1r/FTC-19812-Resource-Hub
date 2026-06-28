// import { useEffect } from "react";
// import { supabase } from "../lib/supabase"
import HeroRecruitmentImg from "../assets/hero_recruitment.png"
import WhyJoinUsImg from "../assets/why_join_us_img.png"
import TimeCommitmentImg from "../assets/time_commitment_img.png"
import Dropdown from "../props/dropdown"

import "./Recruitment.css"

function Recruitment() {

    return (
        (<>
            {/* Hero Section */}
            <div className="rechero">
                <h1>Join Quantum Leap FTC</h1>
                <h2>Teams 19812 and 23796</h2>
                <p> Build robots. Learn engineering. Make friends. Compete. </p>
                <a href="https://docs.google.com" className="recjoinFTCButton">
                    Join FTC!
                </a>
               
            </div>
            

            {/* What is FTC */}
            <div className="recsection1">
                <img src={HeroRecruitmentImg}></img>
                <div className="recsection1Text">
                    <h1>
                        What is FTC?
                    </h1>
                    <h2>
                        FIRST Tech Challenge (FTC) is a global robotics competition for students in grades 7–12 organized by the non-profit FIRST <br/><br/>
                        Teams of up to 15 members design, build, and program robots using a reusable, Android-based kit to compete in annual, alliance-based game challenges.
                    </h2>         
                </div>
            </div>
            
            {/* Why Join Us */}
            <div className="recsection2">
                <div className="recsection1Text">
                    <h1>
                        Why Join Us?
                    </h1>
                    <h2>
                        You can do the following: <br/> <br/>
                    </h2>         
                    <h2 style={{textAlign:"left"}}>
                        • Build REAL Robots <br/>
                        • Learn Programming (Java) <br/>
                        • Design Mechanical Systems <br/>
                        • Publicity/Outreach <br/>
                        • Complete in Competitions <br/><br/>
                    </h2>
                    <h2> You decide! </h2>
                </div>  
                <img src={WhyJoinUsImg}></img>
                
            </div>

            {/* NO EXPERIENCE NEEDED  */}
            <div className="recsection3">
                <div className="recsection1Text">
                    <h1> NO EXPERIENCE NEEDED!! </h1>
                    <h2> 
                        That's right! You need absolutely 0 experience in order to get on the team <br></br>
                        Of course, it is preferred you join in the beginning of the year, and you have a slight idea of what you're getting into <br></br>
                        However, we will train you to the best of our abilities regardless! <br></br>
                    </h2>
                </div>
            </div>

            {/* TIme Commitment  */}
            <div className="recsection4">
                <img src={TimeCommitmentImg}></img>
                <div className="recsection1Text">
                    <h1>
                        Time Commitment
                    </h1>
                    <h2>
                        There are meetings on Monday to Thursday from 3:30PM to 5:00PM, and a Saturday meeting from 8:00AM to 12:00PM <br/> <br/>

                        At bare minimum, a total of 5 - 6 hours is recommended (more is preferred). If you can't do this, you will (unfortunately) have to be caught up in your own time.  <br/> <br/>

                        Going to the competitions is also highly recommended. These usually last for most of a day on selet Saturdays, and you'll have to drive upwards of 30m to 1 hour.
                    </h2>         
                </div>
            </div>

            <div className="recsection3">
                <div className="recsection1Text">
                    <h1> ?? Frequently Asked Questions ?? </h1>
                    <Dropdown question="How much experience is recommended!" answer="Depends on what team you're joining! There's a software and mechanical/eletrical team, so any knowledge about whatever team you want to join will help a ton! For software, knowing Java concepts would be quite helpful. However, as long as you are open to learning, any amount of experience (even none) is fine!"></Dropdown>
                    <Dropdown question="What grade level do I need to be to join?" answer="Any! It doesn't matter what grade you're in, just come on in and let our leads handle it from there. (But do apply, of course!)"></Dropdown>
                    <Dropdown question="I have other extracurriculars, so what can I do for FTC?" answer="As long as you're catching up with the rest of our team, you're good! You can do this through self-learning
                    through this website here OR by contacting your lead in order to ask for resources to study. Although do note that not showing up for long periods of time without notifying anyone may result in 
                    termination from the team. We understand you have sports and stuff, but even so, try to keep up."></Dropdown>
                    <Dropdown question="Can I join mid-season?" answer="Yes! However, it isn't recommended since it'll be tough to catch up with everybody else on the team. However, if you're fit for the challenge, or if you've already had some experience, you're more than welcome to join!"></Dropdown>
                    <Dropdown question="Will I need to spend any money?" answer="Nope! Well, besides money for gas and snacks, joining the team will cost a grand total of $0."></Dropdown>
                </div>
            </div>


             
        </>)
    )
}

export default Recruitment