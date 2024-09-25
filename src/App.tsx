import React from "react";
import "./App.css";
import "tailwindcss/tailwind.css";

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
        <div className="gap-2">
          <span>Using the provided api we'd like to do the following:</span>
          <div>1. Fetch results & build a search component</div>
          <div>
            2. Add the ability to save items to different lists. Clicking a save
            button should prompt list creation and naming if none exists. If a
            list exists, it should show the list options to add to. (feel free
            to persist in any storage you like)
          </div>
          <div>3. Clicking into a list shows each event with details</div>
          <div>4. Delete and multi delete</div>

          <div>
            5. Other notes: feel free to reference any apis or library docs you
            like, no copilot
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
