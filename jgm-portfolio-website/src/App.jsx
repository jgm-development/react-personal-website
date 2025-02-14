import './App.css';
import { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import './index.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}></LoadingScreen>}
    </>
  )
}

export default App
