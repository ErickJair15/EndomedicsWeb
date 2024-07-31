"use client"
import BannerMain from '@/components/home/BannerMain'
import Carrusel from '@/components/home/Carrusel'
import CustomImageGallery from '@/components/home/CustomImageGallery'
import Inicio from '@/components/home/Inicio'
import Proveedores from '@/components/home/Proveedores'
import LayoutMain from '@/components/layout/LayoutMain'
import React from 'react'

function Home() {
  return (
    <div className='w-full'>
      <Carrusel />
      {/* Banner home */}
      {/* <div className='relative flex items-center justify-center h-40 bg-fixed bg-parallax w-full'  id='about'>
        <div className='absolute inset-0 bg-black bg-cover bg-opacity-30'></div>
        <span className='z-10 text-5xl text-white text-with-shadow text-center' >
        QUIENES SOMOS
        </span>
      </div> */}
      <LayoutMain className="container mx-auto"  >
        <Inicio />
      </LayoutMain>
      <BannerMain />
      <Proveedores />
      <div className=' sm:h-[550px] grid content-center'>
        <div className="container mx-auto flex items-center">
          <CustomImageGallery />
        </div>
      </div>

    </div>
  )
}

export default Home
