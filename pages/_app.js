import {useState, createContext } from 'react'
import '../styles/globals.scss'
export const domReadyManager = createContext();

function MyApp({ Component, pageProps }) {
  const [domReady, setDomReady] = useState(); 

  return (
    <domReadyManager.Provider value={[domReady, setDomReady]}>
      <Component {...pageProps} />
    </domReadyManager.Provider>
  )
}

export default MyApp
