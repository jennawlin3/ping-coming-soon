const d = document;
const emailInput = d.querySelector("#email");
const submit = d.querySelector("#submit");
const errorMsg = d.querySelector(".error");
const pattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


emailInput.addEventListener("input", e => {
    console.log(emailInput);
    console.log(emailInput.value)

    if(emailInput.value.length === 0) {
        errorMsg.style.display = "block";
        emailInput.style.borderColor = "var(--light-red)";
    }  
    if(emailInput.value.length > 0) {
        errorMsg.style.display = "none";
        emailInput.style.borderColor = "var(--pale-blue)";
        emailInput.classList.add = "invalid"
    }
})

submit.addEventListener("click", e => {
    if(!pattern.test(emailInput.value)) {
        errorMsg.style.display = "block";
        emailInput.style.borderColor = "var(--light-red)";
    }
})



