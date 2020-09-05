let previous = document.querySelector(".previous");
let next = document.querySelector(".next");
let image = document.querySelector(".img");
let h1 = document.querySelector("h1");
let span = document.querySelector(".span");
let path = ["./images/item1.jpg", "./images/item2.jpg", "./images/item3.jpg"];
// let x = 0;
// image.style.cssText = "background: url(" + path[0] + ")";

// function interval(x) {
//     if (x < 3)
//         image.style.cssText = "background: url(" + path[x] + "); background-size: cover";

//     else {
//         h1.innerHTML = 0;
//         image.style.cssText = "background: url(" + path[0] + "); background-size: cover";
//     }
// }
function intervals(y) {
    switch (y) {
        case 1:
            image.style.cssText = "background: url(" + path[1] + "); background-size: cover";
            break;
        case 2:
            image.style.cssText = "background: url(" + path[2] + "); background-size: cover";
            break;
        default:
            image.style.cssText = "background: url(" + path[0] + "); background-size: cover";
    }
}
next.addEventListener("click", () => {
    let x = parseInt(h1.innerHTML) + 1;
    if (x - 1 > -1 && x - 1 < 2) {
        h1.innerHTML = x;
        intervals(x);
    } else {
        h1.innerHTML = 0;
        intervals(0);

    }
})
previous.addEventListener("click", () => {
    let x = parseInt(h1.innerHTML) - 1;
    if (x + 1 == 0) {
        h1.innerHTML = 2;
        intervals(2);
    } else {
        h1.innerHTML = x;
        intervals(x);

    }
})