// const optionalBtn=document.querySelector(".optional-btn");
// const optionalFields=document.querySelector(".optional-fields");

// optionalBtn.addEventListener("click",()=>{

//     optionalFields.classList.toggle("show");

//     if(optionalFields.classList.contains("show")){
//         optionalBtn.textContent="− Hide Professional Profiles";
//     }
//     else{
//         optionalBtn.textContent="+ Add Professional Profiles";
//     }

// });

// to save details

function saveBasicDetails(){

    const resumeData = getResumeData();

    resumeData.basic = {

        fullName: document.getElementById("fullName").value.trim(),

        email: document.getElementById("email").value.trim(),

        phone: document.getElementById("phone").value.trim(),

        location: document.getElementById("location").value.trim(),

        linkedin: document.getElementById("linkedin").value.trim(),

        github: document.getElementById("github").value.trim(),

        portfolio: document.getElementById("portfolio").value.trim()

    };

    saveResumeData(resumeData);

}

// to save draft

const saveDraftBtn = document.getElementById("saveDraftBtn");

saveDraftBtn.addEventListener("click", () => {

    saveBasicDetails();

    alert("Draft Saved Successfully!");

});

// to save info after continue

const continueBtn = document.getElementById("continueBtn");

continueBtn.addEventListener("click", () => {

    saveBasicDetails();

    window.location.href = "./education.html";

});