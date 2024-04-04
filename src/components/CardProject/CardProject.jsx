import React from 'react'
import style from "../CardProject/Project.module.css"

const CardProject = () => {

    const ArrayInfo = [
        {
            name: "Carteira",
            URL: "https://carteira-de-gastos.vercel.app/",
            Image:"/static/media/Carteira.1d66d6d023bfc5fae579.jpeg"
        },
        {
            name: "AzulTurismo",
            URL: "https://azul-turismo.vercel.app/",
            Image: "/static/media/AzulTurismo.67a53fb6b82a1b8f5fcf.jpeg"
        },
        {
            name: "Nba",
            URL: "https://nba-estatisticas.vercel.app/",
            Image: "/static/media/Nba.aa671cab169a703f2a3a.jpeg"
        },
    ]

    return (
        <div className={style.CardTeste}>
            {

                ArrayInfo.map((info,key) => {
                    return (
                        <div key={key} className={style.CardPrimary}>
                            <div className={style.Card} >
                                <img src={info.Image} alt="" />
                                <a href={info.URL} className={style.efeito}>
                                    <h3>{info.name}</h3>
                                </a>
                            </div>
                            <div className={style.CardCaixa}>

                            </div>
                        </div>)
                })
            }


        </div>

    )
}

export default CardProject