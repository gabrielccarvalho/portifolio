'use client'

import { useEffect, useState } from 'react';
import { CopyBlock, dracula } from "react-code-blocks";
import { Theme } from 'react-code-blocks/dist/types';
import { useViewPort } from '@/utils';

const About = () => {
  const { width, breakpoint } = useViewPort();

  const customStyle = width <= breakpoint ? {
    borderRadius: '10px',
    fontFamily: 'Fira Code',
    width: '100%',
    fontSize: '0.7rem',
  } : {
    borderRadius: '10px',
    fontFamily: 'Fira Code',
    width: '100%',
    fontSize: '1rem',
  };

  return (
    <>
      <div className='flex flex-col items-center justify-center max-w-screen-2xl mx-auto pt-16' id='about'>
        <div className='flex flex-row'>
          <h2 className='text-2xl max-sm:text-md font-semibold subpixel-antialiased max-w-3xl text-start pb-8'>
            But who is Gabriel?
          </h2>
        </div>
        <div className='flex flex-col px-12 py-8 w-full items-center max-md:px-1'>
        <CopyBlock
            text={`export default const aboutMe = () => {

  const gabriel = {
    name: 'Gabriel Carvalho',
    age: 22,
    location: 'Brazil',
    occupation: 'Fullstack Developer',
    hobbies: ['Coding', 'Surfing'],

  const techStack = {
    languages: ['JavaScript', 'TypeScript'],
    frontend: [
      'React',
      'NextJS',
      'ChakraUI',
      'TailwindCSS',
      'StyledComponents'
    ],
    backend: [
      'NodeJS',
      'Express',
      'Prisma',
      'PostgreSQL',
      'Redux'
    ],
    mobile: ['React Native', 'Expo'],

  const contact = {
    email: 'caampos22@gmail.com',
    github: 'github/gabrielccarvalho',
    linkedin: '/in/gabriel-campos-b7618418a/',

  return { gabriel, techsStack, contact }
}`}
            language={ 'typescript' }
            showLineNumbers
            wrapLines
            theme={dracula as Theme}
            codeBlock={ false }
            copied={ false }
            wrapLongLines
            onCopy={() => {}}
            customStyle={customStyle}
          />
        </div>
      </div>
    </>
  )
}

export default About
