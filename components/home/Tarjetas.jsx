import React from 'react'

const Tarjetas = () => {
    return (
        <div className=''>
            <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-x-3 gap-y-4 lg:gap-y-0 text-white mt-8 justify-items-center'>
                <div className='text-justify rounded-md shadow-md p-4 bg-[#2563EB] w-full h-[450px] sm:h-[350px] lg:h-[500px] xl:h-[450px]'>
                    <div className='flex justify-center mb-2'>
                        <img
                            src="/home/doctor-1.png"
                            alt="Imagen 1"
                            className='h-[120px] w-[120px] rounded-md'
                        />
                    </div>
                    <div className='font-bold text-white text-lg text-center'>
                        NUESTRO EQUIPO ESPECIALISTA
                    </div>
                    <p>
                        Contamos con un equipo de especialistas altamente capacitados y en constante actualización, formados a través de cursos intensivos impartidos por instituciones de renombre como la Universidad Anáhuac, entre otros. Trabajamos en colaboración con los mejores expertos de cada campo para asegurarle procedimientos totalmente seguros y exitosos.                    </p>
                </div>
                <div className='text-justify rounded-md shadow-md p-4 bg-[#2563EB] w-full h-[450px] sm:h-[350px] lg:h-[500px] xl:h-[450px]'>
                    <div className='flex justify-center mb-2'>
                        <img
                            src="/home/cuarto-de-cirugia.png"
                            alt="Imagen 1"
                            className='h-[120px] w-[120px] rounded-md'
                        />
                    </div>
                    <div className='font-bold text-white text-lg text-center '>
                        NUESTRO EQUIPO MÉDICO
                    </div>
                    <p>
                        Nuestro equipo médico está certificado y respaldado por servicios biomédicos continuos, garantizando procedimientos de alta calidad. 
                        <br />
                        En nuestra misión de ofrecer servicios de excelencia, trabajamos con tecnología de punta y contamos con sistemas e instrumentación de última generación, asegurando la más alta definición en cada aspecto de nuestros servicios.                        <br />
                    </p>
                </div>
                <div className='text-justify rounded-md shadow-md p-4 bg-[#2563EB] w-full h-[450px] sm:h-[350px] lg:h-[500px] xl:h-[450px]'>
                    <div className='flex justify-center mb-2'>
                        <img
                            src="/home/venas.png"
                            alt="Imagen 1"
                            className='h-[120px] w-[120px] rounded-md'
                        />
                    </div>
                    <div className='font-bold text-white text-lg text-center'>
                        SISTEMA DE ENERGÍA PARA SELLADO DE VASOS
                    </div>
                    <div>
                        <ul className='list-disc pl-2'>
                            <li>
                                Ligasure LS10 sistema de sellador de vasos por RF (última generación)
                            </li>
                            <li>
                                Sonicision Dissector Ultrasonico (inalámbrico)
                            </li>
                            <li>
                                Harmonico Dissector Ultrasonico (Gen11)
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tarjetas
