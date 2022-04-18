const openWeather = document.querySelector('.container-title');
const content = document.querySelector(' #weather-container');
const closeApp = document.querySelector('.tempMin');

// openWeather.addEventListener('click', ()=>{
//     content.style.display="block";
// })
// closeApp.addEventListener('click', ()=>{
//     content.style.display="";
// })
Display('.container-title','#weather-container','block')
Display('.tempMin', '#weather-container','')
function Display(el, content,style){
    el = document.querySelector(el)
    content = document.querySelector(content);
    el.addEventListener('click', (e)=>{
        content.style.display=style;
    })
}
