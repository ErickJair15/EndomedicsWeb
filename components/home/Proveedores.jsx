import { Carousel } from 'flowbite-react'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Importa los estilos básicos de Swiper
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';


const Proveedores = () => {
    return (
        <div className=' mx-auto container flex items-center h-96'>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={3}
                loop={true}
                autoplay={{ delay: 3000 }} // Configuración de autoplay
                pagination={{ clickable: true }}
                navigation={true}
                breakpoints={{
                    400: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                        centeredSlides: true,

                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                        centeredSlides: false,
                    },
                    1024: {
                        slidesPerView: 2.5,
                        spaceBetween: 20,
                        // pagination: true,
                        centeredSlides: false,
                    },
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                        // pagination: true,
                        centeredSlides: false,
                        // width: 1080
                    },
                    1536: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                        // pagination: true,
                        centeredSlides: false,
                        // width: 1080
                    },
                }}
                effect='fade'
            >
                <SwiperSlide>
                    <div className='flex justify-center items-center w-full h-36'>

                        <img src="/new/storz.png" alt="Slide 1" className='w-[50%] h-auto hover:w-[60%] transition-all' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center items-center w-full h-36'>

                        <img src="/new/lumenis.jpg" alt="Slide 2" className='w-[50%] h-auto hover:w-[60%] transition-all' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center items-center w-full h-36'>

                        <img src="/new/thompson.jpg" alt="Slide 3" className='w-[50%] h-auto hover:w-[60%] transition-all' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center items-center w-full h-36'>

                        <img src="/new/stryker.png" alt="Slide 3" className='w-[50%] h-auto hover:w-[60%] transition-all' />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>


    )
}

export default Proveedores
