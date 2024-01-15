'use client'
import styles from './page.module.css'
import Header from './components/header'
import Control from './components/control'
import { useState } from 'react'

export default function Home() {
  const [darkmode, setDarkmode] = useState(false)
  function toggleMode(): void{
    setDarkmode(!darkmode)
  }
  return (
    <main className={`${styles.main} ${darkmode? styles.darkMode : ''}`}>
      <Header darkmode={darkmode} setDarkmode={toggleMode}/>

      <section className={styles.section}>
        <Control/>
      </section>

      <section>
        
      </section>
    </main>
  )
}
