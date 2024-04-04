import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'; // Importa los estilos
// Agrega más imágenes según sea necesario
const images = [
  'https://endomedicsqro.com.mx/wp-content/uploads/2024/03/scala1-e1709798343332.jpeg',
  'https://endomedicsqro.com.mx/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-19-at-9.27.33-PM.jpeg',
  'https://endomedicsqro.com.mx/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-19-at-9.21.23-PM.jpeg',
  'https://endomedicsqro.com.mx/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-19-at-9.20.03-PM.jpeg',
  'https://endomedicsqro.com.mx/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-19-at-9.17.07-PM.jpeg',
  'https://endomedicsqro.com.mx/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-19-at-9.21.10-PM.jpeg',
  'https://endomedicsqro.com.mx/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-19-at-9.17.08-PM.jpeg',
  'https://endomedicsqro.com.mx/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-19-at-9.17.07-PM.jpeg',
];

const CustomImageGallery = () => {
  return (
    <div className='grid sm:grid-cols-4 sm:gap-x-28 sm:gap-y-10 gap-y-4 mx-auto mb-8'>
      {images.map((imagen, index) =>
        <div className='w-full' key={index}>
          <Zoom>
            <img
              alt="That Wanaka Tree, New Zealand by Laura Smetsers"
              src={imagen}
              className='sm:w-[200px] rounded-3xl hover:blur-[0.9px] transition-all'
            />
          </Zoom>
        </div>
      )}
    </div>
  );
};

export default CustomImageGallery;
