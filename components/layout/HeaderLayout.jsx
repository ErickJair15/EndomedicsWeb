'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function HeaderLayout() {
  const router = useRouter()
  const handleNavClick = (event) => {
    event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    setIsOpen(false)
    const targetId = event.target.getAttribute('href').substring(1); // Obtener el id del elemento al que se debe desplazar

    if (targetId == 'contacto') {
      router.push('/contacto')
    } else if (targetId == 'productos') {
      router.push('/productos')
    } else {
      router.push('/')
      setTimeout(() => {
        const targetElement = document.getElementById(targetId); // Obtener el elemento de destino
        if (targetElement) {
          const navbarHeight = document.querySelector('.navbar').offsetHeight; // Obtener la altura del navbar

          // Calcular la posición del elemento de destino
          const targetPosition = targetElement.offsetTop - navbarHeight;

          // Desplazarse a la posición del elemento de destino
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth' // Desplazamiento suave
          });
        }
      }, 100);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className='relative sm:h-[129px] h-[80px]'>
      <div className='fixed left-0 w-full top-0 z-20 shadow-md navbar hidden sm:block'>
        <div className='flex justify-center w-full bg-white'>
          <Link href="/" legacyBehavior>
            <a className="text-white font-bold text-lg">
              <img
                src="/home/endomedics.png"
                alt="logo"
                className='w-[250px] '
              />
            </a>
          </Link>
        </div>
        <nav className="bg-[#0C71C3] sm:p-2 lg:p-4 hidden sm:block">
          <div className="container mx-auto">
            <div className="flex items-center justify-center">
              <div className="flex lg:space-x-5">
                <a href="#inicio" className="text-white hover:font-bold hover:bg-white hover:text-[#0C71C3] hover:rounded-md p-2 transition-all" onClick={handleNavClick}>INICIO</a>
                <a href="#about" className="text-white hover:font-bold hover:bg-white hover:text-[#0C71C3] hover:rounded-md p-2 transition-all" onClick={handleNavClick}>QUIENES SOMOS</a>
                <a href="/productos" className="text-white hover:font-bold hover:bg-white hover:text-[#0C71C3] hover:rounded-md p-2 transition-all" onClick={handleNavClick}>PRODUCTOS EN VENTA</a>
                <a href="/contacto" className="text-white hover:font-bold hover:bg-white hover:text-[#0C71C3] hover:rounded-md p-2 transition-all" onClick={handleNavClick}>CONTACTO</a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="flex h-[180px] fixed left-0 top-0 z-20 w-full sm:hidden">
        <div
          className={`${isOpen ? "block" : "hidden"
            } md:hidden fixed z-30 inset-0`}
          onClick={toggleSidebar}
        ></div>
        <div
          className={`${isOpen ? "translate-x-0 ease-out" : "-translate-x-full ease-in"
            } md:translate-x-0 transform fixed z-30 inset-y-0 left-0 w-64 bg-[#0C71C3] text-white overflow-y-auto transition duration-300 ease-in-out`}
        >
          <div className="flex items-center justify-center mt-8">
            <span className="text-white text-2xl font-semibold uppercase">
              Endomedics
            </span>
          </div>
          <nav className="mt-10">
            <Link
              className="block py-2.5 px-4 hover:bg-gray-100 hover:text-gray-600"
              href="/"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              className="block py-2.5 px-4 hover:bg-gray-100 hover:text-gray-600"
              href="#about"
              onClick={handleNavClick}
            >
              Conocenos
            </Link>
            <Link
              className="block py-2.5 px-4 hover:bg-gray-100 hover:text-gray-600"
              href="/productos"
              onClick={() => setIsOpen(false)}
            >
              Productos
            </Link>
            <Link
              className="block py-2.5 px-4 hover:bg-gray-100 hover:text-gray-600"
              href="/contacto"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
          </nav>
        </div>
        <div className="flex flex-col flex-1 overflow-hidden">
          <header className="flex relative items-center border-b">
            <button onClick={toggleSidebar} className='absolute left-2 top-6'>
              <svg
                className="w-9 h-9 text-gray-600 "
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
            <div className='flex justify-center w-full bg-white'>
              <Link href="/" legacyBehavior>
                <a className="text-white font-bold text-lg">
                  <img
                    src="/home/endomedics.png"
                    alt="logo"
                    className='w-[250px] '
                  />
                </a>
              </Link>
            </div>
          </header>
        </div>
      </div>



    </div>
  )
}

export default HeaderLayout
