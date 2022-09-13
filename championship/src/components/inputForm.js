import React, { useContext } from 'react'
import Form from 'react-bootstrap/Form';
import { UserContext } from '../App';
import DataContext from '../dataContext.js';

function InputForm(props) {
    const value = useContext(DataContext)[props.type];
    console.log(value);
    const onInput = ({ target: { value } }) => {
        props.handleInput(value);
        console.log('value changing');
    }
    return (
        <div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>{props.inputName}</Form.Label>
                <Form.Control as="textarea" rows={12} width={300} onChange={onInput} value={value} />
            </Form.Group>
        </div>
    )
}

export default InputForm