var sandwiches = `{ "sandwich": "hamburger", "calories": "260" }`;
var fries = `{ "fries_size": "Large French Fries", "calories": "570" }`;
console.log(`My favorite sandwich is a ${JSON.parse(sandwiches).sandwich} which has approximately ${JSON.parse(sandwiches).calories} calories, along with it I enjoy eating ${JSON.parse(fries).fries_size} which have about ${JSON.parse(fries).calories} calories.`);
document.getElementById("result2").innerHTML = `My favorite sandwich is a ${JSON.parse(sandwiches).sandwich} which has approximately ${JSON.parse(sandwiches).calories} calories, along with it I enjoy eating ${JSON.parse(fries).fries_size} which have about ${JSON.parse(fries).calories} calories.`


