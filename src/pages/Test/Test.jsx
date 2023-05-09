import React from 'react'
import style from '../Test/Test.module.css'
import MyImage from '../../components/MyImage/MyImage'
import Icon from  "../../components/Icon/Icon"
import CardProject from  "../../components/CardProject/CardProject"

import Card from '../../components/Card/Card'
const Test = () => {
  return (
    <div className={style.test}>
    <CardProject/>
    </div>
  )
}

export default Test