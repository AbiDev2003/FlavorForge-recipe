import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState, useRef } from "react"
import DefaultPage from "./components/DefaultPage"
import Header from "./components/Header"
import Main from './components/Main'
import Footer from './components/Footer.jsx';
import Opening from './components/Opening.jsx';
import ScrollToTop from "./components/ScrollToTop.jsx"

function App() {
  const [showOpening, setShowOpening] = useState(true);
  const aboutRef = useRef(null); 
  const afterCurtain = () => {
    // window.scroll(0, 0)
    setShowOpening(false)
  }
  const handleToScrollAbout = () => {
    aboutRef.current ?.scrollIntoView({
      behavior:'smooth', 
      block:'start'
    })
  }
  return (
    <Router> 
      {/* Your actual website (instantly visible underneath) */}
      <div className="relative z-0">
        <Header isLoading={false} />
          
            <ScrollToTop/>
            <Routes>
              <Route path = '/' element={<DefaultPage aboutRef={aboutRef} handleScrollToAbout={handleToScrollAbout}/>}/>
              <Route path="/ask-environment" element={<Main/>} />
            </Routes>  
            <Footer/>
          
      </div>

      {/* Opening overlay (sits on top) */}
      {showOpening && (
        <Opening onLoadComplete={() => afterCurtain()} />
      )}
    </Router>
  )
}

export default App;
