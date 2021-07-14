import React, { useState } from 'react';
import { InputGroup, Form, Button } from "@themesberg/react-bootstrap";
import axios from 'axios';

const apiEndpoint = 'http://localhost:3001/api/predict'

const PredictionForm = (props) => {
    const [inputField, setInputField] = useState({
        id: ''
    })

    const [prediction, setPrediction] = useState({
        result: ''
    })

    const inputsHandler = (e) => {
        setInputField({ [e.target.name]: e.target.value })
    }

    const submitHandler = async () => {
        const id = inputField.id
        const {data} = await axios.get(apiEndpoint + '?id=' + id)
        setPrediction({result: data.result})
    }

    return (<div>
        <div className="mb-4 mb-lg-0">
            <InputGroup className="me-2 me-lg-3">
                <InputGroup.Text />
                <Form.Control
                    type="text"
                    placeholder="Defect ID"
                    name="id"
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