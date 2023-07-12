import { PropsWithChildren, useEffect } from 'react'
import Nav from './Nav'

const Layout = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    const key = localStorage.getItem('countriesDarkMode')
    if (!key) {
      // Default to dark mode if no preference config
      document.documentElement.className = 'dark'
    } else {
      document.documentElement.className = key === 'true' ? 'dark' : ''
    }
  }, [])

  return (
    <>
      <Nav />
      <div className="max-h-screen max-w-[1440px] mx-auto">
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
