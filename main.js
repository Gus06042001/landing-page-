function addRedBorder(id){
    element=document.querySelector("#" + id);
    element.style.border = "5px solid red";
}

function highlightCard(selector)
{
    var element = document.querySelector(selector);
    element.classList.toggle("card-highlight");

}

function addKeyboardEventListeners()
{
    document.addEventListener('keydown', (event)=>{
        var ingresso1 = document.getElementById("quinta");
        var ingresso2 = document.getElementById("sexta");
        var ingresso3 = document.getElementById("sabado");
        var ingresso4 = document.getElementById("domingo");     
        
        var code = event.code;
        if(code == 'Digit1'){
            ingresso1.classList.toggle("card-ingresso:hover");
            ingresso2.classList.remove("card-ingresso:hover");
            ingresso3.classList.remove("card-ingresso:hover");
            ingresso4.classList.remove("card-ingresso:hover");
        }
        if(code == 'Digit2'){
            ingresso1.classList.remove("card-ingresso:hover");
            ingresso2.classList.toggle("card-ingresso:hover");
            ingresso3.classList.remove("card-ingresso:hover");
            ingresso4.classList.remove("card-ingresso:hover");
        }
        if(code == 'Digit3'){
            ingresso1.classList.remove("card-ingresso:hover");
            ingresso2.classList.remove("card-ingresso:hover");
            ingresso3.classList.toggle("card-ingresso:hover");
            ingresso4.classList.remove("card-ingresso:hover");
        }
        if(code == 'Digit4'){
            ingresso1.classList.remove("card-ingresso:hover");
            ingresso2.classList.remove("card-ingresso:hover");
            ingresso3.classList.remove("card-ingresso:hover");
            ingresso4.classList.toggle("card-ingresso:hover");
        }
    },false);
}
addKeyboardEventListeners();