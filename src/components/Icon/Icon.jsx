import React from 'react'
import style from '../Icon/Icons.module.css'
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import {FiDownload} from 'react-icons/fi';
import { saveAs } from 'file-saver';
import  testes from "../../assets/curriculo.pdf"


const Icon = () => {
    return (
        <div className={style.icon}>
            <a href="https://drive.google.com/file/d/14bEy7DG7dlOrh6QWBiZ_jViqbXArVVfn/view?usp=drivesdk " ><FiDownload/></a>
           <a href="https://www.linkedin.com/in/thiago-duarte-n/"><BsLinkedin   /></a> 
           <a href="https://github.com/ThiagoDuart4"> <BsGithub /></a>
        </div>
    )
}

export default Icon