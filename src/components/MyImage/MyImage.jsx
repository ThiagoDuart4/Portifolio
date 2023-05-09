import React from 'react'
import style from '../MyImage/MyImage.module.css'
import Image from '../../assets/MyImage.jpg'
const MyImage = () => {
  return (
    <div className={style.ContainerImage}>
     {/* <img src={Image} alt="" /> */}
     <div className={style.teste}>
            <img src={Image} className={style.BoxImage1}></img>
            <div className={style.BoxImage2}></div>
            <div className={style.BoxImage3}></div>
      </div>
           
        
    </div>
  )
}

export default MyImage