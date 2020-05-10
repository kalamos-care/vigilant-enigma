import React, { useState, useEffect } from 'react'
import Context from '~/context/FunctionsContext'

const functionsPath = '/.netlify/functions';

const ContextProvider = ({ children }) => {
  const [proximity, updateProximity] = useState({
    origin: '',
    results: [],
    loading: false
  });

  useEffect(() => {
    if (proximity.origin.length) {
      updateProximity(prevState => ({ ...prevState, loading: true, results: [] }));
      fetch(`${functionsPath}/proximity?prox[origin]=${proximity.origin}`)
        .then(response => response.json())
        .then(results => {
          updateProximity(prevState => ({
            ...prevState,
            results,
            loading: false
          }));
        });
    }
  }, [proximity.origin]);

  return (
    <Context.Provider
      value={{
        proximity,
        updateProximityOrigin: origin => {
          updateProximity(prevState => ({ ...prevState, origin }));
        },
      }}
    >
      {children}
    </Context.Provider>
  )
}
export default ContextProvider
