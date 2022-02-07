document.getElementById('submit').addEventListener('click', handleSubmit);

async function handleSubmit(e){
    e.preventDefault();
    //Get geo location of the destination provided by de user
    let place = document.getElementById('destination').value;
    let date = document.getElementById('departDate').value;
    let geoInfo = await Client.getGeo(place, date);
    let weather = await Client.getWeather(geoInfo);
}

export { handleSubmit }
