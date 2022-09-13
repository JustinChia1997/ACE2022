import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { React, useState } from 'react';
import InputForm from './components/inputForm.js';
import { DataProvider } from './dataContext.js';
import resultCalculator from './services/resultCalculator.js';



function App() {
  resultCalculator();
  const defaultData = {
    teamData: `team`,
    matchData: 'match',
  }

  const [appData, setAppData] = useState({
    ...defaultData
  });

  const handleTeamInput = (input) => {
    setAppData({ teamData: input });
  }

  const handleMatchInput = (input) => {
    setAppData({ matchData: input });
  }

  const resetData = () => {
    setAppData({ ...defaultData });
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
          <Button variant="secondary" onClick={resetData} >Reset</Button>{' '}
        </div>
      </DataProvider>
    </div>
  );
}

export default App;
