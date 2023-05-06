import React from 'react'
import { useState } from "react";
import style from "../Button/Button.module.css"

const Button = (props) => {
    // STATES
const [valueBtn,setValueBtn] = useState(props.value)

    const Teste = () =>{

        if (props.value == "Enviar") {
            teste2()
        }
         else if(props.value == "Scroll"){
            teste3()
        }
    }

    const teste2 = () =>{
        props.onClick()
    }
    const teste3 = () =>{
        console.log("teste3")
    }


  return (
    
    <div onClick={Teste} className={style.BtnPrimary}>
        <div className={style.BtnCaixa}></div>
        <button  className={style.Btn}> {valueBtn}</button>
    </div>

  )
}

export default Button