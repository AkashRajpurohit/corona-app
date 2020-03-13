import { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState"

const CountrySelectBox = () => {
  const { countries, changeCountry } = useContext(GlobalContext)

  const handleSelectBoxChange = (e) => {
    let index = e.nativeEvent.target.selectedIndex;
    let country = e.nativeEvent.target[index].text;
    let code = e.target.value;
    changeCountry(country, code)
  }

  return (
    <>
      <select onChange={(e) => handleSelectBoxChange(e)}>
        <option value="Entire World">Entire World</option>
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