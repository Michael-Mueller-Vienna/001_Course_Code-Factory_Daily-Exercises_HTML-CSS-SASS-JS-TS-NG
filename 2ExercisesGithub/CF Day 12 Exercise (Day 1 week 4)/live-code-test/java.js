let array = [1, 7, -3, 9];

let max = array[0];

for (let val of array) {
    if (max < val) {
    max = val;
    }
}

console.log(max)


// exercise 2

function getWeather() {
    let temp = Math.floor(Math.random() * 45 - 5);
    console.log(temp);
    let paragraph = document.getElementById("text")
    let forecast = document.getElementById("forecast")
    console.log(text)
    if (temp <= 10) {
      console.log("The weather is cold.");
      paragraph.innerHTML="The weather is cold";
      forecast.src="https://cdn.pixabay.com/photo/2018/08/27/09/52/gel-3634582_1280.jpg"
    } else if(temp >10 && temp <=20){
        console.log("The weather is moderate.");
        paragraph.innerHTML="The weather moderate";
        forecast.src="https://cdn.pixabay.com/photo/2017/01/11/14/56/ireland-1971997_1280.jpg"
    } else if(temp >20 && temp <=30){
        console.log("The weather is warm.");
        paragraph.innerHTML="The weather is warm";
        forecast.src="https://cdn.pixabay.com/photo/2018/05/02/18/23/landscape-3369304_1280.jpg"
    } else {
        console.log("The weather is hot.");
        paragraph.innerHTML="The weather is hot";
        forecast.src="https://cdn.pixabay.com/photo/2018/02/05/23/05/death-valley-3133502_1280.jpg"
    }
  }
  
  getWeather();

