async function getWeather(info){
    /* API data*/
    const api = 'https://api.weatherbit.io/v2.0/forecast/daily';
    const days = 16;
    const apiKey = 'ff2040f217474950882fc1a9bc2991c4';
    //Make the API call
    const res = await fetch(`${api}?lat=${info.lat}&lon=${info.lon}&city=${info.city}&country=${info.country}&days=${days}&key=${apiKey}`);
    try{
        const data = await res.json();
        //Select the needed data
        const apiResponse = {
            temp: data.data[days-1].temp,
            minTemp: data.data[days-1].min_temp,
            maxTemp: data.data[days-1].max_temp,
            icon: data.data[days-1].weather.icon,
            description: data.data[days-1].weather.description
        };
        console.log(apiResponse)
        return apiResponse;
    }
    catch(error){
        console.log(error);
    }
}

export { getWeather }
