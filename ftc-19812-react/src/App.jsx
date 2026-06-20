import { useState } from 'react'
import {Routes, Route, useNavigate } from "react-router-dom";
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import FTCLogo from './assets/ftc_logo.png'

import YoutubeLogo from './assets/youtube_icon.svg';

import HomePage from './webpages/Home.jsx';

import ResourcesPage from './webpages/Resources.jsx';
import RHardware from './webpages/RHardware.jsx';
import RModules from './webpages/RModules.jsx';
import RSoftware from './webpages/RSoftware.jsx';
import ROther from './webpages/ROther.jsx';

import CreditsPage from './webpages/Credits.jsx';

import RecruitmentPage from './webpages/Recruitment.jsx'

import SettingsPage from './webpages/Settings.jsx'

import SignInPage from './webpages/SignIn.jsx'


import './App.css'



function App() {
  // const [count, setCount] = useState(0)
  // const [sympathies, setSympathies] = useState(10) 
  // const [page, setPage] = useState("Home");
  const navigate = useNavigate();
  const [sideBarEnabled, setSideBar] = useState(true) // open and closed;

  return (
    <div className='page'>
      
      <header className='headerClass'>
        <div className='topLeftLogo'>
          <a href="http://localhost:5173/" target="_blank">
            <img src={FTCLogo} className="button-icon" alt='LOGO' />
          </a>
          <h3>
            <span className='quantum'>
              Quantum
            </span>
            <span className='leap'>
              {" "}Leap
            </span>
          </h3>
 
        </div>
        <div>
          <h2>
              FTC 19812 Resource Hub
          </h2>
        </div>
        <div className="linksAndSuch">
          <div>
              <a href="https://github.com/ftc19812" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
          </div>
          <div>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
          </div>
          <div>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
                <img src={YoutubeLogo} className="button-icon" alt="YouTube" />
                Youtube
              </a>
          </div>
        </div>
        <div>
          <button
          type="button"
          className="signup"
          onClick={() => navigate("/signin")}
          >
          Sign Up  
          </button>
          <button
          type="button"
          className="signin"
          onClick={() => navigate("/signin")}
          >
          Sign In
          </button>
        </div>
      </header>
      
      <div className='contentGroup'>
        <div className={`sideBar ${sideBarEnabled ? "open" : "closed"}`}>
          <div className='sideBarTop'>
            <button
              type="button"
              onClick={() => navigate("/")}
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => navigate("/resources")}
            >
              Resources
            </button>
            <button
              type="button"
              onClick={() => navigate("/recruitment")}
            >
              Recruitment
            </button>
            <button
              type="button"
              onClick={() => navigate("/settings")}
            >
              Settings
            </button>
            <button
              type="button"
              onClick={() => navigate("/credits")}
            >
              Credits
            </button>
          </div>
          
          <div className='sideBarBottom'>
            <button 
              className={`sideBarBackButton ${sideBarEnabled ? "hidden" : "show"}`}
              onClick={() => setSideBar(!sideBarEnabled)}
              >
              {">"}
            </button>

            <button
              className='sideBarBackButton'
              onClick={() => setSideBar(!sideBarEnabled)}
              >
              {"<"}
            </button>
          </div>
        </div>
        <div className='content'>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/resources" element={<ResourcesPage/>} />
            <Route path="/resources/modules" element={<RModules/>} />
            <Route path="/resources/software" element={<RSoftware/>} />
            <Route path="/resources/hardware" element={<RHardware/>} />
            <Route path="/resources/other" element={<ROther/>} />
            <Route path="/recruitment" element={<RecruitmentPage/>} />
            <Route path="/settings" element={<SettingsPage/>}/>
            <Route path="/credits" element={<CreditsPage/>} />
            <Route path="/signin" element={<SignInPage/>} />
            
          </Routes>

        </div>
      </div>
  
    </div>
  )
}

export default App
