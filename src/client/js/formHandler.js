import { refreshUI } from "./refreshUI";

document.getElementById('submit').addEventListener('click', handleSubmit);

async function handleSubmit(e){
    e.preventDefault();
    //Get geo location of the destination provided by de user
    let place = document.getElementById('destination').value;
    let date = document.getElementById('departDate').value;
    let error = document.getElementById('error');
    let results = document.getElementById('result-container');
    let geoInfo = await Client.getGeo(place, date);
    let weather = await Client.getWeather(geoInfo);
    let image = await Client.getImage(geoInfo);
    let general = await Client.getGeneral(geoInfo);
    if (place === '' || date === ''){
        error.classList.remove('hide');
        results.classList.add('hide');
        if (place === '' & date === ''){
            document.getElementById('error').innerHTML = "&#9888; Enter place and date to continue";
        }else if (date === ''){
            document.getElementById('error').innerHTML = "&#9888; Enter a date to continue";
        }else{
            document.getElementById('error').innerHTML = "&#9888; Enter a place to continue";
        }
    }else{
        const travelDate = new Date(date);
        const actualDate = new Date();
        if(travelDate<actualDate){
            document.getElementById('error').innerHTML = "&#9888; Enter a valid date ";
        }else{
            error.classList.add('hide');
            results.classList.remove('hide');
            setTimeout(refreshUI, 100, place);
            document.getElementById('destination').value = '';
            document.getElementById('departDate').value = '';
        }
    }
}

export { handleSubmit }
