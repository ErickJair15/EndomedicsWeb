import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'; // Importa los estilos
// Agrega más imágenes según sea necesario
const images = [
  '/new/frame1.jpeg',
  '/new/frame2.jpeg',
  '/new/frame3.jpeg',
  '/new/frame4.jpeg',
  '/new/frame10.jpeg',
  '/new/frame6.jpeg',
  '/new/frame7.jpeg',
  '/new/frame8.jpeg',
];

const CustomImageGallery = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-4 gap-x-2 sm:gap-x-4 lg:gap-x-11 sm:gap-y-10 gap-y-4 mx-auto py-4'>
      {images.map((imagen, index) =>
        <div className='w-full' key={index}>
          <Zoom>
            <img
              alt=""
              src={imagen}
              className='w-full h-[140px] sm:h-[130px] md:h-[140px] lg:h-[150px] xl:h-[200px] rounded-3xl hover:blur-[0.9px] transition-all object-cover'
            />
          </Zoom>
        </div>
      )}
    </div>
  );
};

export default CustomImageGallery;
