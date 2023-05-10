import React from 'react'
import style from "../Contact/Contact.module.css"
import { useState } from 'react'
import { ImMap2 } from 'react-icons/im';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephoneInbound } from 'react-icons/bs';

const Contact = () => {


    const ArrayInfo = [
        {
            name: "CELULAR",
            Info: "(21)983396703",
            Icon: <BsTelephoneInbound />
        },
        {
            name: "EMAIL",
            Info: "thiagoduarteprogramador@gmail.com",
            Icon: <AiOutlineMail />
        },
        {
            name: "LOCAL",
            Info: "Rio de janeiro-Magé",
            Icon: <ImMap2 />
        },
    ]

    return (
        <>
            <div className={style.Contact}>
                
                {
                    ArrayInfo.map((info, key) => {
                        return (

                            <div className={style.info} key={key} >
                                <section className={style.icons}>
                                    <i>{info.Icon}</i>
                                </section>
                                <section className={style.ContactInfo}>
                                        <h4>{info.name}</h4>
                                        <p>{info.Info}</p>
                                </section>
                            </div>

                        )
                    })

                }
            </div>
        </>
    )
}

export default Contact