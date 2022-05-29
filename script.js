pbtn = document.querySelector(".plus");
mbtn = document.querySelector(".minus");
mainNumber = document.querySelector(".main-numb");
targetNumber = document.querySelector(".targetedNumber");
target = document.querySelector(".target-btn");
cirlce = document.querySelector(".show_numbers");
refresh = document.querySelector("#refresh");

mainNumber.innerHTML = 0;
targetNumber.style.display = "none";

let b = 0;
let c, t;

target.addEventListener('click', () => {
    t = prompt("Set Target Value", "")
    if (t == null) {
        alert("Iltimos qayta urinib ko'ring")
        targetNumber.style.display = "none";
        targetNumber.innerHTML = `/${t}`;
    } else if (t != null) {
        targetNumber.style.display = "block";
        targetNumber.innerHTML = `/${t}`;
    }
})

pbtn.addEventListener('click', (e) => {
    e.preventDefault();
    refresh.style.opacity = "1";
    b++;
    mainNumber.innerHTML = b;
    refresh.addEventListener('click', () => {
        mainNumber.innerHTML = '0';

        refresh.style.opacity = "0";
        cirlce.style.border = "none";
        mainNumber.style.color = "white"

    })
    if (t == mainNumber.innerHTML) {
        cirlce.style.border = "2px solid rgb(255, 0, 89)";
        mainNumber.style.color = "rgb(255, 0, 89)"

    }
})
mbtn.addEventListener('click', () => {
    let c = mainNumber.innerHTML;
    if (c > 0) {
        c--;
        mainNumber.innerHTML = c;
        if (t > mainNumber.innerHTML) {
            cirlce.style.border = "none";
            mainNumber.style.color = "white"
        }
    }
    b = c;
})