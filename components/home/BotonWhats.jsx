'use client'
import React from 'react'

const BotonWhats = () => {
  return (
    <a
      className="fixed bottom-4 right-4 bg-white text-white p-2.5 rounded-full shadow-md hover:p-3.5 hover:border hover:border-green-300  transition-all"
      href="https://wa.me/5214425619371"
      rel="noopener noreferrer"
      target="_blank"
    >
      <img src="/home/whatsapp.png" alt="Contactanos" className='w-[50px]' />
    </a>
  )
}

export default BotonWhats
