const completedQuestions =
    JSON.parse(localStorage.getItem("completedQuestions")) || [];
    
    console.log(binarySearchQuestions);

// Easy
const beginner = binarySearchQuestions.filter(function(question){
    return question.difficulty === "Easy";
});

// Medium
const intermediate = binarySearchQuestions.filter(function(question){
    return question.difficulty === "Medium";
});

// Hard
const advanced = binarySearchQuestions.filter(function(question){
    return question.difficulty === "Hard";
});

// Function
function renderQuestions(questions, containerId){

    const container = document.getElementById(containerId);

    questions.forEach(function(question){

        const isCompleted = completedQuestions.includes(question.id);

        container.innerHTML += `
            <div class="question-card ${isCompleted ? "completed" : ""}">

                <h3>${question.title}</h3>

                <span class="difficulty ${question.difficulty.toLowerCase()}">
                    ${question.difficulty}
                </span>
${
    isCompleted
    ? `
        <p class="completed-text">✅ Completed</p>
        <a href="../problems.html?module=binarySearch&id=${question.id}" class="solve-again">
            Solve Again →
        </a>
      `
    : `
        <a href="../problems.html?module=binarySearch&id=${question.id}">
            Solve →
        </a>
      `
}

            </div>
        `;

    });

}

//Render

    function renderAllQuestions() {

    document.getElementById("beginner-list").innerHTML = "";
    document.getElementById("intermediate-list").innerHTML = "";
    document.getElementById("advanced-list").innerHTML = "";

    renderQuestions(beginner, "beginner-list");
    renderQuestions(intermediate, "intermediate-list");
    renderQuestions(advanced, "advanced-list");

    document.querySelector(".easy-heading").style.display = "block";
    document.querySelector(".medium-heading").style.display = "block";
    document.querySelector(".hard-heading").style.display = "block";
}

renderAllQuestions();

//Search 

const searchInput = document.getElementById("search-input");

console.log(searchInput);

searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase();

    const beginnerFiltered = beginner.filter(function(question){
        return question.title.toLowerCase().includes(searchText);
    });

    const intermediateFiltered = intermediate.filter(function(question){
        return question.title.toLowerCase().includes(searchText);
    });

    const advancedFiltered = advanced.filter(function(question){
        return question.title.toLowerCase().includes(searchText);
    });

    document.getElementById("beginner-list").innerHTML = "";
    document.getElementById("intermediate-list").innerHTML = "";
    document.getElementById("advanced-list").innerHTML = "";

    renderQuestions(beginnerFiltered,"beginner-list");
    renderQuestions(intermediateFiltered,"intermediate-list");
    renderQuestions(advancedFiltered,"advanced-list");

    const easySection = document.getElementById("easy-section");
    const mediumSection = document.getElementById("medium-section");
    const hardSection = document.getElementById("hard-section");

    easySection.style.display =
        beginnerFiltered.length ? "block" : "none";

    mediumSection.style.display =
        intermediateFiltered.length ? "block" : "none";

    hardSection.style.display =
        advancedFiltered.length ? "block" : "none";

});

const progressCount = document.getElementById("progress-count");

progressCount.textContent =
    `${completedQuestions.length} / ${binarySearchQuestions.length} Questions`;

const progressFill = document.getElementById("progress-fill");

const completedQueueQuestions =
    completedQuestions.filter(function(id){

        return binarySearchQuestions.some(function(question){

            return question.id === id;

        });

    });

progressCount.textContent =
`${completedQueueQuestions.length} / ${binarySearchQuestions.length} Questions`;

const progressPercentage =
(completedQueueQuestions.length / binarySearchQuestions.length) * 100;

progressFill.style.width = `${progressPercentage}%`;