function getResumeData() {

    return JSON.parse(localStorage.getItem("resumeData")) || {
        basic: {},
        education: [],
        experience: [],
        projects: [],
        technicalSkills: [],
        softSkills: [],
        achievements: []
    };

}

function saveResumeData(data) {

    localStorage.setItem(
        "resumeData",
        JSON.stringify(data)
    );

}