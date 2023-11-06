import React from 'react'
import './article.css'

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-image'>
        <img src={imgUrl} alt="blog" />
      </div>
      <div className='gpt3__blog-container_article-content'>
        <div>
          <p className='fs-16 lh-27'> {date} </p>
          <h3 className='fs-24 lh-27'> {title} </h3>
        </div>
        <p className='fs-16 lh-27'>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article