const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '888b101381msha49f6b9c3f46c1ap12d1d8jsn8b191c31a8fc',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {



            console.log(response)

            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })
        .catch(err => console.error(err));

}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Kolkata")


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
    .then(response => response.json())
    .then(response => {



        console.log(response)

        kol_cloud_pct.innerHTML = response.cloud_pct
        kol_temp.innerHTML = response.temp
        kol_feels_like.innerHTML = response.feels_like
        kol_humidity.innerHTML = response.humidity
        kol_min_temp.innerHTML = response.min_temp
        kol_max_temp.innerHTML = response.max_temp
        kol_wind_speed.innerHTML = response.wind_speed
        kol_sunrise.innerHTML = response.sunrise
        kol_sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
    .then(response => response.json())
    .then(response => {



        console.log(response)

        del_cloud_pct.innerHTML = response.cloud_pct
        del_temp.innerHTML = response.temp
        del_feels_like.innerHTML = response.feels_like
        del_humidity.innerHTML = response.humidity
        del_min_temp.innerHTML = response.min_temp
        del_max_temp.innerHTML = response.max_temp
        del_wind_speed.innerHTML = response.wind_speed
        del_sunrise.innerHTML = response.sunrise
        del_sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Meghalaya', options)
    .then(response => response.json())
    .then(response => {



        console.log(response)

        meg_cloud_pct.innerHTML = response.cloud_pct
        meg_temp.innerHTML = response.temp
        meg_feels_like.innerHTML = response.feels_like
        meg_humidity.innerHTML = response.humidity
        meg_min_temp.innerHTML = response.min_temp
        meg_max_temp.innerHTML = response.max_temp
        meg_wind_speed.innerHTML = response.wind_speed
        meg_sunrise.innerHTML = response.sunrise
        meg_sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options)
    .then(response => response.json())
    .then(response => {



        console.log(response)

        chen_cloud_pct.innerHTML = response.cloud_pct
        chen_temp.innerHTML = response.temp
        chen_feels_like.innerHTML = response.feels_like
        chen_humidity.innerHTML = response.humidity
        chen_min_temp.innerHTML = response.min_temp
        chen_max_temp.innerHTML = response.max_temp
        chen_wind_speed.innerHTML = response.wind_speed
        chen_sunrise.innerHTML = response.sunrise
        chen_sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
    .then(response => response.json())
    .then(response => {



        console.log(response)

        luck_cloud_pct.innerHTML = response.cloud_pct
        luck_temp.innerHTML = response.temp
        luck_feels_like.innerHTML = response.feels_like
        luck_humidity.innerHTML = response.humidity
        luck_min_temp.innerHTML = response.min_temp
        luck_max_temp.innerHTML = response.max_temp
        luck_wind_speed.innerHTML = response.wind_speed
        luck_sunrise.innerHTML = response.sunrise
        luck_sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mizoram', options)
    .then(response => response.json())
    .then(response => {



        console.log(response)

        mizo_cloud_pct.innerHTML = response.cloud_pct
        mizo_temp.innerHTML = response.temp
        mizo_feels_like.innerHTML = response.feels_like
        mizo_humidity.innerHTML = response.humidity
        mizo_min_temp.innerHTML = response.min_temp
        mizo_max_temp.innerHTML = response.max_temp
        mizo_wind_speed.innerHTML = response.wind_speed
        mizo_sunrise.innerHTML = response.sunrise
        mizo_sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
