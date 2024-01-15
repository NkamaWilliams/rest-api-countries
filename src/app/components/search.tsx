'use client'
import styles from "../styles/search.module.css"
import { Search, Close } from "@mui/icons-material"
import { useState } from "react"

interface props{
    options: Array<string>,
    setChoice: React.Dispatch<React.SetStateAction<string>>,
    label: string
}
export default function SearchBox({options, setChoice, label}: props){
  const [value, setValue] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    setChoice(e.target.value)
  }

  const handleCancel = () => {
    setValue("")
    setChoice("")
  }

  return(
    <div className={styles.search}>
        <Search 
        fontSize="medium"/>

        <input 
        value={value}
        list = "countries" 
        onChange={handleChange} 
        className={styles.textInput} 
        type="text" placeholder={label}/>

        <datalist className={styles.datalist} id="countries">
          {options.map(opt => <option key={opt} value={opt}/>)}
        </datalist>

        <Close className={styles.close} onClick={handleCancel} fontSize="medium"/>
    </div>
  )
}