//window.alert("Hello");
// 196c23352824f676b941f86d91fc3cf7
// https://api.openweathermap.org/data/2.5/weather?q=lucknow&appid=196c23352824f676b941f86d91fc3cf7




async function weather()
{
    // window.alert();
    let city_name = document.getElementById('search').value;
    let temp = document.getElementById('temp');
    let city = document.getElementById('city');
    let humid = document.getElementById('humid');
    let wind = document.getElementById('wind');

   let apikey='196c23352824f676b941f86d91fc3cf7';
   let url =`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apikey}&units=metric`;


    if(city_name=="")
    {
        window.alert("Please enter the city name");
        return;
    }
    try
    {
        let res = await fetch(url);
    let data = await res.json();
    console.log(data);

    city.innerHTML = data.name;
    temp.innerHTML = data.main.temp + "℃";
    humid.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + "m/s";
    }
    catch
    {
        window.alert("City not found");
    }
}
