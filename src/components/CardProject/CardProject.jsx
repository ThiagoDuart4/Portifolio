import React from 'react'
import style from "../CardProject/Project.module.css"
import Carteira from "../../assets/Carteira.jpeg"
import Nba from "../../assets/Nba.jpeg"
import AzulTurismo from "../../assets/Carteira.jpeg"

const CardProject = () => {


    const ArrayInfo = [
        {
            name: "Carteira",
            URL: "https://carteira-de-gastos.vercel.app/",
            Image: "Carteira"
        },
        {
            name: "AzulTurismo",
            URL: "https://azul-turismo.vercel.app/",
            Image: "AzulTurismo"
        },
        {
            name: "Nba",
            URL: "https://nba-estatisticas.vercel.app/",
            Image: "Nba"
        },
    ]

    return (
        <div className={style.CardTeste}>
            {

                ArrayInfo.map((info,key) => {
                    return (
                        <div key={key} className={style.CardPrimary}>
                            <div className={style.Card}>
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