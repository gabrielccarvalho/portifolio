'use client'

import { Card } from '@/components'

const Projects = () => {

  const projects = [
    {
      title: 'SoundWave',
      description: '🔊 A Podcast search engine by specific subject',
      cta: 'View Project',
      link: 'https://github.com/gabrielccarvalho/soundwave',
      image: '/images/projects/soundwave.png',
      liveProject: 'https://soundwave.com.br',
      techList: ['React', 'NextJS', 'TypeScript', 'Stripe']
    },
    {
      title: 'OneFinance',
      description: '💰 All your finances organized in one single space',
      cta: 'View Project',
      link: 'https://github.com/gabrielccarvalho/OneFinance',
      image: '/images/projects/one-finance.png',
      techList: ['React Native', 'TypeScript']
    },
    {
      title: 'DashGO',
      description: '📈 An analytics dashboard platform',
      cta: 'View Project',
      link: 'https://github.com/gabrielccarvalho/dashgo',
      image: '/images/projects/dashgo.png',
      techList: ['React', 'Chakra', 'TypeScript']
    }
  ]

  return (
    <>
      <div className='flex flex-col items-center justify-center max-w-screen-2xl mx-auto pt-16'>
        <div className='flex flex-row'>
          <h2 className='text-xl max-sm:text-sm font-semibold subpixel-antialiased max-w-3xl text-start pb-8'>
            Here are a few of my favorite projects
          </h2>
        </div>
        <div className='flex flex-row gap-8 flex-wrap transition-all duration-200 max-sm:p-4 delayed-reveal-2'>
          {projects.map((project, index) => <Card key={index} title={project.title} description={project.description} link={project.link} cta={project.cta} image={project.image} liveProject={project.liveProject} techList={project.techList} />)}
        </div>
      </div>
    </>
  )
}

export default Projects
