import React from 'react';

export function Repositorie(props) {
  return (
    <div className='repositorie'>
      <img src={props.link} className="image"/>
      <a href={`${props.repositoryLink}`} target='_blak' className='link'>{props.name}</a>
    </div>
  );
}