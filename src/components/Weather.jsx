import React from "react";

function Weather({weatherData}) {

    const refresh = () =>{
        window.location.reload();
    }

    //  it is shown in kelvin convert into celcius

    let temp = (weatherData.main.temp - 273.15).toFixed(2);

    let mintemp = (weatherData.main.temp_min - 273.15).toFixed(2);
    let maxtemp = (weatherData.main.temp_max - 273.15).toFixed(2);

    // now we need date dynamicaly 

    var dt = new Date();
    // console.log(dt)
    
    var date = dt.getDate();
    var year = dt.getFullYear();
    var month = dt.toLocaleString('default', {month: 'long'});
    // console.log(month)
    var day = dt.toLocaleString('default',{ weekday: 'long'});

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div class="card text-white bg-primary mb-3 shadow-lg text-center">
              <div class="card-header">WeatherMan
               <i className="fa fa-refresh float-end pt-1" onClick={refresh}> </i>
              </div>
              <div class="card-body py-5">
                <h2 class="card-title mb-0"> {weatherData.name}</h2>
                <p class="card-text lead mb-5">
                   
                   {day}, {month} {date}, {year}
                   <hr/>
                </p>
   
                <h2 className="display-5 fw-bold mb-5">  {temp} &deg;c        <hr/> </h2> 
                <p className="lead fw-bold mb-0">{weatherData.weather[0].main}    </p>

                
                <p className="fw-bold mb-5"> {mintemp}&deg;c | {maxtemp}&deg;c </p>
                <p className="lead"> Humidity:{weatherData.main.humidity}% </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weather;
