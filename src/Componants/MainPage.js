import React from 'react'
import styles from "../app/page.module.css"
import LeftSection from './LeftSection'
import RightSection from './RightSection'
const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <LeftSection/>
      <RightSection/>
    </div>
  )
}

export default MainPage
