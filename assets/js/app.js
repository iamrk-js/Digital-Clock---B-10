const cl = console.log;

//  javascript  uses Constructor function for creating object/instance

const setZero = num =>  (num < 10) ? "0" + num : num;

const createClock = () => {
    const digitalClock = document.getElementById("digitalClock");
    let d = new Date()
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let session = "AM";
    session = (hr >= 12) ? "PM" : "AM";
    if (hr > 12) { //  1 = 13 - 12  
        hr = hr - 12
    }
    let result = `${setZero(hr)} : ${setZero(min)} : ${setZero(sec)} ${session}`
    digitalClock.innerHTML = result;
    setTimeout(createClock, 1000);
}

createClock();
// gitbash