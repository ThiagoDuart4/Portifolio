import React from 'react'
import style from '../Icon/Icons.module.css'
import { BsGithub, BsLinkedin } from 'react-icons/bs';
const Icon = () => {
    const Style = {
        color: "#FFDE59",
        marginBottom: "20px",
        fontSize: "2em"
    }
    return (
        <div className={style.icon}>
           <a href="https://github.com/ThiagoDuart4"><BsLinkedin style={Style}  /></a> 
           <a href="https://www.linkedin.com/in/thiago-duarte-n/"> <BsGithub style={Style}/></a>
        </div>
    )
}

export default Icon