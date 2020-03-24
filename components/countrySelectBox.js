import { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState"
import Skeleton from './skeleton'

const CountrySelectBox = () => {
  const { countries, changeCountry, loading, selectedCountryCode } = useContext(GlobalContext)

  const handleSelectBoxChange = (e) => {
    let index = e.nativeEvent.target.selectedIndex;
    let country = e.nativeEvent.target[index].text;
    let code = e.target.value;
    changeCountry(country, code)
  }

  return (
    <>
      {
        loading ? <Skeleton width="400" /> : (
          <label className="wrapper">Choose a place
            <div className="button custom-select">
              <select value={selectedCountryCode} onChange={(e) => handleSelectBoxChange(e)}>
                <option value="Entire World">Entire World</option>
                {
                  countries.countries.length > 0 && countries.countries.map(({ name, iso3}) => (
                    <option key={iso3} value={iso3}>
                      {name}
                    </option>
                  ))
                }
              </select>
            </div>
          </label>
        )
      }
      <style jsx>{`
        label {
          display:block;
          margin-top:2em;
          font-size: 0.9em;
          color:#777;
        }
        
        .custom-select {
          position: relative;
          display:block;
          margin-top:0.5em;
          padding:0;
        }

        .custom-select select {
          width:100%;
          margin:0;
          background:none;
          border: 1px solid transparent;
          outline: none;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          appearance: none;
          -webkit-appearance: none;
          font-size:16px;
          font-family: helvetica, sans-serif;
          font-weight: bold;
          color: #444;
          padding: .6em 1.9em .5em .8em;
          line-height:1.3;
        }

        .custom-select:hover {
          border:1px solid #888;
        }
        
        .custom-select select:focus {
          outline:none;
          box-shadow: 0 0 1px 3px rgba(180,222,250, 1);
          background-color:transparent;
          color: #222;
          border:1px solid #aaa;
        }
        
        .custom-select select:-moz-focusring {
          color: transparent;
          text-shadow: 0 0 0 #000;
        }
        
        .custom-select option {
          font-weight:normal;
        }
        
        .button {
          border: 1px solid #bbb;
          border-radius: .3em;
          box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
          background: #f3f3f3;
          background: -moz-linear-gradient(top, #ffffff 0%, #e5e5e5 100%);
          background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffffff), color-stop(100%,#e5e5e5));
          background: -webkit-linear-gradient(top, #ffffff 0%,#e5e5e5 100%);
          background: -o-linear-gradient(top, #ffffff 0%,#e5e5e5 100%);
          background: -ms-linear-gradient(top, #ffffff 0%,#e5e5e5 100%);
          background: linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
        }
      `}</style>
    </>
  )
}

export default CountrySelectBox