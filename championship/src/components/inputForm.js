import React, { useContext } from 'react'
import Form from 'react-bootstrap/Form';
import { UserContext } from '../App';
import DataContext from '../dataContext.js';

function InputForm(props) {
    const value = useContext(DataContext);
    const onInput = ({ target: { value } }) => {
        props.handleInput(value);
        console.log('value changing');
    }
    return (
        <div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>{props.inputName}</Form.Label>
                <Form.Control as="textarea" rows={12} width={300} onChange={onInput} />
            </Form.Group>
        </div>
    )
}

export default InputForm