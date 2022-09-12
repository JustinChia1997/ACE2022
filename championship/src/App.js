import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import TeamInput from './components/teamInput.js';
import MatchInput from './components/matchInput.js';


function App() {
  const [teamData, setTeamData] = useState(0);
  const [matchData, setMatchData] = useState(0);

  const handleTeamInput = input => {
    setTeamData(input);
  }

  const handleMatchInput = input => {
    setMatchData();
  }

  return (
    <div className="App">
      <div>
        <TeamInput handleInput={handleTeamInput}></TeamInput>
        <MatchInput handleInput={handleMatchInput}></MatchInput>
      </div>
      <div>
        <Button variant="primary">Get Results</Button>{' '}
        <Button variant="secondary">Reset</Button>{' '}
      </div>
    </div>
  );
}

export default App;
