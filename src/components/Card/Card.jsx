import React from 'react'
import Style from '../Card/Card.module.css'

const Card = () => {

    const ArrayInfo = [
    {
        name:"Front-End",
        descricao:"Desenvolvedor Front-End experiente com habilidades em HTML, CSS, JavaScript, React.js, Bootstrap e integração de APIs REST. Especializado em roteamento com React Router e uso eficiente de Hooks do React para criar interfaces web modernas e dinâmicas.",
    },
    {
        name:"Back-end",
        descricao:"Desenvolvedor backend com experiência em SQL, MySQL, PHPMyAdmin, GIT, Node.js e Express. Especializado em criar e gerenciar bancos de dados, bem como desenvolver APIs robustas e escaláveis usando Node.js e Express",
    },
    {
        name:"UX/UI",
        descricao:"Profissional de UX/UI com expertise em design de interfaces usando Figma para criar wireframes e protótipos de alta qualidade. Habilidade em gerenciar projetos e colaboração em equipe através do Trello, garantindo uma abordagem organizada e eficiente no desenvolvimento de produtos digitais.",
    },
    ]


  return (
  
    <div className={Style.CardTeste}>
          
      {
        ArrayInfo.map((info,key)=>{
            return(
            <div key = {key} className={Style.CardPrimary}>
                <div className={Style.Card}>
                     <h2>{info.name}</h2>
                </div>
                <div className={Style.CardCaixa}>
                    <p>{info.descricao}</p>
                </div>
            </div>
              
            )
        })
      }
    </div>
    
)}

export default Card