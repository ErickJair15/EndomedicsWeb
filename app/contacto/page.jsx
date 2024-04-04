import React from 'react'

function contacto() {
  return (
    <div>
      <div className='relative flex items-center justify-center h-56 bg-fixed bg-contacto w-full'>
        <div className='absolute inset-0 bg-black bg-cover bg-opacity-50'></div>
        <span className='z-10 text-5xl text-white text-with-shadow text-center'>
          Contacto
        </span>
      </div>
      <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-5xl font-semibold mb-8 text-[#0C71C3]">Contáctanos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-medium text-gray-600 mb-4">Información de contacto</h3>
            <p className="text-gray-600 text-xl">
              <span className='text-[#0C71C3] '>Teléfono:</span> <span className='text-md'>+52 442 642 3149</span><br />
              <span className='text-[#0C71C3] '>Movil:</span> <span className='text-md'>+52 442-561-9371</span><br />
              <span className='text-[#0C71C3] '>Email:</span> <span className='text-md'>info@endomedicsqro.com</span><br />
              <span className='text-[#0C71C3] '>Dirección:</span> <span className='text-md'>Calle Principal #123, Ciudad</span>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-4">Formulario de contacto</h3>
            <form>
              <input
                type="text"
                placeholder="Nombre"
                className="w-full p-2 border rounded mb-4"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full p-2 border rounded mb-4"
              />
              <textarea
                placeholder="Mensaje"
                rows="4"
                className="w-full p-2 border rounded mb-4"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default contacto
