async function getGeo(place){
    /* API data*/
    const api = 'http://api.geonames.org/searchJSON?q=';
    const apiKey = '&maxRows=10&username=nicoalbo';
    //Make the API call
    const res = await fetch(api+place+apiKey);
    try{
        const data = await res.json();
        const apiResponse = {lat: data.geonames[0].lat, lng: data.geonames[0].lng, country: data.geonames[0].countryName, city: data.geonames[0].name};
        //console.log(apiResponse)
        return apiResponse;
    }
    catch(error){
        console.log(error);
    }
}

export { getGeo }
