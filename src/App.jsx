import React from 'react';
import {RepositorieList} from './RepositorieList';

export function App(props) {
  return (
    <div className='App'>
      <h1>Oba!</h1>

      <RepositorieList/>
    </div>
  );
}

// Log to console
console.log('Hello console')