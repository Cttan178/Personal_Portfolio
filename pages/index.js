import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (  
    // return everything that supposed to be displayed
    <body className={styles.body}>
      <p className={styles.header_text_1}>Hello</p>
      <p className={styles.header_text_2}>Celine's Portfolio</p>
      <p>Student at NTU</p>
      <div className={styles.button_container}>
        <a className={styles.cv} href = "https://media.tenor.com/WE1ITPVxOawAAAAi/tkthao219-bubududu.gif">Download CV</a>
        <a className={styles.contact}>Let's talk</a>
      </div>
      <img className={styles.line} src='icons/line.svg' alt="line"></img>
      <div className={styles.photo_container}>
        <img className = {styles.photo} src="https://wiki.d-addicts.com/images/thumb/2/23/Bai_Jing_Ting.jpg/300px-Bai_Jing_Ting.jpg"></img>
      </div>
      
      <p className={styles.about_me}>
          qwertyasdfgh qwewrtysadfgh wqewrtyusadfgt qwewrtsdfgthwqerty ewdfrgthedrfg qwewregerfg.s
      </p>
      <img className={styles.line} src='icons/line.svg' alt="line"></img>
      <p className={styles.footer}>Created with ♡ in NTU</p>
    </body>
  )
}
