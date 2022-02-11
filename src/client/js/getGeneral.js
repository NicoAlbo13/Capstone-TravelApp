async function getGeneral(info){
    /* API data*/
    const api = 'https://restcountries.com/v2/name/';
    const country = info.country;
    //Make the API call
    const res = await fetch(api+country);
    try{
        const data = await res.json();
        const dataL = data.length - 1;
        const apiResponse = {
            lan: data[dataL].languages[0].name,
            capital: data[dataL].capital,
            money: data[dataL].currencies[0].name,
            region: data[dataL].subregion,
            population: data[dataL].population
        };
        //console.log(apiResponse)
        postData('http://localhost:8081/data', apiResponse)
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

export { postData }
export { getGeneral }