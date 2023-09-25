
// Ray tracer page

import rayTracerCover from '../../assets/projectImages/rayTracer.png'
import githubIcon from "../../assets/githubIcon.svg"

export default function RayTracerPage() 
{

  return (
    <div className="">
    <div className="flex content-center justify-center pt-10">
      <div className="flex flex-col items-center justify-center">

        <h1 className="font-bold font-mono text-4xl">Ray Tracer</h1>

        <div className="flex flex-row content-center justify-center">
          <a href="https://github.com/julianhaurin/RayTracer" className="px-2">
            <button className="btn btn-circle btn-ghost hover:bg-indigo-400">
              <img src={githubIcon} alt="github" className="w-8 h-8"/>
            </button>
          </a>
        </div>

        <h1 className="font-bold font-mono text-2xl p-5">Overview</h1>
        <p className="font-mono text-lg w-1/2">
          I'm currently working on a basic ray tracer following the "Ray Tracing in One Weekend" textbook series: https://raytracing.github.io/. 
          The project is built entirely from scratch (save for a vector library) and renders scenes as PPM images. It has an extensible design
          and allows for custom render objects and materials. 
        </p>


        <h1 className="font-bold font-mono text-2xl pt-5 p-2">Tech Stack</h1>
        <p className="flex font-mono text-lg w-1/2 justify-center">
          C++, glm
        </p>

        <div className="p-10">
          <img width="600" src={rayTracerCover} alt="Ray Tracer pic"></img>
        </div>




      </div>
    </div>
    </div>
  )

}