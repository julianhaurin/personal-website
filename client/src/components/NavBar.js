
// Navigation Bar

import React from "react";
import { Link } from 'react-router-dom';

import sun from "../assets/sunIcon.svg"
import moon from "../assets/moonIcon.svg"
import linkedinIcon from "../assets/linkedinIcon.svg"
import githubIcon from "../assets/githubIcon.svg"

export default function NavBar(props) 
{

  return (
    <div className="navbar flex px-10">

      {/* Name */}
      <Link to="/" className="">
        <h1 className="text-3xl font-mono mx-4">Julian Haurin</h1>
      </Link>

      <Link to="/projects" className="">
        <h1 className="text-lg font-mono mx-4">projects</h1>
      </Link>

      <Link to="/resume" className="">
        <h1 className="text-lg font-mono mx-4">resume</h1>
      </Link>
      
      <Link to="/contact" className="">
        <h1 className="text-lg font-mono mx-4">contact</h1>
      </Link>


      <a href="https://github.com/julianhaurin">
        <button className="btn btn-circle btn-ghost">
          <img src={githubIcon} alt="linkedin" className="w-8 h-8"/>
        </button>
      </a>

      <a href="https://www.linkedin.com/in/julian-haurin/">
        <button className="btn btn-circle btn-ghost">
          <img src={linkedinIcon} alt="linkedin" className="w-8 h-8"/>
        </button>
      </a>

      {/* Light/dark theme toggle button */}
      <button className="btn btn-circle btn-ghost">
        <label className="swap swap-rotate w-12 h-12">
          <input type="checkbox" onChange={props.toggleTheme}/>
          <img src={sun} alt="light" className="w-8 h-8 swap-on hover:bg-white" />
          <img src={moon} alt="dark" className="w-8 h-8 swap-off" />
        </label>
      </button>

    </div>
  );

}

