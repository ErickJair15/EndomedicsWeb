import React from 'react'
import HeaderLayout from './HeaderLayout'
import BannerMain from '../home/BannerMain'

function LayoutMain({...props}) {
  return (
    <div>
      {/* Contenido de la página */}
      <div className={props.className}>
        {props.children}
      </div>
    </div>
  )
}

export default LayoutMain
