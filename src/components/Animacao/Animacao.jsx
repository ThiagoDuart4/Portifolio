import React from 'react'
import style from "./Animacao.module.css"
import { useEffect } from 'react'


const Animacao = (props) => {

 

  const teste = () => {
    const click = document.querySelector("#Ligth")
    click.style.backgroundColor = "#FFDE59";
    click.style.color = "white";
  }

  useEffect(() => {
    props.onMyFunction(() => {
      setTimeout(() => {
        teste();
      }, 3000); // Atrasa a execução em 3 segundos (3000 milissegundos)
    });
  }, [props.onMyFunction]);


  return (
    <div className={style.Animacao}>
      <div className={style.LampTop}> </div>
      <div className={style.LampMidle}></div>
      <div className={style.LampBottom}></div>
      <div className={style.LigthLamp} id='Ligth'>  <h1>Seja bem vindo {props.dataInput}</h1> </div>
   
    </div>

  )
}

export default Animacao