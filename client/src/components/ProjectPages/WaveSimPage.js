
// Wave sim page

import oceanGrid from "../../assets/projectImages/waveSim/OpenGLOceanGrid.png"
import oceanDemo1 from "../../assets/projectImages/waveSim/OceanDemo1.mp4"
import oceanDemo2 from "../../assets/projectImages/waveSim/OceanDemo2.mp4"
import oceanDuck from "../../assets/projectImages/duckInOcean.png";

import githubIcon from "../../assets/githubIcon.svg"

export default function WaveSimPage() 
{

  return (
    <div className="">
    <div className="flex content-center justify-center pt-10">
      <div className="flex flex-col items-center justify-center">

        <h1 className="font-bold font-mono text-4xl">Ocean Wave Simulation</h1>

        <div className="flex flex-row content-center justify-center">
          <a href="https://github.com/julianhaurin/OpenGL-Environment-Simulator" className="px-2">
            <button className="btn btn-circle btn-ghost hover:bg-indigo-400">
              <img src={githubIcon} alt="github" className="w-8 h-8"/>
            </button>
          </a>
        </div>

        <h1 className="font-bold font-mono text-2xl p-5">Overview</h1>
        <p className="font-mono text-lg w-1/2">
          I wanted to invest time into more practical applications for my OpenGL renderer, so I 
          decided to create an ocean wave simulation using the techniques lined out by Jerry Tessendorf in his
          2004 paper "Simulating Ocean Water". His methods are still the industry standard today for creating
          non-interactive ocean water.
        </p>

        <p className="font-mono text-lg w-1/2 pt-5">
        This project is still a work in progress - right now I'm working on incorporating compute shaders into 
        the calculation process to allow for much faster framerates. 
        </p>

        <div className="flex font-mono text-lg w-1/2 justify-center p-5">
          <p >
            Check out the source code<a href="https://github.com/julianhaurin/OpenGL-Environment-Simulator" className="px-2">here.</a>
          </p>
        </div>

        <h1 className="font-bold font-mono text-2xl pt-5 p-2">Tech Stack</h1>
        <p className="flex font-mono text-lg w-1/2 justify-center">
          C++, OpenGL, GLEW, GLFW, glm
        </p>

        <div className="p-10">
          <img width="600" src={oceanGrid} alt="Ocean grid"></img>
        </div>

        <h1 className="font-bold font-mono text-2xl pt-5 p-2">Process</h1>
        <p className="flex font-mono text-lg w-1/2 justify-center">
          The techniques described by Tessendorf come down to manipulating the height of each vertex 
          in a grid of vertices. By turning the height of each vertex into a function of time, we can 
          create a wave-height field that emulates how real ocean waves act. We can decompose this
          wave height field into a bunch of sin and cosine waves called sinusoids using the (inverse)
          fourier transform. 
        </p>

        <h1 className="font-bold font-mono text-2xl pt-10 p-2">Skills</h1>
        <div className="flex flex-col items-center justify-center">

          <p className="flex font-mono text-lg w-2/3 justify-center p-2">
           Experience implementing a research paper from scratch and incorporating into another program using
           object-oriented techniques.
          </p>

          <p className="flex font-mono text-lg w-2/3 justify-center p-2">
            Knowlegde of the graphics pipeline, and GLSL skills. 
          </p>

          <p className="flex font-mono text-lg w-2/3 justify-center p-2">
            C++ and OpenGL experience. 
          </p>

        </div> 

        <p className="flex font-mono text-lg w-1/2 justify-center pt-10">
          Here are some demos of what the current state of the program looks like: 
        </p>

        <div className="p-5 flex flex-col justify-center items-center">
          <video src={oceanDemo1} width="600" controls></video>
          <p className="p-1">On a grid of 32x32 - 1024 waves</p>
        </div>
        
        <div className="p-5 flex flex-col justify-center items-center">
          <video src={oceanDemo2} width="600" controls></video>
        </div>

        <div className="h-20"></div>

      </div>
    </div>
    </div>
  )

}