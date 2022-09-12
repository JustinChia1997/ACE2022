import React from 'react'
import Form from 'react-bootstrap/Form';

function TeamInput() {
    return (
    <div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={12} width={300} />
      </Form.Group>
    </div>
    )
}

export default TeamInput