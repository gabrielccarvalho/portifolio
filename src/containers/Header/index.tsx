'use client'

const Header = () => {
  const goTo = () => {
    const about = document.getElementById("about")!;
    about.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <div className='flex flex-row items-start justify-center max-w-screen-2xl mx-auto pt-36 max-sm:pt-12'>
        <div className='flex flex-col'>
          <div className='flex flex-col items-center'>
            <p className='text-lg text-zinc-50 subpixel-antialiased pb-3 max-sm:text-sm'>Hey, I&apos;m Gabriel</p>
            <h1 className='text-6xl font-semibold subpixel-antialiased leading-[72px] max-w-3xl text-center pb-6 max-sm:text-4xl max-sm:px-6 max-sm:leading-10 transition-all duration-100 ease-load'>
              I enjoy <span className='bg-gradient-to-r bg-clip-text  text-transparent from-indigo-500 via-purple-500 to-indigo-500 animate-text'>building</span> and <span className='bg-gradient-to-r bg-clip-text  text-transparent from-indigo-500 via-purple-500 to-indigo-500 animate-text'>designing</span> for the web
            </h1>
            <div className='delayed-reveal'>
              <button
              className="relative inline-flex items-center justify-center mt-12 p-0.5 overflow-hidden text-lg max-sm:text-sm font-medium rounded-full group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none transition-all animate-bounce"
              onClick={e => {
                e.preventDefault()
                goTo()
              }}>
                <span className="relative px-5 py-2.5 rounded-full transition-all ease-in duration-5  bg-gray-900 group-hover:bg-opacity-0">
                  Tell me more
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className='noise-bg' />
      </div>
    </>
  )
}

export default Header
