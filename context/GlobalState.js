import React, { createContext, useReducer, useEffect } from 'react'
import AppReducer from './AppReducer'
import { logEvent, logException } from '../utils/analytics'
import { 
  ADD_DEATH, 
  ADD_RECOVERED,
  ADD_CONFIRMED,
  ADD_COUNTRIES, 
  SELECT_COUNTRY, 
  UPDATE_DISPLAY_TEXT, 
  SET_IS_LOADING 
} from "./constants"

const initialState = {
  countries: {},
  selectedCountry: 'Entire World',
  selectedCountryCode: '',
  displayText: 'You are currently looking data for ',
  confirmed: 0,
  death: 0,
  recovered: 0,
  loading: true
}

// Create Context
export const GlobalContext = createContext(initialState)

// Provider Component
export const GlobalProvider = ({ children }) => {

  const [state, dispatch] = useReducer(AppReducer, initialState)

  const addDeath = (death) => {
    dispatch({
      type: ADD_DEATH,
      payload: death
    })
  }

  const addConfirmed = (confirmed) => {
    dispatch({
      type: ADD_CONFIRMED,
      payload: confirmed
    })
  }

  const addRecovered = (recovered) => {
    dispatch({
      type: ADD_RECOVERED,
      payload: recovered
    })
  }

  const addCountries = (countries) => {
    dispatch({
      type: ADD_COUNTRIES,
      payload: countries
    })
  }

  const changeCountry = (country, code) => {
    dispatch({
      type: SELECT_COUNTRY,
      payload: {
        selectedCountry: country,
        selectedCountryCode: code
      }
    })

    refreshData(code)
  }

  const updateDisplayText = (text) => {
    dispatch({
      type: UPDATE_DISPLAY_TEXT,
      payload: text
    })
  }

  const refreshData = async (code) => {
    try {
      let resp;
      setIsLoading(true)

      if(code === "Entire World") {
        resp = await fetch(`https://covid19.mathdro.id/api/`)
      } else {
        resp = await fetch(`https://covid19.mathdro.id/api/countries/${code}`)
      }

      const { confirmed, deaths, recovered } = await resp.json()

      addConfirmed(confirmed.value)
      addDeath(deaths.value)
      addRecovered(recovered.value)
      updateDisplayText('You are currently looking data for ')
      setIsLoading(false)

      logEvent('data', 'change')
    } catch(e) {
      updateDisplayText('Cannot find data for ')
      addConfirmed(0)
      addDeath(0)
      addRecovered(0)
      setIsLoading(false)
      
      logException(`Cannot load data for ${state.selectedCountry}`)
    }
  }

  const setIsLoading = (value) => {
    dispatch({
      type: SET_IS_LOADING,
      payload: value
    })
  }

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true)

        const pGeneralInfo = fetch('https://covid19.mathdro.id/api')
        const pCountryInfo = fetch('https://covid19.mathdro.id/api/countries')

        const [generalInfo, countryInfo] = await Promise.all([pGeneralInfo, pCountryInfo])

        const { confirmed, deaths, recovered } = await generalInfo.json()
        const countries = await countryInfo.json()

        addConfirmed(confirmed.value)
        addRecovered(recovered.value)
        addDeath(deaths.value)
        addCountries(countries)

        setIsLoading(false)

        logEvent('data', 'load')
      } catch(e) {
        setIsLoading(false)
        logException('Cannot load initial data', true)
      }
    }

    fetchData()
  }, [])

  return (
    <GlobalContext.Provider value={{
      countries: state.countries,
      death: state.death,
      recovered: state.recovered,
      confirmed: state.confirmed,
      selectedCountry: state.selectedCountry,
      selectedCountryCode: state.selectedCountryCode,
      displayText: state.displayText,
      loading: state.loading,
      changeCountry
    }}>
      {children}
    </GlobalContext.Provider>
  );
}