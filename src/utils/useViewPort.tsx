'use client'

import React from 'react'

const useViewport = () => {
  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 560;

  React.useEffect(() => {
    if (!isBrowser()) return
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);


  return { width, breakpoint };
}

export default useViewport
