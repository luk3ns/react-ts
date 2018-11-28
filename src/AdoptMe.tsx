import * as React from 'react';

export default ({ data }) => 
<div className='card'>
<h1 className='card__name'>{data.name}</h1>
<div className='card__main'>
  <img className='card__photo' src={data.photos[0]}/>
  <div>
    <p>{data.description}</p>
    <ul>
      <li>Sex: {data.sex}</li>
      <li>Age: {data.age}</li>
    </ul>
  </div>
</div>
</div>