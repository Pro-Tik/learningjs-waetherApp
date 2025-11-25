const apikey = "4f35dc137998e817002dace8818aa6a4";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox= document.querySelector(".search input");
const searchbtn= document.querySelector(".search button");
const feelslike = document.querySelector("#feels");
const img = document.querySelector(".weather-icon");
async function checkWthr(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
  
    document.querySelector(".city-name").innerText= data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerText= data.main.humidity+ "%";
    document.querySelector(".Wind").innerText = data.wind.speed +"km/h";
    feelslike.innerText = "Feels Like "+ data.main.feels_like;

      if (response.status == 404) {
        // Handle error, maybe display a message
         document.querySelector("#error").innerText="City Not Found";
    }
    else{
        
        // Handle error, maybe display a message
         document.querySelector("#error").innerText="";
    }
    
    if(data.weather[0].main== "Clouds"){
        img.src= "images/clouds.png";
    }
    else if(data.weather[0].main== "Mist"){
        img.src= "images/mist.png";
    }
    else if(data.weather[0].main== "Clear"){
        img.src= "images/clear.png";
    }
    else if(data.weather[0].main== "Rain"){
        img.src= "images/rain.png";
    }
    else if(data.weather[0].main== "Drizzle"){
        img.src= "images/drizzle.png";
    }
    else if(data.weather[0].main== "Snow"){
        img.src= "images/snow.png";
    }

}
searchbox.value= "Dhaka";
checkWthr("Dhaka")
searchbtn.addEventListener("click",()=>{

    checkWthr(searchbox.value);
})
searchbox.addEventListener('keydown',(event)=>{
     if (event.key === 'Enter'){
       checkWthr(searchbox.value); 
     }
    
})
