import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';
import classes from './Forecast.module.css';

const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);

    
    function getForecast(e){
        e.preventDefault();
        if(city.length === 0) return setError(true);
        
        setError(false);
        setResponseObj({});
        setLoading(true);
        
        let uriEncodedCity = encodeURIComponent(city);
        //weather data fecth will go here!
        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${uriEncodedCity}&units=${unit}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "51cb800162mshfb1814d9d8d5a9bp183faejsnb4e76d70694f",
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(response => {
            if(response.cod != 200) throw new Error();

            setResponseObj(response);
            setLoading(false);
        })
        .catch(err => {
            setError(true);
            setLoading(false);
            console.error(err);
        });
    }

    return (
        // JSX code will go here
        <div className="d-flex flex-column">
            <h2 className="d-flex justify-content-center display-5">
                Find the Current Weather Conditions
            </h2>
            
            <form onSubmit = {getForecast} className="d-flex flex-column alert alert-info">
                <input
                type="text"
                placeholder="Enter City"
                maxLength="50"
                className="form-control w-50 m-auto m-2"
                value={city}
                onChange = {(e)=>setCity(e.target.value)}
                />
                <div className="m-auto p-2 display-5 form-check form-check-inline">
                    <label className="form-input-label m-2">
                        <input
                            type="radio"
                            name="units"
                            className="form-check-input"
                            checked={unit==="imperial"}
                            value="imperial"
                            onChange={(e)=>setUnit(e.target.value)}
                            checked
                        /> Fahrenheit
                    </label>
                    <label className="form-input-label m-2">
                        <input
                            type="radio"
                            name="units"
                            className="form-check-input"
                            checked={unit==="metric"}
                            value="metric"
                            onChange={(e)=>setUnit(e.target.value)}
                        /> Celcius
                    </label>
                </div>

                
                <button type="submit" className="btn btn-outline-info btn-lg w-50 m-auto">
                    Get Forecast
                </button>
            </form>
            
            <Conditions 
                responseObj = {responseObj} 
                error={error}
                loading={loading}
            />
        </div>
    );
}

export default Forecast;