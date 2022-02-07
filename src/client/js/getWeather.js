async function getWeather(info){
    /* API data*/
    const api = 'https://api.weatherbit.io/v2.0/forecast/daily';
    const days = info.days;
    const apiKey = 'ff2040f217474950882fc1a9bc2991c4';
    //Make the API call
    const res = await fetch(`${api}?lat=${info.lat}&lon=${info.lon}&city=${info.city}&country=${info.country}&days=${days}&key=${apiKey}`);
    try{
        const data = await res.json();
        const weather = data.data;
        //Select the needed data
        const apiResponse = {
            temp: weather[weather.length-1].temp,
            minTemp: weather[weather.length-1].min_temp,
            maxTemp: weather[weather.length-1].max_temp,
            icon: weather[weather.length-1].weather.icon,
            description: weather[weather.length-1].weather.description
        };
        postData('http://localhost:8081/add', apiResponse);
        return apiResponse;
    }
    catch(error){
        console.log(error);
    }
}

/* Function to POST data */
const postData = async(url, data)=>{
    //console.log(data);
    console.log(JSON.stringify(data));
    const res = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    });
    try{
        const newData = await res.json();
        console.log(newData)
        return newData
    } catch(error){
        console.log(error);
    }
}


export { getWeather }
