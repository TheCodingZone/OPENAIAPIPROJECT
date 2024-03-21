import React from 'react'
import styles from "../app/page.module.css"
import logo from "../Assets/icon.png"
import Image from 'next/image'
import { RiEditBoxLine } from "react-icons/ri";
import { AiFillQuestionCircle } from "react-icons/ai";
import { GiUpgrade } from "react-icons/gi";
import { RiLoginCircleLine } from "react-icons/ri";
const LeftSection = () => {
  return (
    <div className={styles.leftSection}>
      <div className={styles.topSection}>
        <div className={styles.heading}>
        <Image src={logo} height={55} width={55}></Image>
        <h3>NEW CHAT</h3>
        </div>
        <RiEditBoxLine size={"1.3rem"}/>
      </div>

      <div className={styles.questions}>
        <span><AiFillQuestionCircle size={"1.3rem"}/>What is Programming?</span>
        <span><AiFillQuestionCircle size={"1.3rem"}/>HOW TO USE CHATGPT?</span>
        <span><AiFillQuestionCircle size={"1.3rem"}/>HOW TO USE CHATGPT 4.0?</span>
        <span><AiFillQuestionCircle size={"1.3rem"}/>Write an article about democracy?</span>
      </div>

      <div className={styles.end}>
      <div className={styles.upgradePlan}>
           
         
           <span> <GiUpgrade size={"1.3rem"} style={{marginRight:"10px"}}/>UPGRADE PLAN</span>
           <span>GET GPT4,DALL-E,AND MORE</span>
          
          </div>
          <div className={styles.login}>
           <span><RiLoginCircleLine style={{marginRight:"10px"}}/>LOGIN/ SIGNUP</span>
        </div>
      </div>
    </div>
  )
}

export default LeftSection
