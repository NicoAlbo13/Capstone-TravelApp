const refreshUI = async (city) => {
    const Ccity =  city.charAt(0).toUpperCase() + city.slice(1);
    const request = await fetch('http://localhost:8081/all');
    try{
        const allData = await request.json();
        const iconUrl = `https://www.weatherbit.io/static/img/icons/${allData[0].icon}.png`;
        const population = allData[1].population.toLocaleString("en-US");
        document.getElementById('img').setAttribute("src", allData[2].img);
        document.getElementById('Trip').innerHTML = `Trip to: ${Ccity}`;
        document.getElementById('temp').innerHTML = `<b class='bold'>Temperature:</b> ${allData[0].temp}&deg;C`;
        document.getElementById('range').innerHTML = `<b class='bold'>MIN:</b> ${allData[0].minTemp}&deg;C <b class='bold'>MAX:</b> ${allData[0].maxTemp}&deg;C`;
        document.getElementById('iconImg').setAttribute("src", iconUrl);
        document.getElementById('description').innerHTML = `We forcast <b class='bold'>${allData[0].description}</b>`;
        document.getElementById('days-away').innerHTML = `You are <b class='bold'><i>${allData[0].days} days away</i></b> from your trip.`;
        document.getElementById('general').innerHTML = `The city of ${Ccity} you are visiting is located in <b class='bold'>${allData[1].region}</b>.
                                                        ${Ccity} is located in the <b class='bold'>${allData[1].name}</b> and its capital is <b class='bold'>${allData[1].capital}</b>.
                                                        The total population of the country is <b class='bold'>${population}</b>. They
                                                        speak <b class='bold'>${allData[1].lan}</b> and the money they use is the <b class='bold'>${allData[1].money}</b>.`;
    }catch(error){
        console.log(error);
    }
}

export { refreshUI }
