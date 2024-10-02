function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    const arrow = element.querySelector('.arrow');

    // Toggle display of the answer
    if (answer.style.display === "block") {
        answer.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
    } else {
        answer.style.display = "block";
        arrow.style.transform = "rotate(90deg)";
    }
    
    // Optionally, close other open answers
    const allAnswers = document.querySelectorAll('.answer');
    const allQuestions = document.querySelectorAll('.question');
    
    allAnswers.forEach((ans, index) => {
        if (ans !== answer) {
            ans.style.display = "none";
            allQuestions[index].querySelector('.arrow').style.transform = "rotate(0deg)";
        }
    });
}
