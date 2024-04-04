'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function HeaderLayout() {
  const router = useRouter()
  const handleNavClick = (event) => {
    event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

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


  return (
    <div className='relative sm:h-[129px] h-[80px]'>
      <div className='fixed left-0 w-full top-0 z-20 shadow-md navbar'>
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
        <nav className="bg-[#0C71C3] p-4 hidden sm:block">
          <div className="container mx-auto">
            <div className="flex items-center justify-center">
              <div className="flex space-x-5">
                <a href="#inicio" className="text-white hover:font-bold hover:bg-white hover:text-[#0C71C3] hover:rounded-md p-2 transition-all" onClick={handleNavClick}>INICIO</a>
                <a href="#about" className="text-white hover:font-bold hover:bg-white hover:text-[#0C71C3] hover:rounded-md p-2 transition-all" onClick={handleNavClick}>QUIENES SOMOS</a>
                <a href="/productos" className="text-white hover:font-bold hover:bg-white hover:text-[#0C71C3] hover:rounded-md p-2 transition-all" onClick={handleNavClick}>PRODUCTOS EN VENTA</a>
                <a href="/contacto" className="text-white hover:font-bold hover:bg-white hover:text-[#0C71C3] hover:rounded-md p-2 transition-all" onClick={handleNavClick}>CONTACTO</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default HeaderLayout
