const selectInput = document.getElementById("select-input")
const textBox = document.getElementById("text-box")
const btn = document.querySelector(".button")
let showText = document.querySelector(".showText")
const myName = document.querySelector("#name")
const email = document.querySelector("#email")

const svg = document.querySelector(".close")
const all = document.querySelector(".container")



function show() {
    


    showText.textContent = `I am ${myName.value}. Please contact me via ${email.value}. I take this submit form cause ${selectInput.value}.`


    

    
    
}


svg.addEventListener("click",()=>{
    all.remove();
    
    
   
    
})
    


