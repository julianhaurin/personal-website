
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
    <div className="navbar flex px-10 pt-7">

      {/* Name */}
      <Link to="/" className="">
        <h1 className="text-4xl font-mono mx-4 hover:underline py-3">Julian Haurin</h1>
      </Link>

      <Link to="/projects" className="">
        <h1 className="text-2xl font-mono mx-4 hover:underline">projects</h1>
      </Link>

      {/* <Link to="/resume" className="">
        <h1 className="text-2xl font-mono mx-4 hover:underline">resume</h1>
      </Link> */}
      
      <Link to="/contact" className="">
        <div className="h-full">
          <h1 className="text-2xl font-mono mx-4 hover:underline">contact</h1>
        </div>
      </Link>

      <div className="flex-1"/>

      <a href="https://github.com/julianhaurin">
        <button className="btn btn-circle btn-ghost hover:bg-indigo-400">
          <img src={githubIcon} alt="linkedin" className="w-8 h-8"/>
        </button>
      </a>

      <a href="https://www.linkedin.com/in/julian-haurin/" className="px-2">
        <button className="btn btn-circle btn-ghost hover:bg-indigo-400">
          <img src={linkedinIcon} alt="linkedin" className="w-8 h-8"/>
        </button>
      </a>

      {/* Light/dark theme toggle button */}
      <button className="btn btn-circle btn-ghost">
        <label className="swap swap-rotate w-12 h-12">
          <input type="checkbox" onChange={props.toggleTheme}/>
          <img src={sun} alt="light" className="w-8 h-8 swap-on hover:bg-indigo-400" />
          <img src={moon} alt="dark" className="w-8 h-8 swap-off" />
        </label>
      </button>

    </div>
  );

}

