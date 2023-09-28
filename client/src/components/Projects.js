
// Projects page (test)

import { Link } from 'react-router-dom';

import waveCover from '../assets/projectImages/waveSimCover.png'
import rayTracerCover from '../assets/projectImages/rayTracer.png'
import websiteCover2 from '../assets/projectImages/website2.png'
import rendererCover from '../assets/projectImages/duck.png'

export default function Projects() 
{

  return (


    <div className="flex flex-row p-5">
      
      {/* OpenGL Renderer  */}
      <Link to="/projects/opengl-renderer" className="">
      <div className="px-5">
        <div class="max-w-sm rounded-3xl overflow-hidden shadow-2xl p-7 backdrop-brightness-150 hover:bg-indigo-400">
          <img class="" src={rendererCover} alt="OpenGL Renderer Pic"/>
          <div class="px-3 py-4">
            <div class="font-bold text-xl mb-2">OpenGL Renderer</div>
            <p >
              OpenGL Renderer with .obj loading, Phong lighting, controllable camera, and more
            </p>
          </div>
          <div class="px-3 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">C++</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">OpenGL</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">glm</span>
          </div>
        </div>
      </div>
      </Link>

      {/* Ocean Wave Simulation  */}
      <Link to="/projects/wave-sim" className="">
      <div className="px-5">
        <div class="max-w-sm rounded-3xl overflow-hidden shadow-2xl p-7 backdrop-brightness-150 hover:bg-indigo-400">
          <img class="" src={waveCover} alt="Ocean Wave Simulation Pic"/>
          <div class="px-3 py-4">
            <div class="font-bold text-xl mb-2">Ocean Wave Simulation</div>
            <p >
              Ocean wave simulation following Tessendorf's 2004 paper
            </p>
          </div>
          <div class="px-3 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">C++</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">OpenGL</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Physics Simulation</span>
          </div>
        </div>
      </div>
      </Link>

      {/* Ray Tracer */}
      <Link to="/projects/ray-tracer" className="">
      <div className="px-5">
        <div class="max-w-sm rounded-3xl overflow-hidden shadow-2xl p-7 backdrop-brightness-150 hover:bg-indigo-400">
          <img class="" src={rayTracerCover} alt="Ray Tracer Pic"/>
          <div class="px-3 py-4">
            <div class="font-bold text-xl mb-2">Ray Tracer</div>
            <p >
            A basic ray-tracer allowing for realistic, non-interactive rendering and lighting
            </p>
          </div>
          <div class="px-3 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">C++</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Graphics</span>
          </div>
        </div>
      </div>
      </Link>

      {/* MERN Personal Website  */}
      <Link to="/" className="">
      <div className="px-5">
        <div class="max-w-sm rounded-3xl overflow-hidden shadow-2xl p-7 backdrop-brightness-150 hover:bg-indigo-400">
          <img class="" src={websiteCover2} alt="Website Pic"/>
          <div class="px-3 py-4">
            <div class="font-bold text-xl mb-2">Personal Website</div>
            <p >
            Built using a ReactJS and tailwind frontend, and an Express js and MongoDB backend. Hosted with Render.
            </p>
          </div>
          <div class="px-3 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Web Dev</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MERN</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Javascript</span>
          </div>
        </div>
      </div>
      </Link>

    </div>

  )

}