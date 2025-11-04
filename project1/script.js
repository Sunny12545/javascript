const buttons = document.querySelectorAll('.buttons');
const body = document.querySelector('body');

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === "one"){
            body.style.backgroundColor = "green";
        }
        if(e.target.id === "two"){
            body.style.backgroundColor = "blue";
        }
        if(e.target.id === "three"){
            body.style.backgroundColor = "red";
        }
        if(e.target.id === "four"){
            body.style.backgroundColor = "yellow";
        }
        
    })

});