const endDate ="18 February 2023 00:01 AM"

document.getElementById("endDate").innerText = endDate
const inputs = document.querySelectorAll("input")

// const clock = () => {

// }

function clock(){
    const end = new Date(endDate);
    const now = new Date()
    const diff = (end-now) / 1000;

   if (diff < 0)return;


    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
    

    // convert into days 

}

// initial call 
clock()

// 1 day = 24 hour
// 1 hour = 60 min
// 60min = 3600 sec

setInterval(
    () => {
        clock()
    },
    1000
)