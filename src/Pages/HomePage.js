import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import style from './HomePage.module.css'

export default function HomePage() {
    return(
        <>
        <div >
        <Navbar/>
        <div className={style.main}>
        <textarea className={style.textarea} />
        </div>
        </div>
        </>
    )
}f