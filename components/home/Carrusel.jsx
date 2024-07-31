import { Carousel } from 'flowbite-react'
import React, { useEffect, useState } from 'react'

function Carrusel() {
    const [isLoaded, setIsLoaded] = useState(true);

    useEffect(() => {
        // Simular un retraso de carga de 1 segundo
        const timer = setTimeout(() => {
            setIsLoaded(false)
        }, 300);
        // Limpiar el temporizador cuando el componente se desmonte
        return () => clearTimeout(timer);
    }, []);

    return (
        <div id='inicio' className="h-[450px] sm:h-64 xl:h-80 2xl:h-[700px] w-full  bg-[#2563EB]">
            <Carousel slide={false} className='text-white opacity-100 w-full overflow-hidden'>
                {/* <img src="/home/endomedicsHome2.jpeg" alt="..." />
                <img src="/home/endomedicsHome1.jpeg" alt="..." />
                <img src="/home/endomedicsHome2.jpeg" alt="..." /> */}
                <div className="h-[700px] relative ">
                    <div className='bg-fixed bg-carrusel1 bg-center blur-[2px] w-full h-full flex items-center justify-center text-center'>
                    </div>
                    <div className='grid grid-cols-1 content-center h-full text-center transition-opacity absolute top-0 left-0 w-full'>
                        <span className={`text-with-shadow `}>
                            CALIDAD Y EFICACIA EN LAPAROSCOPÍA
                        </span>
                        <p>
                            Somos una empresa  100% mexicana, dedicados a ofrecer servicios especiales en de Laparoscopía  y mínima  invasiva.
                        </p>
                    </div>
                </div>
                <div className="h-[700px] relative ">
                    <div className='bg-fixed bg-carrusel2 bg-center blur-[2px] w-full h-full flex items-center justify-center text-center'>
                    </div>
                    <div className='grid grid-cols-1 content-center h-full text-center transition-opacity absolute top-0 left-0 w-full'>
                        <span className={`text-with-shadow `}>
                            CALIDAD Y EFICACIA EN UROLOGÍA
                        </span>
                        <p>
                            Somos una empresa  100% mexicana, dedicados a ofrecer servicios especiales en de Laparoscopía  y mínima  invasiva.
                        </p>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default Carrusel
