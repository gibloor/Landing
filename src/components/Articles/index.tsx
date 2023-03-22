import React from 'react';
import articles from './articles';

import './styles.scss';

const Articles = () => {

  return (
    <div className='articles'>
      <span className='headline articles__title'>
        Learn to thrive
      </span>

      <div className='articles__container'>
        {articles.map(article => {
          const date = `${article.date.getUTCDate()}/${article.date.getUTCMonth() + 1}/${article.date.getUTCFullYear()}`

          return (
            <a href='./' key={article.name}>
              <div className='articles__article'>
                <img src={process.env.PUBLIC_URL + `/articles/${article.name}.png`} />
                <div className='articles__article_block'>
                  <span className='articles__article_title'> {article.title} </span>
                  <span className='articles__article_text'> {article.text} </span>
                  <div className='articles__article_footer'>
                    <span> {article.author} </span>
                    <span> {date} </span>
                    <span> {article.timeToRead} Min to read </span>
                  </div>
                </div>
              </div>
            </a>
          )
        })}
      </div>

    </div>
  )
}

export default Articles;