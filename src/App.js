import logo from './logo.svg';
import './App.css';

import Home from "./Components/Home/Home"
import { useCallback, useEffect, useMemo, useState } from 'react';

function App() {
  const [myHome, setmyHome] = useState("zain")

  useEffect(()=>{
    setTimeout(() => {
      setmyHome("anas")  
    }, 4000   );
    
  },[])

  
  
  return (
    <>
      <Home/>
     
    </>
  );
}

export default App;
