
// OpenGL Renderer page

import { Link } from 'react-router-dom';

import duck from "../../assets/projectImages/duck.png";
import oceanDuck from "../../assets/projectImages/duckInOcean.png";
import githubIcon from "../../assets/githubIcon.svg"

export default function RendererPage() 
{

  return (
    <div className="flex content-center justify-center pt-10">
      <div className="flex flex-col items-center justify-center">

        <h1 className="font-bold font-mono text-4xl">OpenGL Rendering Program</h1>

        <div className="flex flex-row content-center justify-center">
          <a href="https://github.com/julianhaurin/OpenGL-Environment-Simulator" className="px-2">
            <button className="btn btn-circle btn-ghost hover:bg-indigo-400">
              <img src={githubIcon} alt="github" className="w-8 h-8"/>
            </button>
          </a>
        </div>

        <h1 className="font-bold font-mono text-2xl p-5">Overview</h1>

        <p className="flex font-mono text-lg w-1/2 justify-center p-5">
          This OpenGL graphics renderer was my first project in the world of computer graphics. 
          While it is fully functional it is still a work in progress and there are many features I hope to add
          to it in the near future. 
        </p>

        <div className="flex font-mono text-lg w-1/2 justify-center p-5">
          <p >
            It features a user-controlled camera, .obj file loading functionality, textures and materials,
            Phong lighting, and a completely object-oriented design. It is also the basis for the Tessendorf ocean simulator 
            I've been working on<Link to="/projects/wave-sim" className=""> here.</Link>
          </p>
        </div>

        <div className="flex font-mono text-lg w-1/2 justify-center p-5">
          <p >
            Check out the source code <a href="https://github.com/julianhaurin/OpenGL-Environment-Simulator" className="px-2"> here.</a>
          </p>
        </div>

        <h1 className="font-bold font-mono text-2xl pt-5 p-2">Tech Stack</h1>
        <p className="flex font-mono text-lg w-1/2 justify-center">
          C++, OpenGL, GLEW, GLFW, glm, tinyobjloader, stb_image
        </p>

        <h1 className="font-bold font-mono text-2xl pt-10 p-2">Skills</h1>
        <div className="flex flex-col items-center justify-center">

          <p className="flex font-mono text-lg w-2/3 justify-center p-2">
            Experience learning programming skills from scratch and personally building a fully-fledge, object-oriented program.
          </p>

          <p className="flex font-mono text-lg w-2/3 justify-center p-2">
            Knowledge of the OpenGL graphics pipeline and a firm grasp on graphics programming fundamentals.
          </p>

          <p className="flex font-mono text-lg w-2/3 justify-center p-2">
            Practical OpenGL and modern C++ skills.
          </p>

        </div>  

        <div className='flex flex-row '>
          <div className="p-10">
            <img width="600" src={duck} alt="Duck Image"></img>
          </div>

          <div className="p-10">
            <img width="600" src={oceanDuck} alt="Duck Image"></img>
          </div>
        </div>


      </div>
    </div>
  )
}