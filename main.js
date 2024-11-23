document.querySelector("#temp").addEventListener("click",run)

function run(){

let day = document.querySelector("#forcast").value.toLowerCase();

switch(day){
    case "sunny":
    document.querySelector("#pattern").innerText = `Put on light cloths for the day is ${day}!`
    break;

    case "raining":
    document.querySelector("#pattern").innerText = `Perhaps you should consider planting something for it's ${day}!`
    break;

    case "cold":
    document.querySelector("#pattern").innerText = `Ouch! its too ${day} please wear jackets or something warm!`
    break;

    case "foggy":
    document.querySelector("#pattern").innerText = `Be careful as you drive for today's weather is too ${day}!`
    break;

    case "warm":
    document.querySelector("#pattern").innerText = `It is ${day} today. Let us go out for picnic!`
    break;

    default:
    document.querySelector("#pattern").innerText = `Your entry is wrong, please enter something like: raining,cold,foggy, sunny etc.`
}
}



   