import React from 'react'
import Form from 'react-bootstrap/Form';

function TeamInput(props) {
    const onInput = ({target:{value}}) => { 
        props.handleTeamInput(value);
        console.log('value changing');
    }
    return (
    <div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Team Information</Form.Label>
            <Form.Control as="textarea" rows={12} width={300} onChange={onInput} />
      </Form.Group>
    </div>
    )
}

export default TeamInput