import React from 'react'
import Form from 'react-bootstrap/Form';

function MatchInput(props) {
    const onInput = ({target:{value}}) => { 
        props.handleInput(value);
        console.log('value changing');
    }
    return (
    <div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Match Information</Form.Label>
            <Form.Control as="textarea" rows={12} width={300} onChange={onInput} />
      </Form.Group>
    </div>
    )
}

export default MatchInput