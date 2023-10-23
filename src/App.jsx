import React from "react"
import Home from './Pages/Home/Home'
import Footer from './component/Footer/Footer'
import Recipie from "./Pages/Recipie/Recipie"
import Service from "./Pages/Services/Service"
import News from "./Pages/News/News"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import DetailOne from "./Detail/DetailOne"
import DetailTwo from "./Detail/DetailTwo"
import DetailThree from "./Detail/DetailThree"
import DetailFour from "./Detail/DetailFour"
import DetailFive from "./Detail/DetailFive"
import DetailSix from "./Detail/DetailSix"
import { Routes, Route } from 'react-router-dom'
import './index.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipie" element={<Recipie />} />
        <Route path="/service" element={<Service />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact  />} />
        <Route path="/detailone" element={<DetailOne  />} />
        <Route path="/detailtwo" element={<DetailTwo  />} />
        <Route path="/detailthree" element={<DetailThree  />} />
        <Route path="/detailfour" element={<DetailFour  />} />
        <Route path="/detailfive" element={<DetailFive  />} />
        <Route path="/detailsix" element={<DetailSix  />} />
        
      </Routes>

      <Footer />
    </>
  )
}

export default App
