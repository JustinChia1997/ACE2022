import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { React, useState } from 'react';
import InputForm from './components/inputForm.js';
import { DataProvider } from './dataContext.js';



function App() {
  const [appData, setAppData] = useState({
    teamData: 'teamData',
    matchData: 'matchData',
  });

  const handleTeamInput = (input) => {
    setAppData({ teamData: input });
  }

  const handleMatchInput = (input) => {
    setAppData({ matchData: input });
  }

  return (
    <div className="App">
      <DataProvider value={appData}>
        <div>
          <InputForm type="teamData" inputName="Team Information input" handleInput={handleTeamInput}></InputForm>
          <InputForm type="matchData" inputName="Match Information input" handleInput={handleMatchInput}></InputForm>
        </div>
        <div>
          <Button variant="primary">Get Results</Button>{' '}
          <Button variant="secondary">Reset</Button>{' '}
        </div>
      </DataProvider>
    </div>
  );
}

export default App;
