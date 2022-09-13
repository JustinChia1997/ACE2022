import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { React, useState } from 'react';
import InputForm from './components/inputForm.js';
import { DataProvider } from './dataContext.js';



function App() {
  const [teamData, setTeamData] = useState(0);
  const [matchData, setMatchData] = useState(0);

  const handleTeamInput = (input) => {
    setTeamData(input);
    console.log(input);
  }

  const handleMatchInput = (input) => {
    setMatchData(input);
  }

  return (
    <div className="App">
      <DataProvider value={'hiWorld'}>
        <div>
          <InputForm inputName="Team Information input" handleInput={handleTeamInput}></InputForm>
          <InputForm inputName="Match Information input" handleInput={handleMatchInput}></InputForm>
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
