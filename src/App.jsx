import React from 'react';
import {RepositorieList} from './RepositorieList';

export function App(props) {
  return (
    <div className='App'>
      <h1>Oba!</h1>
      <h2>Some of my favorities repositories in Github</h2>
      <RepositorieList/>
    </div>
  );
}

// Log to console
console.log('Hello console')