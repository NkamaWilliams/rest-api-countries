'use client'
import styles from './page.module.css'
import Header from './components/header'
import Control from './components/control'
import { useState, useEffect } from 'react'
import { time } from 'console'
import Country from './components/country'

export default function Home() {
  const [darkmode, setDarkmode] = useState(false)
  const [regions, setRegions] = useState([""])
  const [region, setRegion] = useState<string>("")
  const [countryNames, setCountryNames] = useState([""])
  const [countries,setCountries] = useState<any>(null)

  function toggleMode(): void{
    setDarkmode(!darkmode)
  }

  async function getAllCountries() {
    const response = await fetch("https://restcountries.com/v3.1/all")
    const data = await response.json()
    setCountries(data)

    let regionSet:string[] = Array.from(new Set(data.map((country:any) => country.region)))
    setRegions(regionSet)
    
    setCountryNames(data.map((country:any) => country.name.common))
  }

  useEffect(() => {
    getAllCountries()
  }, [])

  return (
    <main className={`${styles.main} ${darkmode? styles.darkMode : ''}`}>
      <Header darkmode={darkmode} setDarkmode={toggleMode}/>

      <section className={styles.section}>
        <Control countries={countryNames} regions={regions}/>
      </section>

      <section className={`${styles.section} ${styles.countries}`}>
        {countries != null &&
        countries.map((country: any) => <Country key={country.ccn3} country={country} />)
        }
      </section>
    </main>
  )
}
