
import { useEffect, useState } from 'react';
import './App.css'
import Home from './Components/Home'
import Preloader from './Components/Preloader'

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
      console.log("window is loading")
    };

    // Attach the event listener for page load
    window.addEventListener('load', handleLoad);
    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className="food" >
      {loading ? <Preloader /> : <Home />}
      {/* <Home/> */}

    </div>
  )
}

export default App
