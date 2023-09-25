
// Main page (test)

import { Link } from 'react-router-dom';

import constructionCapy from "../assets/constructionCapy.png"

export default function MainPage() 
{

  return (
    <div className="flex flex-col justify-center content-center items-center">
      <h1 className="font-bold text-5xl font-mono pt-20">Hi!</h1>

      <div className="flex justify-center">
        <p className="w-1/2 text-2xl font-mono pt-5 text-center">
          My name is Julian, I'm a third year computer science student at Northeastern University interested
          in graphics programming and web development. Check out some of my projects or contact me a julian.haurin@gmail.com
        </p>
      </div>
      
      
      <img src={constructionCapy} className="object-contain h-48 pt-20"></img>  
      <p className="text-lg font-mono pt-5">This website is currently under construction</p>

    </div>
  )

}