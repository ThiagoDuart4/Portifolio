import React from 'react'
import Style from '../Card/Card.module.css'

const Card = () => {

    const ArrayInfo = [
    {
        name:"Front-End",
        descricao:"testeando",
    },
    {
        name:"Back-end",
        descricao:"testeando2",
    },
    {
        name:"UX/UI",
        descricao:"testeando2",
    },
    ]

    console.log(ArrayInfo)
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
                    {info.descricao}
                </div>
            </div>
              
            )
        })
      }
    </div>
    
)}

export default Card