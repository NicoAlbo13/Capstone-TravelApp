import { refreshUI } from "..";

document.getElementById('submit').addEventListener('click', handleSubmit);

async function handleSubmit(e){
    e.preventDefault();
    //Get geo location of the destination provided by de user
    let place = document.getElementById('destination').value;
    let date = document.getElementById('departDate').value;
    let geoInfo = await Client.getGeo(place, date);
    let weather = await Client.getWeather(geoInfo);
    let image = await Client.getImage(geoInfo);
    let general = await Client.getGeneral(geoInfo);
    if (place === '' || date === ''){
        if (place === '' & date === ''){
            document.getElementById('error').innerHTML = "Insert place and date to continue";
        }else if (date === ''){
            document.getElementById('error').innerHTML = "Insert a date to continue";
        }else{
            document.getElementById('error').innerHTML = "Insert a place to continue";
        }
    }else{
        setTimeout(refreshUI, 100, place)
    }
}

export { handleSubmit }
