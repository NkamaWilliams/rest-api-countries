'use client'
import styles from "../styles/filter.module.css"

interface props{
    options: Array<string>,
    setRegion: React.Dispatch<React.SetStateAction<string>>
}
export default function Filter({options, setRegion}:props){
    return(
        <div className={styles.filter}>
            <select id="region" name="region">
                <option className={styles.options} value="" disabled selected>Filter by Region</option>
                {options.map(opt => 
                    <option className={styles.options} key={opt} value={opt}>{opt}</option>)}
            </select>
        </div>
    )
}