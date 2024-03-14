import React from 'react'

function BannerMain() {
  return (
    <div className='w-full mt-8'>
      <div className='relative flex items-center justify-center h-56 bg-fixed bg-parallax w-full'>
        <div className='absolute inset-0 bg-black bg-cover bg-opacity-50'></div>
        <span className='z-10 text-5xl text-white text-with-shadow text-center'>
          Servicios
        </span>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 sm:gap-x-3 sm:gap-y-0 gap-y-4 mt-8 w-full container m-auto'>
        <div className='flex items-center justify-center w-full relative group'>
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md lg w-full:lg:w-[400px] m-auto"></div>
          <img
            src="https://endomedicsqro.com.mx/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-19-at-9.26.50-PM.jpeg"
            alt=""
            className='h-full lg:h-[250px] w-full lg:w-[400px] transition-all rounded-md '
          />
          <span className='group-hover:text-[20px] transition-all text-white text-with-shadow-sm absolute top-1/2 m-auto text-center'>
            Separador universal Thompson
          </span>
        </div>
        <div className='flex items-center justify-center w-full relative group'>
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md w-full lg:w-[400px] m-auto"></div>
          <img
            src="https://endomedicsqro.com.mx/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-19-at-9.26.16-PM-rotated.jpeg"
            alt=""
            className='h-full lg:h-[250px] w-full lg:w-[400px] transition-all rounded-md '
          />
          <span className='group-hover:text-[20px] transition-all text-white  text-with-shadow-sm absolute top-1/2 m-auto text-center'>
            Manipulador uterino para Histerectomia
          </span>
        </div>
        <div className='flex items-center justify-center w-full relative group'>
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md w-full lg:w-[400px] m-auto"></div>
          <img
            src="https://endomedicsqro.com.mx/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-19-at-9.25.38-PM-1.jpeg"
            alt=""
            className='h-full lg:h-[250px] w-full lg:w-[400px] transition-all rounded-md '
          />
          <span className='group-hover:text-[20px] transition-all text-white  text-with-shadow-sm absolute top-1/2 m-auto text-center'>
            Láser para ureterolitotricia 30wats
          </span>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 sm:gap-x-3 sm:gap-y-0 gap-y-4 w-full container m-auto mt-4 sm:mt-8'>
        <div className='flex items-center justify-center w-full relative group'>
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md w-full lg:w-[400px] m-auto"></div>
          <img
            src="https://endomedicsqro.com.mx/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-19-at-9.27.33-PM.jpeg"
            alt=""
            className='h-full lg:h-[250px] w-full lg:w-[400px] transition-all rounded-md'
          />
          <span className='group-hover:text-[20px] transition-all text-white  text-with-shadow-sm absolute top-1/2 m-auto text-center'>
            RTU bipolar para Urología
          </span>
        </div>
        <div className='flex items-center justify-center w-full relative group'>
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md w-full lg:w-[400px] m-auto"></div>
          <img
            src="https://endomedicsqro.com.mx/wp-content/uploads/2023/01/123-100-2.jpg"
            alt=""
            className='h-[300px] lg:h-[250px] w-full lg:w-[400px] transition-all rounded-md '
          />
          <span className='group-hover:text-[20px] transition-all text-white  text-with-shadow-sm absolute top-1/2 m-auto text-center'>
            Láser para ureterolitotricia 30wats
          </span>
        </div>
      </div>
    </div>
  )
}

export default BannerMain
