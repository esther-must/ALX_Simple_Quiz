// Function to check the user's answer
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Retrieve the user's answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Get the feedback element
    const feedback = document.getElementById("feedback");

    // Check if the user has selected an answer
    if (!userAnswer) {
        feedback.textContent = "Please select an answer before submitting.";
        return;
    }

    // Compare the user's answer with the correct answer
    if (userAnswer.value === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Add an event listener to the Submit button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
