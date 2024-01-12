'use client'
import styles from "../page.module.css"
import { Autocomplete, TextField, InputAdornment } from "@mui/material"
import { Search } from "@mui/icons-material"
import { useState,  useEffect } from "react"
import SearchBox from "./search"

export default function Control(){
  const [country, setCountry] = useState("")
  const [regions, setRegions] = useState([""])
  const [countries, setCountries] = useState([""])
  const [filter, setFilter] = useState("")

  async function getAllCountries() {
    const response = await fetch("https://restcountries.com/v3.1/all")
    const data = await response.json()
    let regionSet:string[] = Array.from(new Set(data.map((country:any) => country.region)))
    setRegions(regionSet)
    setCountries(data.map((country:any) => country.name.common))
  }

  useEffect(() => {
    getAllCountries()
  }, [])

  return(
    <form>
      <SearchBox options={countries} setChoice={setCountry} label="Search for a country..."/>
      <p>{country}</p>
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