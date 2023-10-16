async function getweather(city)
{
	const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'a2ebfd3a07msh7c25e65da9f1768p1efe50jsn481e07da69cf',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};
	try 
	{
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result);
		let cityName = document.getElementById("cityName")
		let cloud_pct = document.getElementById("cloud_pct")
		let cloud_pct2 = document.getElementById("cloud_pct2")
		let temp = document.getElementById("temp")
		let temp2 = document.getElementById("temp2")
		let feels_like = document.getElementById("feels_like")
		let humidity = document.getElementById("humidity")
		let min_temp = document.getElementById("min_temp")
		let max_temp = document.getElementById("max_temp")
		let wind_speed = document.getElementById("wind_speed")
		let wind_speed2 = document.getElementById("wind_speed2")
		let wind_degrees = document.getElementById("wind_degrees")
		let sunrise = document.getElementById("sunrise")
		let sunset = document.getElementById("sunset")

		cityName.innerHTML = city	
		cloud_pct.innerHTML = result.cloud_pct
		cloud_pct2.innerHTML = result.cloud_pct
		temp.innerHTML = result.temp
		temp2.innerHTML = result.temp
		feels_like.innerHTML = result.feels_like
		humidity.innerHTML = result.humidity
		min_temp.innerHTML = result.min_temp
		max_temp.innerHTML = result.max_temp
		wind_speed.innerHTML = result.wind_speed
		wind_speed2.innerHTML = result.wind_speed
		wind_degrees.innerHTML = result.wind_degrees
		sunrise.innerHTML = result.sunrise
		sunset.innerHTML = result.sunset

		console.log(result.cloud_pct);
	}
	catch (error) 
	{
		console.error(error);
	}

}

async function getw(tr)
{
	th=tr.getElementsByTagName("th");
	city=th[0].textContent;
	//console.log(city);
	let url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
	let options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'a2ebfd3a07msh7c25e65da9f1768p1efe50jsn481e07da69cf',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};
	try 
	{
		//console.log(city);
		let response = await fetch(url, options);
		let result = await response.json();
		//console.log(city);
		//console.log(result);
		let td = tr.getElementsByTagName("td");
		td[0].innerHTML = result.cloud_pct
		td[1].innerHTML = result.temp
		td[2].innerHTML = result.feels_like
		td[3].innerHTML = result.humidity
		td[4].innerHTML = result.min_temp
		td[5].innerHTML = result.max_temp
		td[6].innerHTML = result.wind_speed
		td[7].innerHTML = result.wind_degrees
		td[8].innerHTML = result.sunrise
		td[9].innerHTML = result.sunset
	}
	catch (error) 
	{
		console.error(error);
		console.log(city);
	}
	//console.log(city);

}

getweather("Delhi");

var tr = body.getElementsByTagName("tr");
for (var i = 0; i < tr.length; i++) 
{
	getw(tr[i]);
}

submit.addEventListener("click", (e) => {
	e.preventDefault();
	getweather(city.value);
})


