const completedQuestions =
    JSON.parse(localStorage.getItem("completedQuestions")) || [];
    
    console.log(arrayQuestions);

// Easy
const beginner = arrayQuestions.filter(function(question){
    return question.difficulty === "Easy";
});

// Medium
const intermediate = arrayQuestions.filter(function(question){
    return question.difficulty === "Medium";
});

// Hard
const advanced = arrayQuestions.filter(function(question){
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
                 ? `<p class="completed-text">✅ Completed</p>`
                 : `<a href="../problems.html?id=${question.id}">Solve →</a>`
            }

            </div>
        `;

    });

}

// Render
renderQuestions(beginner, "beginner-list");
renderQuestions(intermediate, "intermediate-list");
renderQuestions(advanced, "advanced-list");

const progressCount = document.getElementById("progress-count");

progressCount.textContent =
    `${completedQuestions.length} / ${arrayQuestions.length} Questions`;

const progressFill = document.getElementById("progress-fill");

const progressPercentage =
    (completedQuestions.length / arrayQuestions.length) * 100;

progressFill.style.width = `${progressPercentage}%`;