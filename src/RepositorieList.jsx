import React, { useState } from 'react';
import { Repositorie } from './Repositorie';
import { Plus } from 'lucide-react';

export function RepositorieList(props) {
  const [repositoriesList, setRepositoriesList] = useState([
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
  ])
  const [counterState, setCounterState] = useState(repositoriesList.length)
  return (
    <div className=''>
      {repositoriesList.map(repository => <Repositorie link={repository.link} name={repository.name} repositoryLink={repository.repositoryLink}/>)}
      {repositoriesList.length > 2? 
        <h4>Looks like i like a lot of repositories</h4>
      :
        <h4>I'm a repository enthusiast</h4>
      }
      <button className='button' onClick={() => setCounterState(counterState+1)}>
        Add repository <Plus />
      </button>

      <h4>Counting of repository: {counterState}</h4>
    </div>
  );
}