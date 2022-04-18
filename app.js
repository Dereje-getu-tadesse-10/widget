const openWeather = document.querySelector('.container-title');
const content = document.querySelector(' #weather-container');
const closeApp = document.querySelector('.tempMin');
const form = document.querySelector('form');
const input = document.querySelector('#searchCity');
const city = document.querySelector('.city');
const currentTime = document.querySelector('.currentTime');
const logo = document.querySelector('#logoTemp');
let src = logo.getAttribute('src')
const description = document.querySelector('.desc');
const tempMin = document.querySelector('.tempMin');
const tempMax = document.querySelector('.tempMax');


toggleModale('.container-title','#weather-container','block')
toggleModale('.fa-square-xmark', '#weather-container','')
function toggleModale(el, content,style){
    el = document.querySelector(el)
    content = document.querySelector(content);
    el.addEventListener('click', (e)=>{
        content.style.display=style;
    })
}
   

form.addEventListener('click', (e)=>{
    e.preventDefault();
    let inp = input.value;
    callApi(inp);
})
callApi('Paris');
function callApi(val) {
    const apiKey = '6bb83d7cf2b4aee765f7bd3f53260c22';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=${apiKey}&units=metric&lang=fr`
    fetch(url)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        city.textContent = data.name;
        currentTime.textContent = data.main.temp;
        let src = logo.getAttribute('src')
        let img = data.weather[0].icon;
        src = `http://openweathermap.org/img/wn/${img}.png`;
        logo.setAttribute('src', src);
        description.textContent = data.weather[0].description;
        tempMin.textContent = 'Temp min ' + data.main.temp_min;
        tempMax.textContent = 'Temp min ' + data.main.temp_max;
    })
}