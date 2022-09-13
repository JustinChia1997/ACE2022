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
    finalResult: 0,
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
  };

  const getResult = () => {
    let finalResult = resultCalculator(appData.teamData, appData.matchData);
    setAppData((prevState) => ({ ...prevState, finalResult: finalResult }));
    handleShow();
  };

  return (
    <div className='App'>
      <DataProvider value={appData}>
        <div>
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
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Results from Championships</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {appData.finalResult.length ? (
              <>
                <div>
                  <h1>Winners from Group 1:</h1>
                  {appData.finalResult[0].map((item, idx) => {
                    return (
                      <p>
                        {idx + 1}. {item.name}
                        {idx < 4 ? ' (qualified)' : ' (not qualified)'}
                      </p>
                    );
                  })}
                </div>
                <div>
                  <h1>Winners from Group 2:</h1>
                  {appData.finalResult[1].map((item, idx) => {
                    return (
                      <p>
                        {idx + 1}. {item.name}
                        {idx < 4 ? ' (qualified)' : ' (not qualified)'}
                      </p>
                    );
                  })}
                </div>
              </>
            ) : (
              <p>Result could not be computed, please check data inputs</p>
            )}
          </Modal.Body>
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
