import React from 'react'

function contacto() {
  return (
    <div>
      <div className='relative flex items-center justify-center h-72 bg-cover bg-center bg-contacto w-full'>
        <div className='absolute inset-0 bg-black bg-cover bg-opacity-50'></div>
        <h2 className='z-10 text-5xl text-white text-with-shadow text-center'>
          Hablemos
        </h2>
      </div>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nosotros.
                Estaremos encantados de atenderte.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-5xl font-semibold mb-8 text-[#2563EB]">Contáctanos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              {/* <h3 className="text-xl font-medium text-gray-600 mb-4">Información de contacto</h3> */}
              <p className="text-gray-600 text-xl">
                <span className='text-[#2563EB] '>Teléfono:</span> <span className='text-md'>+52 442 642 3149</span><br />
                <span className='text-[#2563EB] '>Movil:</span> <span className='text-md'>+52 442-561-9371</span><br />
                <br />
                <span className='text-md'>
                  <a className='hover:underline hover:cursor-pointer hover hover:text-[#2563EB]' href="mailto:info@endomedicsqro.com?subject=Hablemos%20con%20Endomedics&body=Necesito%20más%20información">Contáctanos por correo</a>
                </span><br />
                {/* <span className='text-[#2563EB] '>Dirección:</span> <span className='text-md'>Calle Principal #123, Ciudad</span> */}
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
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed"
                  disabled={true}
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
