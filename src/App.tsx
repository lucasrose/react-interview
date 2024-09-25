import React from 'react';
import './App.css';
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <div className='gap-2'>
          <span className='text-red-800'>Using the provided api we'd like to do the following:</span>
          <div>1. Fetch results & build a search component</div>
          <div>2. Add the ability to save items from our list of results to different lists</div>
          <div>3. Show our lists </div>
        </div>
      </header>
    </div>
  );
}

export default App;
