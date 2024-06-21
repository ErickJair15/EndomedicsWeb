import React from 'react'

function BannerMain() {
  return (
    <div className='w-full mt-8'>
      <div className='relative flex items-center justify-center h-64 bg-fixed bg-parallax w-full bg-top bg-cover'>
        <div className='absolute inset-0 bg-black bg-cover bg-opacity-50 '></div>
        <span className='z-10 text-5xl text-white text-with-shadow text-center'>
          Nuestros servicios
        </span>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 w-full container m-auto'>
        <div className='flex items-center justify-center w-full relative group'>
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md w-full lg:w-[400px] m-auto"></div>
          <img
            src="new/frameArgon.jpeg"
            alt=""
            className='h-full lg:h-[300px] w-full lg:w-[400px] transition-all rounded-md '
          />
          <span className='group-hover:text-[20px] transition-all text-white text-with-shadow-sm absolute top-1/2 m-auto text-center'>
            Fulguración con sistema Argon
          </span>
        </div>
        <div className='flex items-center justify-center w-full relative group'>
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md w-full lg:w-[400px] m-auto"></div>
          <img
            src="new/servicioRinoplastia.jpeg"
            alt=""
            className='h-full lg:h-[300px] w-full lg:w-[400px] transition-all rounded-md object-cover'
          />
          <span className='group-hover:text-[20px] transition-all text-white  text-with-shadow-sm absolute top-1/2 m-auto text-center'>
            Servicio integral para Rinoplastia
          </span>
        </div>
        <div className='flex items-center justify-center w-full relative group'>
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md w-full lg:w-[400px] m-auto"></div>
          <img
            src="new/servicioHisteroscopia.jpeg"
            alt=""
            className='h-full lg:h-[300px] w-full lg:w-[400px] transition-all rounded-md object-cover'
          />
          <span className='group-hover:text-[20px] transition-all text-white  text-with-shadow-sm absolute top-1/2 m-auto text-center'>
            Servicio integral para histeroscopia
          </span>
        </div>
        <div className='flex items-center justify-center w-full relative group'>
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md w-full lg:w-[400px] m-auto"></div>
          <img
            src="new/reseccionProstatica.jpeg"
            alt=""
            className='h-full lg:h-[300px] w-full lg:w-[400px] object-cover transition-all rounded-md'
          />
          <span className='group-hover:text-[20px] transition-all text-white  text-with-shadow-sm absolute top-1/2 m-auto text-center'>
            Resección Transuretral Prostatica (RTU)
          </span>
        </div>
        <div className='flex items-center justify-center w-full relative group'>
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md w-full lg:w-[400px] m-auto"></div>
          <img
            src="new/servicioLaparoscopia.jpeg"
            alt=""
            className='h-[300px] lg:h-[300px] w-full lg:w-[400px] transition-all rounded-md object-cover'
          />
          <span className='group-hover:text-[20px] transition-all text-white text-with-shadow-sm absolute top-1/2 m-auto text-center'>
            Laparoscopia
          </span>
        </div>
        <div className='flex items-center justify-center w-full relative group'>
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md w-full lg:w-[400px] m-auto"></div>
          <img
            src="new/servicioUrologia.jpeg"
            alt=""
            className='h-[300px] lg:h-[300px] w-full lg:w-[400px] transition-all rounded-md object-cover'
          />
          <span className='group-hover:text-[20px] transition-all text-white text-with-shadow-sm absolute top-1/2 m-auto text-center'>
            Servicio integral de urología
          </span>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 sm:gap-x-3 sm:gap-y-0 gap-y-4 w-full container m-auto mt-4 sm:mt-8'>

      </div>
    </div>
  )
}

export default BannerMain
