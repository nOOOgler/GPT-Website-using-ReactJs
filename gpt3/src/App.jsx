import './App.css'
import { Blog, Header, Footer, Features, Possibility, WhatGPT } from './containers'
import {CTA, Navbar, Brand} from './components'
function App() {
  

  return (
    <div className='App'>
      <div className='gradient__bg'>
         <Navbar/>
         <Header/>
      </div>
      <Brand/>
      <WhatGPT/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>

    </div>
  )
}

export default App
