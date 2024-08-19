import React from 'react'
import style from "../CardProject/Project.module.css"
import CarteiraImage from '../../assets/Carteira.jpeg';
import AzulTurismoImage from '../../assets/AzulTurismo.jpeg';
import MiniBlog from '../../assets/Magé Noticias - Google Chrome 19_08_2024 17_34_21.png';

const CardProject = () => {

    const ArrayInfo = [
       {
        name: "Carteira",
        URL: "https://carteira-de-gastos.vercel.app/",
        Image: CarteiraImage
    },
    {
        name: "AzulTurismo",
        URL: "https://azul-turismo.vercel.app/",
        Image: AzulTurismoImage
    },
    {
        name: "Magé noticias",
        URL: "https://miniblog-blush.vercel.app/",
        Image: MiniBlog
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