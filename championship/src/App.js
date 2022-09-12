import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TeamInput from './components/teamInput.js';
import { useState } from 'react';

function App() {
  const [teamData, setTeamData] = useState(0);

  const handleTeamInput = input => {
    setTeamData(input);
    console.log('team input received')
    console.log(input)
  }

  return (
    <div className="App">
      <TeamInput handleTeamInput={handleTeamInput}></TeamInput>
    </div>
  );
}

export default App;
