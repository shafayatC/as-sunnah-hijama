import {useState, createContext } from 'react'
import '../styles/globals.scss'
import { useRouter } from 'next/router';
export const domReadyManager = createContext();

function MyApp({ Component, pageProps }) {
  const [domReady, setDomReady] = useState(); 
  const router = useRouter(); 

  return (
    <domReadyManager.Provider value={[domReady, setDomReady]}>
      
      <Component {...pageProps} />
    </domReadyManager.Provider>
  )
}

export default MyApp
