import './App.css';
import { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/NavBar';
import { MobileMenu } from './components/MobileMenu';
import './index.css';
import { Home } from './components/sections/Home';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}></LoadingScreen>}{" "}
      <div className={`min-hs-screen transition-opaticity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-green-100`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
      </div>
    </>
  )
}

export default App
