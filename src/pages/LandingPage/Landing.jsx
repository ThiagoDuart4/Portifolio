import React from 'react'
import style from "../LandingPage/Landing.module.css"
import Button from "../../components/Button/Button"
import Animacao from "../../components/Animacao/Animacao"
const Landing = () => {

  const testando = () =>{
    const btn = document.querySelector("#teste")
    btn.style.height= "100vh";
  }
  const testando2 = (childFunction) =>{  
      childFunction(); // Executa a função do Child
  }
  return (
  <>
 
 <body>

   <div className={style.main}>
    <section>      
      <Button value="Enviar" onClick ={testando}/>
    </section>
    <section className={style.teste} id='teste'>
      <Animacao  onMyFunction={testando2} />
    </section>
   </div>
 
 </body>
  </>
  )
}

export default Landing