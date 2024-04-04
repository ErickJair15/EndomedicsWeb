import React from 'react'

const ImageProductos = () => {
    const productos = [
        { nombre: "Producto 1", imagen: "https://endomedicsqro.com.mx/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-19-at-22.33.09-4.jpeg" },
        { nombre: "Producto 2", imagen: "https://endomedicsqro.com.mx/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-19-at-22.33.09.jpeg" },
        { nombre: "Producto 3", imagen: "https://endomedicsqro.com.mx/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-19-at-22.33.09-1.jpeg" },
        { nombre: "Producto 4", imagen: "https://endomedicsqro.com.mx/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-19-at-22.33.09-2.jpeg" },
        { nombre: "Producto 5", imagen: "https://endomedicsqro.com.mx/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-19-at-22.33.09-3.jpeg" }
    ]
    return (
        <>
            <div className='relative flex items-center justify-center h-56 bg-fixed bg-contacto w-full'>
                <div className='absolute inset-0 bg-black bg-cover bg-opacity-50'></div>
                <span className='z-10 text-5xl text-white text-with-shadow text-center'>
                    Productos
                </span>
            </div>
            <div className='grid sm:grid-cols-3 gap-4 w-full container mx-auto lg:h-[745px] overflow-hidden my-8'>
                {productos.map((producto, index) => (
                    <div key={index}  className='w-full group h-[360px] items-end flex transition-all duration-200 hover:pb-4'>
                        <div className='w-full lg:w-[320px] h-[320px] flex justify-center mx-auto shadow-md relative border rounded-xl group-hover:mb-2'>
                            <button className='w-auto h-62 '>
                                <img src={producto.imagen} className='w-[210px] h-44 rounded-lg shadow-lg' alt={producto.nombre} />
                            </button>
                            <div className='transition-all group-hover:bg-slate-500 mx-auto w-[100%] group-hover:h-16 absolute bottom-0 rounded-b-xl'>
                            </div>
                            <p className='text-lg absolute bottom-1 mx-auto group-hover:bottom-4 group-hover:text-white group-hover:font-bold transition-all'>
                                {producto.nombre}
                            </p>
                        </div>
                    </div>
                ))
                }
            </div>
        </>
    )
}

export default ImageProductos
