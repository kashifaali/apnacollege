let inp = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.querySelector('ul');


btn.addEventListener('click', function(){
    let items = document.createElement('li');
    items.innerText = inp.value;
    ul.appendChild(items);
    inp.value = "";

    let delbtn = document.createElement('button');
    delbtn.innerText = "Delete";
    delbtn.classList.add('delete');
    items.appendChild(delbtn);
    delbtn.style.margin = "10px";


    delbtn.addEventListener('click', function(){
        items.remove();
    })
})









