import React from 'react'
import './article.css'


function Article({imgURL, date, title}) {
  return (
    <div className='gpt__blog-container__article'>
      <div className='gpt__blog-container__article-img'>
        <img src={imgURL} alt="" />
      </div>
      <div className='gpt__blog-container__article-content'>
          <div>
            <p>{date}</p>
            <h3>{title}</h3>
          </div>
          <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article