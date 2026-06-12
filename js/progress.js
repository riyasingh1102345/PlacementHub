// Select all checkboxes
const checkboxes = document.querySelectorAll(
    '.question-card input[type="checkbox"]'
);

// Unique key for current page
const pageKey = window.location.pathname;

// Load saved progress
function loadProgress() {

    const savedData =
        JSON.parse(localStorage.getItem(pageKey)) || [];

    checkboxes.forEach((checkbox, index) => {

        checkbox.checked = savedData[index] || false;

    });

    updateProgress();
}

// Save progress
function saveProgress() {

    const progress = [];

    checkboxes.forEach((checkbox) => {

        progress.push(checkbox.checked);

    });

    localStorage.setItem(
        pageKey,
        JSON.stringify(progress)
    );

    updateProgress();
}

// Update progress bar and text
function updateProgress() {

    const totalQuestions = checkboxes.length;

    const solvedQuestions =
        [...checkboxes].filter(
            checkbox => checkbox.checked
        ).length;

    const percentage =
        (solvedQuestions / totalQuestions) * 100;

    const progressFill =
        document.querySelector('.progress-fill');

    const progressText =
        document.querySelector('.progress-card p');

    if (progressFill) {
        progressFill.style.width = `${percentage}%`;
    }

    if (progressText) {
        progressText.textContent =
            `${solvedQuestions} / ${totalQuestions} Solved`;
    }
}

// Event listeners
checkboxes.forEach((checkbox) => {

    checkbox.addEventListener(
        'change',
        saveProgress
    );

});

// Load when page opens
loadProgress();