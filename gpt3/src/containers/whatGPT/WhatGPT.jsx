import React from 'react'
import './whatGPT.css'
import {Feature} from '../../components'
function WhatGPT() {
  return (
   <div className='gpt__wgpt section__margin' id='whatisgpt'>
    <div className='gpt__wgpt-feature'>
     <Feature title={"What is GPT-3"} text={"We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."}/>
    </div>
    <div className='gpt__wgpt_heading'>
      <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
      <p>Explore The Library</p>
    </div>
    <div className='gpt__wgpt__container'>
      <Feature title={"Chatbots"} text={"We so opinion friends me message as delight. Whole front do of plate heard oh ought. "}/>
      <Feature title={"Knowledgebase"} text={"At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"}/>
      <Feature title={"Education"} text={"At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"}/>  
    </div>
   </div>
  )
}

export default WhatGPT