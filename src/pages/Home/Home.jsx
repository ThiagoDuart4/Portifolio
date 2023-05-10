import React from 'react'
import style from "../Home/Home.module.css"
import Btn from "../../components/Button/Button"
import MyImage from '../../components/MyImage/MyImage'
import Icon from "../../components/Icon/Icon"
import Card from '../../components/Card/Card'
import CardProject from "../../components/CardProject/CardProject"
import Contact from "../../components/Contact/Contact"
const Home = () => {
  return (


    <div className={style.home}>

      <section className={style.section1}>
        <section className={style.tituloPrincipal}>
          <h1>Thiago Duarte</h1>
          <span> Desenvolvedor FullStack Jr</span>
          <p>Ola,Me chamo Thiago sou DEV FullStack junior, aqui esta alguns dos meus projetos mais relevantes, seria um prazer conhcer voce!</p>
        </section>
        <section className={style.MyImage}>
          <div className={style.ImageHome}>
            <MyImage />
          </div>
          <div className={style.IconHome}>
            <Icon />
          </div>

        </section>
      </section>
      <section className={style.section2}>
        <h1 className='TituloPrincipal'>Habilidades</h1>
        <div className={style.CardSection}>
          <Card />
        </div>

      </section>
      <section className={style.section3}>
        <h1 className='TituloPrincipal'>Projetos</h1>
        <div className={style.CardSection}>
          <CardProject />
        </div>

      </section>
      <section className={style.section4}>
        <div className={style.Contact}>
        <h1 className='TituloPrincipal'>Contate-me</h1>
        <p className={style.Margin}>Para mais informaçoes, entre em contato comigo, estarei sempre ao seu dispor, segue o link a baixo</p>    
            <Contact/>
            <div className={style.BtnContact}> <Btn value="Contact"/></div>
           
        </div>
        <div className={style.IconContact}>
            <Icon />
          </div>
      </section>


    </div>


  )
}

export default Home