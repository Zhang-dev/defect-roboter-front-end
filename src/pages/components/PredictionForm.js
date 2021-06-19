import React, { useState } from 'react';
import { InputGroup, Form, Button } from "@themesberg/react-bootstrap";

const PredictionForm = (props) => {
    const [inputField, setInputField] = useState({
        first_name: '',
        last_name: '',
        gmail: ''
    })

    const inputsHandler = (e) => {
        setInputField({ [e.target.name]: e.target.value })
    }

    const submitHandler = () => {
        alert(inputField.description)
    }

    return (<div>
        <div className="mb-4 mb-lg-0">
            <InputGroup className="me-2 me-lg-3">
                <InputGroup.Text />
                <Form.Control
                    type="text"
                    placeholder="Input your description of the defect"
                    name="description"
                    onChange={inputsHandler}
                    value={inputField.description}
                />
            </InputGroup>
        </div>
        <div className="mb-4 mb-lg-0">
            <Button
                variant="primary"
                size="md"
                type="submit"
                onClick={submitHandler}
            >
                Predict</Button>
        </div>
    </div>);
}

export default PredictionForm;