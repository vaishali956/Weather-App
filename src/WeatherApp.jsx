

import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        humidity:33,
        temp:32.24,
        tempMax: 32.24,
        tempMin: 32.24,
        weather: "overcast clouds",
        feels_like: 31.37
    });
    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return(
        <div className="WeatherApp">
          <h1 style={{paddingTop:"10px"}} >Weather App!</h1>
          <SearchBox updateInfo = {updateInfo}/>
          <InfoBox info={weatherInfo}/>
        </div>
    );
}