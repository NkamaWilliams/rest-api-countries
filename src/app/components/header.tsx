import styles from "../page.module.css"
import { NightlightOutlined } from '@mui/icons-material'
import { Nightlight } from "@mui/icons-material"

interface props{
    darkmode: boolean,
    setDarkmode: () => void,
}

export default function Header({darkmode, setDarkmode}: props){
  return (
    <header className={styles.header}>
      <h1>Where in the world?</h1>

      <button className={styles.btn1} onClick={setDarkmode}>
        {
            darkmode ? 
            <Nightlight className={styles.moon} />:
            <NightlightOutlined className={styles.moon} /> 
        }
        <p>
          Dark Mode
        </p>
      </button>
    </header>
  )
}