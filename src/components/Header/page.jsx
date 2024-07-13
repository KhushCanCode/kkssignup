import Link from 'next/link'
import React from 'react'

const Header = () => {
  const routes = [
    { path: '/', text: 'Home' },
    { path: '/about', text: 'About' },
    { path: '/contact', text: 'Contact' },
    { path: '/login', text: 'Log In'},
    { path: '/signup', text: 'Sign Up'}
    // Add more routes as needed
  ];
  return (
    <nav className='sticky flex flex-col'>
      <div className="flex justify-between align-middle px-[2vw] py-[1vw]">
        <h1 className='text-2xl'>Kabadi Korner</h1>
        <div className="dets text-sm">
          <h1>contact@kabadikorner.com</h1>
          <h1>+91 1234567890</h1>
        </div>
      </div>
      <div className="links group flex gap-[2.4vw] justify-end border-t-[.3vh] border-b-[.3vh] border-black py-[1vw] px-[2vw] hover:h-[5vw] align-middle">
        {routes.map((route) => (
          <Link key={route.path} href={route.path} passHref className='hover:underline underline-offset-4 decoration-2 hover:rounded-3xl hover:bg-gray-300 hover:py-[0.6vw] transition-all hover:px-[1.2vw] group-hover:pt-2'>{route.text}</Link>
        ))}
      </div>
    </nav>
  )
}

export default Header