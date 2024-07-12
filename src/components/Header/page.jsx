import Link from 'next/link'
import React from 'react'

const Header = () => {
  const routes = [
    { path: '/', text: 'Home' },
    { path: '/about', text: 'About' },
    { path: '/contact', text: 'Contact' },
    // Add more routes as needed
  ];
  return (
    <nav className='sticky bg-white text-black flex flex-col gap-[1vw]'>
      <div className="flex justify-between px-[2vw] py-[1vw]">
        <h1>Kabadi Korner</h1>
        <div className="dets text-sm">
          <h1>contact@kabadikorner.com</h1>
          <h1>+91 1234567890</h1>
        </div>
      </div>
      <div className="links flex gap-[2vw] justify-end border-t-[.3vh] border-black py-[1vw] px-[2vw]">
        {routes.map((route) => (
          <Link key={route.path} href={route.path} passHref className='hover:underline underline-offset-4 decoration-2'>{route.text}</Link>
        ))}
      </div>
    </nav>
  )
}

export default Header