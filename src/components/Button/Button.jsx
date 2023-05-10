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

        else if(props.value == "Contact"){
    
         window.location.href = 'https://api.whatsapp.com/send?phone=5521983396703&text=Ol%C3%A1,tudo%20bem?'
        }
    }

    const teste2 = () =>{
        props.onButtonClick()
        // props.onClick()
        // console.log(props.Animation)
    }
    const teste3 = () =>{
        console.log("teste3")
    }


  return (
    
    <div onClick={Teste} className={style.BtnPrimary} id='btn'>
        <div className={style.BtnCaixa}></div>
        <button  className={style.Btn} > {valueBtn}</button>
    </div>

  )
}

export default Button