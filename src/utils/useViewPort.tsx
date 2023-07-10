'use client'

import React from 'react'

const useViewport = () => {
  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  const [width, setWidth] = React.useState(0);
  const breakpoint = 560;

  React.useEffect(() => {
    if (isBrowser()) {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }

    return
  }, []);


  return { width, breakpoint };
}

export default useViewport
