import React from 'react';
import classes from './Conditions.module.css';

const Conditions = (props) => {
    return (
        <div className="d-flex flex-column">
            {props.error && <small className="alert alert-danger fond-weight-normal d-flex justify-content-center">PLease enter a valid city.</small>}

            {props.loading && <div className="spinner-grow text-danger" />}
            
            {props.responseObj.cod === 200 ?
                <div className="d-flex flex-column">
                    <p className="d-flex justify-content-center w-50 m-auto badge badge-pill badge-success" style={{fontSize: "2rem"}}><strong>{props.responseObj.name}</strong></p>
                    <p className="d-flex justify-content-center alert alert-success">It is currently {Math.round(props.responseObj.main.temp)} degrees out with&nbsp;
                 {props.responseObj.weather[0].description}. </p>
                </div>
                : null
            } 
        </div>
    );
};

export default Conditions;