const refreshUI = async (city) => {
    const Ccity =  city.charAt(0).toUpperCase() + city.slice(1);
    const request = await fetch('http://localhost:8081/all');
    try{
        const allData = await request.json();
        document.getElementById('img').setAttribute("src", allData[2].img);
        document.getElementById('temp').innerHTML = `Temperature: ${allData[0].temp}`;
        document.getElementById('min').innerHTML = `Lowest: ${allData[0].minTemp}`;
        document.getElementById('max').innerHTML = `Maximun: ${allData[0].maxTemp}`;
        document.getElementById('description').innerHTML = `${allData[0].description}`;
        document.getElementById('days-away').innerHTML = `You are ${allData[0].days} days away from your trip.`;
        document.getElementById('general').innerHTML = `The city of ${Ccity} you are visiting is located in ${allData[1].region}.
                                                        ${Ccity} is located in the ${allData[1].name} and its capital is ${allData[1].capital}.
                                                        The total population of the country is ${allData[1].population}. The language they
                                                        speak is ${allData[1].lan}. The money they use is the ${allData[1].money}.`;
    }catch(error){
        console.log(error);
    }
}

export { refreshUI }
