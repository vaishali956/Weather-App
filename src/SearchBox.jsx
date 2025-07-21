
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){

    let [city, setCity] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "70ca543605575c38f71553f1f6fa033f";

    let getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            weather: jsonResponse.weather[0].description,
            feels_like: jsonResponse.main.feels_like,
        };
        console.log(result);
        return result;
    };
    let handleChange = (event) =>{
        setCity(event.target.value);
    };
    let handleSubmit = async (event) =>{
        event.preventDefault();
        console.log(city);
        setCity(null);
        let newInfo = await getWeatherInfo();
        updateInfo( newInfo );
    };
    return(
        <div className='SearchBox'>   
            <form onSubmit={handleSubmit} className='formWtApp'>
                <TextField id="city" label="  City name " variant="outlined"   onChange={handleChange} required/>
                <br /> <br />
                <Button variant="contained" type='submit'> Search </Button>
            </form>
        </div>
    );
}