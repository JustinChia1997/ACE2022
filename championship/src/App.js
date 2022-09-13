import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { React, useState } from 'react';
import InputForm from './components/inputForm.js';
import { DataProvider } from './dataContext.js';
import resultCalculator from './services/resultCalculator.js';
import Modal from 'react-bootstrap/Modal';

function App() {
  const defaultData = {
    teamData: 'Please enter input',
    matchData: 'Please enter input',
    finalResult: false,
  };

  const [appData, setAppData] = useState({
    ...defaultData,
  });

  //States and functions for
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleTeamInput = (input) => {
    setAppData((prevState) => ({ ...prevState, teamData: input }));
  };

  const handleMatchInput = (input) => {
    setAppData((prevState) => ({ ...prevState, matchData: input }));
  };

  const resetData = () => {
    setAppData({ ...defaultData });
    handleShow();
  };

  const getResult = () => {
    console.log(appData.teamData);
    console.log(appData.matchData);
    let finalResult = resultCalculator(appData.teamData, appData.matchData);
    console.log(finalResult);
  };

  return (
    <div className='App'>
      <DataProvider value={appData}>
        <div>
          <InputForm
            type='teamData'
            inputName='Team Information input'
            handleInput={handleTeamInput}
          ></InputForm>
          <InputForm
            type='matchData'
            inputName='Match Information input'
            handleInput={handleMatchInput}
          ></InputForm>
        </div>
        <div>
          <Button variant='primary' onClick={getResult}>
            Get Results
          </Button>{' '}
          <Button variant='secondary' onClick={resetData}>
            Reset
          </Button>{' '}
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Results from Championships</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </DataProvider>
    </div>
  );
}

export default App;
