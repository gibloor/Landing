import React from 'react';
import paragraphs from './paragraphs';

import './styles.scss';

const ShortInfo = () => {

  return (
    <div className='short-info'>
      <span className='short-info__title'>
        The most trusted cryptocurrency platform
      </span>

      <div className='short-info__paragraphs'>
        {paragraphs.map(paragraph => (
          <div key={paragraph.name} className='short-info__paragraph'>
            <div className='short-info__paragraph_picture_container'>
              <img alt={paragraph.title} className='short-info__paragraph_picture' src={process.env.PUBLIC_URL + `/shortInfo/${paragraph.name}.png`} />
            </div>
            <span className='short-info__paragraph_title'>
              {paragraph.title}
            </span>

            {paragraph.items.map(item => (
              <span className='short-info__paragraph_text' key={item}>
                {item}
              </span>
            ))}

          </div>
        ))}
      </div>
    </div>
  )
}

export default ShortInfo;