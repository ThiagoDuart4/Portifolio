import React from 'react'
import { useState } from 'react'
import style from "../LandingPage/Landing.module.css"
import Button from "../../components/Button/Button"
import Animacao from "../../components/Animacao/Animacao"
const Landing = () => {

 const [dataInput,setDataInput] = useState()
  const testando = () => {
    const btn = document.querySelector("#teste")
    btn.style.height = "100vh";
  }

  const testando2 = (onChild) => {
    onChild()
  }

  const handleChildButtonClick = () => {
    testando()
   
  }


  return (
    <>

      <body>

        <div className={style.main}>
          <section>
            <div className={style.titulo}>
              <h1>Pense,Faça,<span>Resolva.</span></h1>
              <p>Ola,Me chamo Thiago sou DEV FullStack junior, aqui esta alguns dos meus projetos mais relevantes, seria um prazer conhcer você!</p>

              <div className={style.formGroup}>
                <input type="text" name="name" placeholder='teste'  required onChange={(e)=>{
                  setDataInput(e.target.value)
                }} />
                <label htmlFor="name">digite aqui seu nome...</label>
                <Button value="Enviar" onButtonClick={() => handleChildButtonClick()} className={style.ButtonTeste} />
              </div>
          
            </div>

          </section>
          <section className={style.teste} id='teste'>
            <Animacao dataInput ={dataInput} onMyFunction={testando2} />
          </section>
        </div>

      </body>
    </>
  )
}

export default Landing