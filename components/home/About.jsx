import React from 'react'

function About() {
    return (
        <div className='mt-6'  >
            <div className='grid grid-cols-1 gap-y-3 w-full relative'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-4'>
                    <div className='w-[100%] flex flex-col justify-center'>
                        <h3 className='text-[40px] font-bold text-[#2563EB]' >
                            QUIENES SOMOS
                        </h3>
                        <p className='text-justify text-slate-600'>
                            Somos una empresa  100% mexicana, dedicados a ofrecer servicios especiales en  de Laparoscopía  y mínima  invasiva, trabajando con una parte importante de Hospitales y médicos a nivel  Bajío , trabajando con los mejores expertos en el ramo desde hace más de 10 años, brindándole  siempre calidad, eficacia  en todo momento y todo lugar.
                        </p>
                    </div>
                    <div className='flex justify-end sm:justify-end'>
                        <img
                            src="/home/endomedicsHome1.jpeg"
                            alt="Imagen 1"
                            className='sm:h-[240px] sm:w-[90%] lg:h-[360px] lg:w-[90%] rounded-md'
                        />
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-4 mt-6'>
                    <div className='flex justify-start order-last sm:order-first'>
                        <img
                            src="/home/endomedicsHome2.jpeg"
                            alt="Imagen 1"
                            className='sm:h-[240px] sm:w-[90%] lg:h-[360px] lg:w-[90%] rounded-md'
                        />
                    </div>
                    <div className='w-[100%] flex flex-col justify-center order-first sm:order-last'>
                        <p className='text-justify text-slate-600'>
                            Contamos con un grupo de especialistas tanto médicos, técnicos y equipo con tecnología de punta para hacer de cada uno de nuestros procedimientos un éxito.
                            <br />
                            Siempre manteniendo un criterio serio y  trabajando constantemente para ofrecerle los mejores paquetes para hacer que su procedimiento sea accesible y ayudar a una recuperación pronta y de calidad.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
