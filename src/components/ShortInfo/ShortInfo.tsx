import React from 'react';
import paragraphs from './paragraphs';

import './styles.scss';

const ShortInfo = () => {

  return (
    <div className='short-info'>
      <span>
        The most trusted cryptocurrency platform
      </span>

      <div>
        {paragraphs.map(paragraph => (
          <div>
            <img alt={paragraph.title} src={`./shortInfo/${paragraph.name}.png`} />
            <span>
              {paragraph.title}
            </span>

            {paragraph.items.map(item => (
              <span>
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