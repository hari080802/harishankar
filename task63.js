angular.module('quizApp', [])

.controller('QuizController', function() {
    var vm = this;

    vm.questions = [
        {
            question: "What is the capital of France?",
            options: ["London", "Paris", "Berlin", "Madrid"],
            correctAnswer: "Paris"
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
            correctAnswer: "William Shakespeare"
        },
        {
            question: "What is the chemical symbol for water?",
            options: ["H2O", "CO2", "NaCl", "O2"],
            correctAnswer: "H2O"
        }
        // Add more questions here
    ];

    vm.currentQuestionIndex = 0;
    vm.currentQuestion = vm.questions[vm.currentQuestionIndex];
    vm.selectedOption = '';
    vm.showResult = false;
    vm.isCorrect = false;
    vm.score = 0;

    vm.checkAnswer = function() {
        if (vm.selectedOption === vm.currentQuestion.correctAnswer) {
            vm.isCorrect = true;
            vm.score++;
        } else {
            vm.isCorrect = false;
        }
        vm.showResult = true;
    };

    vm.nextQuestion = function() {
        vm.showResult = false;
        vm.selectedOption = '';
        vm.currentQuestionIndex++;
        if (vm.currentQuestionIndex < vm.questions.length) {
            vm.currentQuestion = vm.questions[vm.currentQuestionIndex];
        } else {
            // Quiz completed
            // You can implement further logic here
            console.log("Quiz completed");
        }
    };
});
