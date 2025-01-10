import React from 'react';
import {Repositorie} from './Repositorie'

export function RepositorieList(props) {
  const repositoriesList = [
    {
      name: 'Swift',
      link: 'https://github.com/swiftlang.png'
    },
    {
      name: 'NextJS',
      link: 'https://github.com/vercel.png'
    }
  ]
  return (
    <div className=''>
      {repositoriesList.map(repository => <Repositorie link={repository.link} name={repository.name}/>)}
    </div>
  );
}