import React from 'react'

const ImageProductos = () => {
    // const productos = [
    //     { nombre: "Producto 1", imagen: "https://endomedicsqro.com.mx/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-19-at-22.33.09-4.jpeg" },
    //     { nombre: "Producto 2", imagen: "https://endomedicsqro.com.mx/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-19-at-22.33.09.jpeg" },
    //     { nombre: "Producto 3", imagen: "https://endomedicsqro.com.mx/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-19-at-22.33.09-1.jpeg" },
    //     { nombre: "Producto 4", imagen: "https://endomedicsqro.com.mx/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-19-at-22.33.09-2.jpeg" },
    //     { nombre: "Producto 5", imagen: "https://endomedicsqro.com.mx/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-19-at-22.33.09-3.jpeg" }
    // ]
    const productos = [
        { nombre: "Fulguración con sistema Argon", imagen: "/new/fulguracionArgon.jpeg" },
        { nombre: "Láser holmiun de 30wats  y 100 wats", imagen: "/new/laserHomium.jpeg" },
        { nombre: "Lithoclass neumático", imagen: "/new/litHiClass.jpeg" },
        { nombre: "Manipulador uterino", imagen: "/new/manipuladorUterino.jpeg" },
        { nombre: "Manipulador uterino", imagen: "/new/manipuladorUterino2.jpeg" },
        { nombre: "Sellador de vasos ligasure", imagen: "/new/selladorVasos.jpeg" },
        { nombre: "Separador universal Thompson", imagen: "/new/separadorUniversal.jpeg" },
        { nombre: "Separador universal Thompson", imagen: "/new/separadorUniversal2.jpeg" },
        { nombre: "Tiramiomas", imagen: "/new/tiramiomas.jpeg" }
    ]
    return (
        <>
            <div className='relative flex items-center justify-center h-72 bg-fixed bg-productos bg-center w-full'>
                <div className='absolute inset-0 bg-cover bg-opacity-50'></div>
                <span className='z-10 text-5xl text-white text-with-shadow text-center'>
                    Servicios
                </span>
            </div>
            <div className='grid sm:grid-cols-3 gap-x-4 gap-y-10 w-full container mx-auto my-8'>
                {productos.map((producto, index) => (
                    <div key={index} className='w-full lg:w-[320px] h-[320px] group  items-end flex transition-all duration-200 hover:pb-4'>
                        <div className='w-full h-[320px] bg-white flex flex-col mx-auto shadow-md relative border rounded-xl group-hover:mb-2'>
                            <button className='w-full h-[80%]'>
                                <img src={producto.imagen} className='w-full h-full rounded-t-md shadow-lg object-cover' alt={producto.nombre} />
                            </button>
                            <div className='transition-all group-hover:bg-gray-600 w-[100%] group-hover:h-[65px] h-[20%] relative bottom-0 rounded-b-xl text-center items-center mx-auto'>
                                <p className='text-md relative -bottom-5  group-hover:text-white  transition-all text-center mx-auto text-black'>
                                    {producto.nombre}
                                </p>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
        </>
    )
}

export default ImageProductos
