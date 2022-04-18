const openWeather = document.querySelector('.container-title');
const content = document.querySelector(' #weather-container');
const closeApp = document.querySelector('.tempMin');
const form = document.querySelector('form');
const input = document.queryCommandValue('input');

toggleModale('.container-title','#weather-container','block')
toggleModale('.fa-square-xmark', '#weather-container','')
function toggleModale(el, content,style){
    el = document.querySelector(el)
    content = document.querySelector(content);
    el.addEventListener('click', (e)=>{
        content.style.display=style;
    })
}
const apiKey = '6bb83d7cf2b4aee765f7bd3f53260c22';

form.addEventListener('click', (e)=>{
    e.preventDefault();
    let inp = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inp},${inp}&appid=${apiKey}`;
    fetcj

})
