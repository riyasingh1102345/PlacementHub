function toggleSchool() {

    const accordion = document.getElementById("schoolAccordion");
    const content = document.getElementById("schoolContent");
    const arrow = document.getElementById("schoolArrow");

    accordion.classList.toggle("active");

    if (accordion.classList.contains("active")) {

        content.style.maxHeight = content.scrollHeight + "px";
        arrow.innerHTML = "−";

    }

    else {

        content.style.maxHeight = "0px";
        arrow.innerHTML = "+";

    }

}