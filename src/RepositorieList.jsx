import React from 'react';
import {Repositorie} from './Repositorie'

export function RepositorieList(props) {
  const repositoriesList = [
    {
      name: 'Swift',
      link: 'https://github.com/swiftlang.png',
      repositoryLink: 'https://github.com/swiftlang/swift'
    },
    {
      name: 'NextJS',
      link: 'https://github.com/vercel.png',
      repositoryLink: 'https://github.com/vercel/next.js'
    },
    {
      name: 'TailwindCSS',
      link: 'https://github.com/tailwindlabs.png',
      repositoryLink: 'https://github.com/tailwindlabs/tailwindcss'
    }
  ]
  return (
    <div className=''>
      {repositoriesList.map(repository => <Repositorie link={repository.link} name={repository.name} repositoryLink={repository.repositoryLink}/>)}
      {repositoriesList.length > 2? 
        <h4>Looks like i like a lot of repositories</h4>
      :
        <h4>I'm a repository enthusiast</h4>
      }
    </div>
  );
}