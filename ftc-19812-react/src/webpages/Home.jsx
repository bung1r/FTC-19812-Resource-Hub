import HomepageCollage from '../assets/collage.png';
import RoboticsTopBanner from '../assets/robotics_top_banner.png'

import '../App.css'
import './Home.css'

function HomePage() {
    return (
        (<>
            <div className="homesection1">
                <div 
                style={{
                    justifyContent:"center"

                }}
                >
                <h1>We are</h1>
                <h1>
                    <span className='quantum'>
                    Quantum
                    </span>
                    <span className='leap'>
                    {" "}Leap
                    </span>
                </h1>
                <h2>Teams 19812 and 23796</h2>
                
                <p
                    style={{
                    width:"80%",
                    margin: "0 auto",
                    }}
                >
                    We are a team dedicated to making robots. And not just any robots, robots that our viewers would be proud of. 
                    Robots that can win not just competitions, but people's hearts as well.
                </p>
                </div>

                <div>
                <img 
                src={RoboticsTopBanner}
                alt="Banner"
                style={{
                    width:"auto",
                }}
                
                />
                </div>
            
            </div>
            
            <div className='homesection2'>
                <img
                src={HomepageCollage}
                alt='Collage'
                style={{
                    width:"35%"
                }}
                >
                    
                </img>
                <div>
                    <h1>
                    Why a website?
                    </h1>

                    <h3
                    style={{
                    margin: "0 auto",
                    color:"rgb(206, 206, 206)",
                    width:"80%"
                    }}
                    >
                    Our website not only centralizes all OA FTC robotics specific resources in one place for easy access,
                    (which is only accessible upon sign in), but also provides necessary resources (documents, guides, etc.)
                    for all FTC teams! <br/><br/>
                                        
                        Feel free to use the guides found in the 'Resource' sidebar for your team! Signing in will allow you special features,
                        but all Learning Resources can be accessed without doing so. <br/><br/>

                        For FTC 19812 or 23796 members, please sign in with Google with your robotics organization account in order to access 
                        specific team resources. 


                    </h3>
                </div>

            </div>
            
            <div className='homesection3'>
                <h1> Our Sponsors! </h1>
                <div className='homewhiteLine'></div>

                <h2> Motors Sponsors </h2>
                <div className="homesponsorHolder">
                    <h2> Disney Parks and Resorts </h2>
                    <p> Right in the backyard of Disneyland Anaheim, we are grateful to our Disney mentors and sponsors who have been instrumental in providing technical experience and funds to our program. </p>
                </div>
                <div className='homewhiteLine'></div>

                <h2> Gear Sponsors </h2>
                <div className="homesponsorHolder"></div>
                <div className='homewhiteLine'></div>

                <h2> Sprocket Sponsors </h2>
                <div className="homesponsorHolder"></div>
            </div>
            {/* This over here is the spacer! */}
            <div style={{padding:"20px"}}> </div>

        </>)
    )
}

export default HomePage