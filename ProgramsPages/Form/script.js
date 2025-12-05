const emailInput = document.getElementById("email");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

emailInput.addEventListener("input" , ()=>{
    emailRegex.test(emailInput.value)?
        emailInput.style.border = "1px solid var(--primary)"
    :
        emailInput.style.border = "1px solid var(--accent)"
})

emailInput.addEventListener('blur' , () =>{
    emailInput.style.border = "1px solid var(--dark_tones_1)"

})