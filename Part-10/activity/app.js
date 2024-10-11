let btn = document.querySelector("button");

btn.addEventListener('click', function (){
    let h1 = document.querySelector('h1');
    let random = randomcolor();
    h1.innerText = random;

    let check = document.querySelector('.check');
    check.style.backgroundColor = random;
})


function randomcolor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}