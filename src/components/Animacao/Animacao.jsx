import React from 'react'
import style from "./Animacao.module.css"
import { useEffect } from 'react'


const Animacao = (props) => {

 

  const teste = () => {
    const Span = document.querySelector("#Span")
    const click = document.querySelector("#Ligth")
    click.style.backgroundColor = "#FFDE59";
    click.style.color = "black";
    Span.style.color = "White"
  }
  useEffect(() => {
    if (props.onButtonClick== true) {
      props.onMyFunction(() => {
        setTimeout(() => {
          teste();
          setTimeout(() => {
            window.location.href = 'http://localhost:3000/home';
          }, 1300); // Atrasa a execução em 3 segundos (3000 milissegundos)
        }, 500); // Atrasa a execução em 3 segundos (3000 milissegundos)
      });
    }
  }, [props.buttonClicked, props.onMyFunction]);

  return (
   
       <div className={style.Animacao}>
      <div className={style.LampTop}> </div>
      <div className={style.LampMidle}></div>
      <div className={style.LampBottom}></div>
      <div className={style.LigthLamp} id='Ligth'>  <h1>Seja bem vindo(a)  <span id='Span'>{props.dataInput}</span></h1> </div>
   
    </div>
    

  )
}

export default Animacao