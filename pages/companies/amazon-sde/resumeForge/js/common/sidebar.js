//step number

const currentStep = Number(document.body.dataset.step);

const steps = document.querySelectorAll(".steps-list li");

steps.forEach(step => {

    const stepNumber = Number(step.dataset.step);

    if(stepNumber < currentStep){

        step.classList.add("completed");

        step.querySelector(".step-number").innerHTML="✓";

    }

    else if(stepNumber === currentStep){

        step.classList.add("active");

    }

});