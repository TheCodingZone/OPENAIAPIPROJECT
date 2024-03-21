"use client"
import React, { useState } from 'react'
import styles from "../app/page.module.css"
import { FaChevronDown } from "react-icons/fa";
import { BiUpArrowCircle } from "react-icons/bi";
import Image from 'next/image';
import logo from "../Assets/icon.png"
import { BiUpArrowAlt } from "react-icons/bi";
import nouser from "../Assets/nouser.png"
const RightSection = () => {
  const openAiApi="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";
  const[message,setMessage]=useState('');
  const[allMessage,setAllMessage]=useState([]);

  const sendMessage=async(event)=>{
    event.preventDefault();
    console.log(message);
    console.log(openAiApi);

    let url="https://api.openai.com/v1/chat/completions";
    let token=`Bearer ${openAiApi}`;
    let model="gpt-3.5-turbo";
    let messagesToSend=[
      ...allMessage,
      {
        role:"user",
        content:message
      }
    ];

    let response=await fetch(url,{
      method:"POST",
      headers:{
        'Authorization':token,
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        model:model,
        messages:messagesToSend
      })
    })
   let responseData=await response.json();
   if(responseData){
    console.log(responseData.choices[0].message);
   }

   let newAllMessages=[
    ...messagesToSend,
    responseData.choices[0].message
   ];
   setAllMessage(newAllMessages);
   setMessage('');
   console.log(allMessage);
  }
  return (
    <div className={styles.rightSection}>
       <div className={styles.header}>
        <h2>ChatGpt3.5 <FaChevronDown/></h2>
        <span><BiUpArrowCircle size={"2rem"}/></span>
       </div>

       {
        allMessage.length>0 ?(
          <div className={styles.messages}>
               {
               allMessage.map((msg,index)=>(
               <div className={styles.message} key={index}>
               <Image src={msg.role==="user"?nouser :logo} width={50} height={50} alt='' className='image'></Image>
               <div className={styles.details}>
                <h3>{msg.role==="user"?"YOU":"ChatGPT"}</h3>
                <p>{msg.content}</p>
               </div>
               </div>
               ))
               }
          </div>
        ):<div className={styles.sections}>
        <div className={styles.heading01}>
          <Image src={logo} height={70} width={70}></Image>
          <h2>How can I help you today?</h2>
        </div>
        <div className={styles.suggestions}>
        <div className={styles.section}>
            <div>Write an email</div>
            <span>resign from current company</span>

          </div>

          <div className={styles.section}>
            <div>Brainstroms names</div>
            <span>For an orange cat we're adopting from the shelter</span>
          </div>

          <div className={styles.section}>
            <div>Create a character</div>
            <span>to start a film club</span>
          </div>

          <div className={styles.section}>
            <div>Write a text</div>
            <span>Inviting my neighbors to a barbecue</span>
          </div>
        </div>
       </div>
       }

       <div className={styles.inputfield}>
        <input type="text" placeholder='Message ChatGPT' autoFocus value={message} onChange={(e)=>setMessage(e.target.value)}/>
        <BiUpArrowAlt size={"2rem"} onClick={sendMessage}/>
       </div>
      </div>
  )
}

export default RightSection
