/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',

  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '6rem',
        '2xl': '8rem',
      },
    },
    extend: {
      backgroundImage: {
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'parallax': "url('../public/new/bannerServicios.jpeg')",
        'home1': "url('../public/home/endomedicsHome1.jpeg')",
        'home2': "url('../public/home/endomedicsHome2.jpeg')",
        'carrusel1':"url('../public/home/medicos1.jpg')",
        'carrusel2':"url('../public/home/medicos4.jpg')",
        'collage1':"url('https://endomedicsqro.com.mx/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-19-at-9.26.50-PM.jpeg')",
        'collage2':"url('https://endomedicsqro.com.mx/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-19-at-9.26.16-PM-rotated.jpeg')",
        'collage3':"url('https://endomedicsqro.com.mx/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-19-at-9.25.38-PM-1.jpeg')",
        'contacto':"url('https://endomedicsqro.com.mx/wp-content/uploads/2023/01/Contact-Us-26-Apr.jpg')",

        // 'home3': "url('../public/home/endomedicsHome2.jpeg')",

        // 'gradient-conic':
        //   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    

  ],
}
