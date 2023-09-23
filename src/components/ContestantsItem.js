import React from 'react';

function ContestantsItem({ image, name, quote }){
    return(
        <div className='contestantsItem'>
          <div style={{ backgroundImage: `url(${image})` }}></div>
          <h1>{name}</h1>
          <p>{quote}</p>
        </div>
    )
}

export default ContestantsItem;