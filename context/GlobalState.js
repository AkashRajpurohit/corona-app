import React, { createContext, useReducer, useEffect } from 'react'
import AppReducer from './AppReducer'
import { ADD_DEATH, ADD_CONFIRMED, ADD_RECOVERED } from './constants'

const initialState = {
  countries: {},
  selectedCountry: 'USA',
  confirmed: 0,
  death: 0,
  recovered: 0
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

  useEffect(() => {
    async function fetchData() {
      const resp = await fetch('https://covid19.mathdro.id/api')
      const data = await resp.json()
      const { deaths, recovered, confirmed } = data

      addConfirmed(confirmed.value)
      addRecovered(recovered.value)
      addDeath(deaths.value)
    }

    fetchData()
  }, [])

  return (
    <GlobalContext.Provider value={{
      countries: state.countries,
      death: state.death,
      recovered: state.recovered,
      confirmed: state.confirmed
    }}>
      {children}
    </GlobalContext.Provider>
  );
}