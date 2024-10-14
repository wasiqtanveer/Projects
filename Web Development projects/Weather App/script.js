let temperature = document.querySelector(".temperature .degree")
let description = document.querySelector(".temperature .description")
let button = document.querySelector(".application button")
let input = document.querySelector(".application input")
let others = document.querySelector(".application .others")
let icon = document.querySelector(".application .icon")






const data = async (city) => {
        const URL = `http://api.openweathermap.org/data/2.5/weather?q=
        ${city}&appid=89c10c7f87c88b4b93e2a98cc14a8a19`;

        //Temperature Degree
        let response = await fetch(URL);
        let api = await response.json();

        try
        {
                let response = await fetch(URL);
                let api = await response.json();

                if (api.cod === 200)
                {

                        let temp = (api.main.temp - 271.15)
                        temperature.innerHTML = `${temp.toFixed(1)}°C`;

                        let detail = api.weather[0].description
                        description.innerHTML = detail

                        others.innerHTML = '';

                        let wind = document.createElement("div")
                        wind.innerText = `Wind : ${api.wind.deg}°`

                        let humidity = document.createElement("div")
                        humidity.innerText = `Humidity : ${api.main.humidity}%`

                        let feelsLike = document.createElement("div")
                        feelsLike.innerText = `Feels LIke : ${(api.main.feels_like - 271.15).toFixed(1)}°C`

                        let pressure = document.createElement("div")
                        pressure.innerText = `Pressure :${api.main.pressure}hPa`




                        let code = api.weather[0].id

                        switch (true) {
                                case (code > 200 && code < 300):
                                        icon.innerHTML = '<img src="http://openweathermap.org/img/wn/11d@2x.png" alt="Thunderstorm" style="width: 250px; height: 250px;">';
                                        break;

                        
                                case (code > 299 && code < 400):
                                        icon.innerHTML = '<img src="http://openweathermap.org/img/wn/09d@2x.png" alt="Thunderstorm" style="width: 250px; height: 250px;">';
                                        break;
                        
                                case (code > 499 && code < 550):
                                        icon.innerHTML = '<img src="http://openweathermap.org/img/wn/10d@2x.png" alt="Thunderstorm" style="width: 250px; height: 250px;">';
                                        break;
                        
                                case (code > 599 && code < 650):
                                        icon.innerHTML = '<img src="http://openweathermap.org/img/wn/13d@2x.png" alt="Thunderstorm" style="width: 250px; height: 250px;">';
                                        break;
                        
                                case (code > 700 && code < 790):
                                        icon.innerHTML = '<img src="http://openweathermap.org/img/wn/50d@2x.png" alt="Thunderstorm" style="width: 250px; height: 250px;">';
                                        break;

                                case (code === 800):
                                        icon.innerHTML = '<img src="http://openweathermap.org/img/wn/01d@2x.png" alt="Thunderstorm" style="width: 250px; height: 250px;">';
                                        break;
                        
                                case (code > 801):
                                        icon.innerHTML = '<img src="http://openweathermap.org/img/wn/02d@2x.png" alt="Thunderstorm" style="width: 250px; height: 250px;">';
                                        break;              
                                default:
                                        return"❓"
                        }
                        



                        others.append(humidity)
                        others.append(feelsLike)
                        others.append(wind)
                        others.append(pressure)

                        others.style.visibility = 'visible'; // Make the div visible
                        others.style.opacity = '1'; // Make it fully opaque
                        temperature.style.display = 'block'
                        icon.style.display = 'block'

                }

                else 
                {
                        description.innerHTML = "City not found ⚠";

                        temperature.style.display = 'none'
                        icon.style.display = 'none'
                        others.style.visibility = 'hidden'; // Keep it hidden but maintain layout
                        others.style.opacity = '0'; // Make it fully transparent

                }
                
        }

        catch(error)
        {
                console.error("Error fetching the weather data:", error);

                temperature.style.display = 'none'
                icon.style.display = 'none'
                others.style.visibility = 'hidden'; // Keep it hidden but maintain layout
                others.style.opacity = '0'; // Make it fully transparent

        }


        

        // console.log(input.value);
        
        

        
}



const error = () =>
{

}
// adding function when clicked on searched 
button.addEventListener("click" , (evt) =>
{
        evt.preventDefault();

        let city = input.value;

        if(city)
        {
                data(city)
        }

        else
        {
                description.innerHTML = "Please enter a city ⚠";
        }
})
