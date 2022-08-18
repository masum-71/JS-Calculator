


const buttons = document.querySelectorAll("button");
const d1 = document.getElementById('d-1');
const d2 = document.getElementById('d-2');



for(let button of buttons){
   button.addEventListener('click', () => {
    if(button.innerText === "AC"){
        d1.innerText = "";
        d2.innerText = "";
    }else if(button.innerText === "DEL"){
        d1.innerText = d1.innerText.slice(0, -1)
    }else if(button.innerText === "="){
        d2.innerText = eval(d1.innerText);
        d1.innerText = "";
    }
    else(
        d1.innerText += button.innerText
    )
   })
}
