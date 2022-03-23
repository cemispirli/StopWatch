const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const milliseconds = document.getElementById('milliseconds');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');

// console.log(timer_miliseconds);
let timer_miliseconds = Number(milliseconds.innerText);
let timer_seconds = Number(seconds.innerText);
let timer_minutes = Number(minutes.innerText);

let split_sec;

start.addEventListener('click', (e) => {
    split_sec = setInterval(() => {
     
        if (timer_miliseconds < 100) {
            // console.log(timer_miliseconds);
            if (timer_miliseconds < 10) {
                milliseconds.innerText = "0" + timer_miliseconds;
            } else {
                milliseconds.innerText = timer_miliseconds;
            }
            timer_miliseconds++
        } else {
            timer_miliseconds = 00;
            timer_seconds++;
            // console.log(timer_miliseconds); 
            if (timer_seconds < 60) {
                // console.log(seconds.innerText);
                if (timer_seconds < 10) {
                    seconds.innerText = "0" + timer_seconds;
                    console.log(seconds.innerText);
                }
                else {
                    seconds.innerText = timer_seconds;
                    console.log(seconds.innerText);
                }
                // timer_seconds++;
            } else {
                timer_minutes++;
                timer_seconds = 0;
                seconds.innerText = "0" + timer_seconds
                console.log(seconds.innerText);
                
                // console.log(seconds.innerText);

                if (timer_minutes < 60) {
                    // console.log(minutes.innerText);
                    if (timer_minutes < 10) {
                        minutes.innerText = "0" + timer_minutes;
                        // console.log(minutes.innerText);
                    } else {
                        minutes.innerText = timer_minutes;
                    }
                } else {
                    timer_minutes = 00;
                    timer_seconds = 00;
                    timer_miliseconds = 00;
                }
            }
        }
    }, (1000 / 100));
    start.style.display = "none";
});

// console.log(timer_miliseconds);
pause.addEventListener('click', () => {
    clearInterval(split_sec);
    start.style.display = "block";
});

reset.addEventListener('click', () => {
    clearInterval(split_sec);
    start.style.display = "block";

    timer_seconds = "00";
    timer_minutes = "00";
    timer_miliseconds = "00";
    milliseconds.innerText = timer_miliseconds;
    seconds.innerText = timer_seconds;
    minutes.innerText = timer_minutes;
});