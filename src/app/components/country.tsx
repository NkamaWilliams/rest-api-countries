'use client'
import { useState } from "react"
import styles from "../styles/country.module.css"
import Image from "next/image"

export default function Country({country}:any){
    const [open, setOpen] = useState(false)
    return(
        <div className={styles.container}>
            <button className={styles.card}>
                <Image className={styles.flag} alt={country.flags} src={country.flags.png} width={320} height={160} /> <br/>

                
                <div className={styles.text}>
                    <h2>{country.name.common}</h2><br/>

                    <h4 className={styles.infoTitle}>Population: <span className={styles.info}>{country.population}</span></h4>
                    <h4 className={styles.infoTitle}>Region: <span className={styles.info}>{country.region}</span></h4>
                    <h4 className={styles.infoTitle}>Capital: <span className={styles.info}>{country.capital}</span></h4>
                </div>
            </button>
            {open && 
            <div>

            </div>}
        </div>
    )
}