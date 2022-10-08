// // first option
// let buttons=document.querySelectorAll('.submit');
// buttons.forEach(function(item){
//     item.addEventListener('click', function(){
//         alert('hello');
//     })
// })

// second option
// function onclickButton(){
//     alert('hello');
// }

// buttons.forEach(function(item){
//     item.addEventListener('click', onclickButton);
//     })


// when buttons tag is in one div
// let button=document.querySelector('.button-wraper');
// function onclickButton(){
//     alert('hello');
// }
// button.addEventListener('click',onclickButton);

// focus event
let input=document.getElementById('username');
input.addEventListener("focus", function(){
    input.style.border="2px solid green";
})

// document.getElementById("usernmae").addEventListener("keydown", function(event){
//     if (event.which==13) {
//         alert("You pressed enter")
//     }
//     else{
//         console.log("hello");
//     }
// });
// document.getElementById("username").addEventListener("keydown", function(eventfunction){
//     eventfunction.target;
// })

// practise
let ul=document.querySelector(".ul-class");
let li=document.createElement("li");
li.innerText="javascript";
ul.appendChild(li);


// practise 2
// let inputBlock=document.querySelector(".input-form");
// let addButton=document.querySelectorAll(".btn-add");
// let ulitems=document.querySelector(".ul-items");

// addButton.addEventListener("click", function(){
//     // 1. get input value;
//         let value=inputBlock.value;
//     // 2 input value in li tag;
//         let li=doocument.createElement("li");
//         li.innerText=value;
//         ulitems.appendChild(li);
//     // 3. Clear input
// })

let inputBlock=document.querySelector(".input-form");
let addButton=document.querySelector(".btn-add");
let ulitems=document.querySelector(".ul-items");
let clickButton=document.querySelector('.clearall');
let form=document.getElementById("form-wraper");

form.addEventListener("submit", function(event){
    event.preventDefault();
    let value=inputBlock.value;
    let li=document.createElement("li");
    let deleteButton=document.createElement("button");
    deleteButton.textContent="delete item";
    deleteButton.addEventListener("click", function(){
        li.remove();
    })
    li.textContent=value;
    li.appendChild(deleteButton);
    ulitems.appendChild(li);
    inputBlock.value=" ";
})

clickButton.addEventListener("click", function(){
    ulitems.innerHTML=" ";
})

// burger bar
let navBar=document.getElementById("navigation");
let burgerBar=document.getElementById("burgerBar");
let toogleBar=document.getElementById("toggle-menu");
// burgerBar.addEventListener("click", function(){
//     navBar.classList.toggle('active');
// })
toogleBar.addEventListener("click", function(){
    toogleBar.classList.toggle("toggleActive");``
})