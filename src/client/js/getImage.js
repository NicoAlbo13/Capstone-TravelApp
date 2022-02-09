async function getImage(info){
    /* API data*/
    const api = 'https://pixabay.com/api/?key=20611047-ab56df5f8433f58072c7b321e&q=';
    const city = info.city;
    const country = info.country;
    const apiSecond = '&image_type=photo';
    //Make the API call for the city
    const resCity = await fetch(api+city+apiSecond);
    try{
        const dataCity = await resCity.json();
        const apiCity = {
            img: dataCity.hits[0].largeImageURL
        };
        console.log(apiCity)
        //select the existing image
        if (apiCity.img === 'undefined'){
            //Make the API call for the country
            const resCountry = await fetch(api+country+apiSecond);
            try{
                const dataCountry = await resCountry.json();
                const apiCountry = {
                    img: dataCountry.hits[0].largeImageURL
                };
                console.log(apiCountry)
                postData('http://localhost:8081/img', apiCountry)
                return apiCountry
            }
            catch(error){
                console.log(error);
            }
        }else {
            postData('http://localhost:8081/img', apiCity)
            return apiCity
        }
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
export { getImage }
