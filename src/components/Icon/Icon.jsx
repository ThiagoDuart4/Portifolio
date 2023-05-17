import React from 'react'
import style from '../Icon/Icons.module.css'
import { BsGithub, BsLinkedin } from 'react-icons/bs';
const Icon = () => {
   
    return (
        <div className={style.icon}>
           <a href="https://www.linkedin.com/in/thiago-duarte-n/"><BsLinkedin   /></a> 
           <a href="https://github.com/ThiagoDuart4"> <BsGithub /></a>
        </div>
    )
}

export default Icon