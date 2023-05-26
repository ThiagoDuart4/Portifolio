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
          <div className={style.text}>
            <h1>Thiago Duarte</h1>
          <span> Desenvolvedor FullStack Jr</span>
          <p>Ola me chamo Thiago sou DEV FullStack junior, aqui está alguns dos meus projetos mais relevantes, seria um prazer conhecer você</p>
         <div className={style.btn}> <Btn value="Contact" /></div>
          </div>
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
        <h1 className='TituloPrincipal' id={style.background1}>Habilidades</h1>
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
        <div className={style.infoSection4}>
          <div className={style.Contact}>
            <div className={style.TextContact}>
            <h1 className='TituloPrincipal'>Contate-me</h1>
          <p className={style.Margin}>Para mais informaçoes, entre em contato comigo, estarei sempre ao seu dispor, segue o link a baixo</p>    
              <Contact/>
              <div className={style.BtnContact}> <Btn value="Contact"/></div>
            </div>
         
            
          </div>
          <div className={style.IconContact}>
              <Icon />
            </div>
        </div>
       <div className={style.Maps}>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.7463617340604!2d-43.13644732502081!3d-22.663243479427184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99a1cd7c30eedb%3A0x543d499c955cd033!2sR.%20Fonte%20Sao%20Nicolau%2C%20106%20-%20Centro%2C%20Mag%C3%A9%20-%20RJ%2C%2025906-775!5e0!3m2!1spt-BR!2sbr!4v1685023173982!5m2!1spt-BR!2sbr" className={style.MyMaps} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       </div>

      </section>


    </div>


  )
}

export default Home