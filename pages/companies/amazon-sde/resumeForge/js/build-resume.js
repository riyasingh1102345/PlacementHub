const optionalBtn=document.querySelector(".optional-btn");
const optionalFields=document.querySelector(".optional-fields");

optionalBtn.addEventListener("click",()=>{

    optionalFields.classList.toggle("show");

    if(optionalFields.classList.contains("show")){
        optionalBtn.textContent="− Hide Professional Profiles";
    }
    else{
        optionalBtn.textContent="+ Add Professional Profiles";
    }

});