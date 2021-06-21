import React, { useState } from 'react';
import { InputGroup, Form, Button } from "@themesberg/react-bootstrap";
import axios from 'axios';

const apiEndpoint = 'http://localhost:3001/api/predict'

const PredictionForm = (props) => {
    const [inputField, setInputField] = useState({
        description: ''
    })

    const [prediction, setPrediction] = useState({
        result: ''
    })

    const inputsHandler = (e) => {
        setInputField({ [e.target.name]: e.target.value })
    }

    const submitHandler = async () => {
        const defect = { description: inputField.description }
        const {data} = await axios.post(apiEndpoint, defect)
        setPrediction({result: data.result})
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
        {prediction.result &&
        <h4>
          The defect could belog to the category: {prediction.result}.
        </h4>
      }
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