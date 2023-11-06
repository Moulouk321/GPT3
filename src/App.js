import React from 'react'
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers'
import { CTA, Brand, Navbar } from './components'
import './App.css'


const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <div className='container'>
              <Navbar />
              <Header />
            </div>
        </div>
        <div className='container'>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
        </div>
        <Footer />
    </div>
  )
}

export default App