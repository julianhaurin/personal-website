
// Projects page (test)

import { Link } from 'react-router-dom';

import waveCover from '../assets/projectImages/waveSimCover.png'

export default function Projects() 
{

  return (


    <div className="flex flex-row p-5">
      
      {/* Ocean Wave Simulation  */}
      <Link to="/projects/wave-sim" className="">
      <div className="px-5">
        <div class="max-w-sm rounded-3xl overflow-hidden shadow-2xl p-7 bg-blue-400 hover:bg-cyan-600">
          <img class="" src={waveCover} alt="Ocean Wave Simulation Pic"/>
          <div class="px-3 py-4">
            <div class="font-bold text-xl mb-2">Ocean Wave Simulation</div>
            <p >
              Describe this
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

      {/* MERN Personal Website  */}
      <div class="max-w-sm rounded overflow-hidden shadow-2xl p-10">
        <img class="" src={waveCover} alt="Sunset in the mountains"/>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Personal Website</div>
          <p >
            Built using a ReactJS and tailwind frontend, and an Express js and MongoDB backend. Hosted using Render.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MERN</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Javascript</span>
        </div>
      </div>

    </div>


  )

}