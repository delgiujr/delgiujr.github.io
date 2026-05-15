//homepage functions
function displayResourceOfDay() {
    const resources = [
        "Khan Academy: Calculus Made Easy - <a href='https://www.khanacademy.org/math' target='_blank'>Visit</a>",
        "Purdue OWL: Essay Structure Guide - <a href='https://owl.purdue.edu/' target='_blank'>Visit</a>",
        "W3Schools: JavaScript for Beginners - <a href='https://www.w3schools.com/js/' target='_blank'>Visit</a>",
        "Crash Course: Study Tips & Techniques - <a href='https://www.youtube.com/user/crashcourse' target='_blank'>Vist</a>",
        "Quizlet: Make Your Own Flashcards - <a href='https://quizlet.com/' target='_blank'>Visit</a>",
        "National Geographic Education: Science Resources - <a href='https://education.nationalgeographic.org/' target='_blank'>Visit</a>"
    ];
            
let randomIndex = Math.floor(Math.random() * resources.length);
let selectedResource = resources[randomIndex];
document.getElementById("resource-display").innerHTML = "📚 " + selectedResource;
}

//planner functions
function generateStudyPlan() {
    let subject = document.getElementById("subject-name").value;
        
    let difficultyRadios = document.getElementsByName("difficulty");
    let selectedDifficulty = "";
    for (let i = 0; i < difficultyRadios.length; i++) {
        if (difficultyRadios[i].checked) {
            selectedDifficulty = difficultyRadios[i].value;
            break;
        }
    }
            
    let materials = [];
    let textbookCheck = document.getElementById("material-textbook");
    let flashcardsCheck = document.getElementById("material-flashcards");
    let quizCheck = document.getElementById("material-quiz");
    let notesCheck = document.getElementById("material-notes");
            
    if (textbookCheck.checked) materials.push("Textbook");
    if (flashcardsCheck.checked) materials.push("Flashcards");
    if (quizCheck.checked) materials.push("Practice Quiz");
    if (notesCheck.checked) materials.push("Class Notes");
            
    let materialsText = materials.length > 0 ? materials.join(", ") : "No materials selected";
            
    if (subject.trim() === "") {
        document.getElementById("plan-output").innerHTML = 
        "Please enter a subject name before generating your study plan.";
        return;
    }
            
    let studyStrategy = "";
    let timeRecommendation = "";
    let emoji = "";
            
    if (selectedDifficulty === "Hard") {
        emoji = "🔴";
        studyStrategy = "Break the subject into 25-minute chunks (Pomodoro method). Use at least 3 different resources. Take short breaks every 25 minutes. Review difficult concepts twice.";
        timeRecommendation = "Recommended study time: 2-3 hours with breaks";
    } else if (selectedDifficulty === "Medium") {
        emoji = "🟡";
        studyStrategy = "Review your notes first, then do practice problems. Teach the concept to someone else to reinforce understanding. Take a 5-minute break every 45 minutes.";
        timeRecommendation = "Recommended study time: 1-2 hours";
    } else {
        emoji = "🟢";
        studyStrategy = "Quick review using flashcards or a practice quiz. Focus on key terms and main ideas. You're in good shape!";
        timeRecommendation = "Recommended study time: 30-60 minutes";
    }

    let materialSuggestion = "";
    if (materials.includes("Flashcards") && selectedDifficulty === "Hard") {
        materialSuggestion = "Great that you have flashcards! Use them for key terms you keep forgetting.";
    } else if (materials.includes("Practice Quiz") && selectedDifficulty !== "Easy") {
        materialSuggestion = "Use the practice quiz to identify weak spots before diving deep.";
    } else if (materials.includes("Textbook") && selectedDifficulty === "Hard") {
        materialSuggestion = "Focus on chapter summaries and end of chapter questions rather than reading everything.";
    } else {
        materialSuggestion = "Use the materials you have strategically. Don't try to use everything at once.";
    }
            
    document.getElementById("plan-output").innerHTML = 
        `${emoji} <strong>Study Plan for ${subject.toUpperCase()}</strong> ${emoji}<br><br>` +
        `<strong>Difficulty Level:</strong> ${selectedDifficulty}<br>` +
        `<strong>Materials Available:</strong> ${materialsText}<br><br>` +
        `<strong>Study Strategy:</strong> ${studyStrategy}<br><br>` +
        `<strong>Time Recommendation:</strong> ${timeRecommendation}<br><br>` +
        `<strong>Tip:</strong> ${materialSuggestion}<br><br>` +
        `<em>Remember: This plan is a suggestion. Your own energy, focus, and prior knowledge matter most no algorithm can know that better than you.</em>`;
            
    let planDiv = document.getElementById("plan-output");
    planDiv.style.backgroundColor = "#d5f5e3";
    planDiv.style.border = "2px solid var(--accent)";
            
    document.getElementById("study-plan-display").scrollIntoView({ behavior: "smooth" });
}
        
function resetForm() {
    document.getElementById("subject-name").value = "";
            
    document.getElementById("material-textbook").checked = false;
    document.getElementById("material-flashcards").checked = false;
    document.getElementById("material-quiz").checked = false;
    document.getElementById("material-notes").checked = false;
            
    document.getElementById("difficulty-easy").checked = true;
    document.getElementById("difficulty-medium").checked = false;
    document.getElementById("difficulty-hard").checked = false;
            
    document.getElementById("plan-output").innerHTML = 
        "Form has been reset. Enter your study details and click 'Generate Study Plan'";
            
    let planDiv = document.getElementById("plan-output");
    planDiv.style.backgroundColor = "white";
    planDiv.style.border = "none";
}
        
function showTooltip() {
    let tooltip = document.getElementById("tooltip-message");
    tooltip.style.display = "block";
}
        
function hideTooltip() {
    let tooltip = document.getElementById("tooltip-message");
    tooltip.style.display = "none";
}

//resource library functions
