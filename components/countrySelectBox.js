import { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState"

const CountrySelectBox = () => {
  const { countries } = useContext(GlobalContext)
  return (
    <>
      <select>
        <option value="all">World</option>
        {
          Object.entries(countries).length > 0 && Object.entries(countries.countries).map(([country, code]) => (
            <option key={code} value={countries.iso3[code]}>
              {country}
            </option>
          ))
        }
      </select>
    </>    
  )
}

export default CountrySelectBox