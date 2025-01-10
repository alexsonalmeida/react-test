import React from 'react';

export function Repositorie(props) {
  return (
    <div className='repositorie'>
      <img src={props.link} className="image"/>
      <h3>{props.name}</h3>
    </div>
  );
}