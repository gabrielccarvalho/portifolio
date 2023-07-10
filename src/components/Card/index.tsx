'use client'

import Image from 'next/image'

interface iCard {
  image?: string
  title: string
  description: string
  link: string
  cta: string
  liveProject?: string
  techList: string[]
}

const Card = ({ image = '', title, description, link, cta, liveProject, techList }: iCard) => {

  return (
    <div className='flex flex-col'>
      <a href={liveProject ? liveProject : link} target='_blank'>
        <div className='border-2 border-gray-700 p-2 rounded-xl transition-all ease-in-out duration-200 hover:-translate-y-2 hover:border-indigo-500'>
          <div className='flex flex-col max-w-400'>
            <img className='max-w-400 h-64 max-sm:h-52' src={image} alt='project image' />
          </div>
        </div>
      </a>
      <div className="max-w-full">
        <div className="flex flex-col p-5 items-start h-full gap-5">
          <div>
              <h5 className="mb-2 text-2xl max-sm:text-xl font-bold tracking-tight text-white">{title}</h5>
              <p className="mt-4 font-norma text-gray-400 max-sm:text-sm mb-4">{description}</p>
              {techList.map((tech, index) => <span key={index} className="text-md font-medium mr-2 px-2.5 py-0.5 rounded bg-gray-700 text-indigo-200 border border-indigo-200 max-sm:text-sm">{tech}</span>)}
          </div>
            <a href={link} target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-whit rounded-lg focus:ring-4 focus:outline-none focus:ring-indigo-500 bg-indigo-500 hover:bg-indigo-700 transition-all ease-in duration-5 max-sm:w-full max-sm:items-center justify-center">
                {cta}
                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Card
