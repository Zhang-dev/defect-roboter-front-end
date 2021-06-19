import React from "react";
import { Breadcrumb } from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import PredictionForm from "./components/PredictionForm";

export default () => {
    return (
        <div className="d-lg-flex align-items-center ">
            <div className="mb-4 mb-lg-0">
                <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
                    <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
                    <Breadcrumb.Item>Defects</Breadcrumb.Item>
                    <Breadcrumb.Item active>Category Prediction</Breadcrumb.Item>
                </Breadcrumb>
                <h4>Category Prediction</h4>
                <p className="mb-0">Please input your description of the defect.</p>
                <PredictionForm />
            </div>
        </div>
    );
}
