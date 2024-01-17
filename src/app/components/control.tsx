'use client'
import styles from "../page.module.css"
import { Autocomplete, TextField, InputAdornment } from "@mui/material"
import { Search } from "@mui/icons-material"
import { useState,  useEffect } from "react"
import SearchBox from "./search"
import Filter from "./filter"

interface Props{
  countries: string[],
  regions: string[]
}

export default function Control({countries, regions}:Props){
  const [country, setCountry] = useState("")
  const [filter, setFilter] = useState("")

  return(
    <form className={styles.form}>
      <SearchBox options={countries} setChoice={setCountry} label="Search for a country..."/>
      
      <Filter setRegion={setFilter} options={regions}/>
    </form>
  )
}


    // <form className={styles.form}>
    //   <Autocomplete
    //   className={styles.search}
    //   id="search"
    //   value={country}
    //   inputValue={country}
    //   onInputChange={(event:any, newValue: string|null) => {
    //     newValue == null ? setCountry("") : setCountry(newValue)}}
    //   onChange={(event:any, newValue:string|null) => {
    //     newValue == null ? setCountry("") : setCountry(newValue)
    //   }}
    //   freeSolo
    //   options={countries}
    //   renderInput={(params) => 
    //     <TextField {...params} 
    //     label="Search for a country..." 
    //     InputProps={{startAdornment: (
    //     <InputAdornment position="start">
    //       <Search />
    //     </InputAdornment>
    //    )}}
    //    />}
    //   />

    //   <Autocomplete
    //   className={styles.filter}
    //   id="filter"
    //   options={regions}
    //   value={filter}
    //   inputValue={filter}
    //   onInputChange={(event:any, newVal:string|null) => {
    //     newVal == null? setFilter("") : setFilter(newVal)}}
    //   onChange={(event:any, newVal:string|null) => {
    //     newVal == null? setFilter(""):setFilter(newVal)}}
    //   renderInput={(params) => 
    //   <TextField {...params}
    //    label="Filter by Region"/>} 
    //   />
    // </form>