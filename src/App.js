import React, {useEffect, useState} from 'react';
import Weather from './components/Weather';
import './App.css';

function App() {

  const [lat, setLat] = useState([]);   // latitude
  const [long, setLong] = useState([]);  // longitude
  const [data, setData] = useState([]);  // weatherdata

  let componentMounted = true;

  const fetchData = async () =>{
    // first get the user location
    navigator.geolocation.getCurrentPosition(function (position){
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);

      console.log(lat);
      console.log(long);
    })
   
    //fetch API
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=32e7a9d44328b80875530d35b7c40b6f`);

    if(componentMounted){
      setData(await response.json());
      console.log(data);
    }
      return () => {
        componentMounted= false;
      }
  }

  useEffect(( ) => {
     fetchData();
  })

  return (
    <>
        {
          (typeof data.main !== 'undefined') ? (<Weather weatherData={data} /> ) : ( <div> ...Loading</div>)
        }
    </>
  );
}

export default App;
