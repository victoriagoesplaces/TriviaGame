//Set up a varible where the quiz will be placed
var mainBox = $('#quiz');

//Array to hold the quiz(questions/answeres)
var quiz = [{
    question: "1 . What are the two teams making their debuts in the competition?",
    answers: ["Panama & Egypt", "Panama & Iceland", "Iceland & Morocco", "Egypt & Morocco"],
    rightAnswer: "Panama & Iceland"
}, {
    question: "2 . Who has won the World Cup more times?",
    answers: ["Germany", "Argentina", "France", "Brazil"],
    rightAnswer: "Brazil"
}, {
    question: "3 . Where is the World Cup taking place?",
    answers: ["Russia", "Brazil", "South Africa", "China"],
    rightAnswer: "Russia"
}, {
    question: "4 . What city will host the finals of the Cup?",
    answers: ["Kaliningrad", "Saint Petersburg", "Moscow", "Ekaterinburg"],
    rightAnswer: "Moscow"
}, {
    question: "5 . How many teams will take part in the competition?",
    answers: ["38", "46", "52", "32"],
    rightAnswer: "32"
}, {
    question:  "6 . How many out of the 12 World Cup stadiums in Russia were built just for the tournament?",
    answers: ["12", "7", "9", "11"],
    rightAnswer: "9"
}, {
    question: "7 . What stadium has seating outside to meet FIFA's minimum seating capacity?",
    answers: ["Kazan Arena", "Luzhniki Stadium", "Saint Petersburg Stadium", "Ekaterinburg Arena"],
    rightAnswer: "Ekaterinburg Arena"
}, {
    question: "8 . Who is the current holder of the World Cup coming to the 2018 tournament?",
    answers: ["Germany", "Brazil", "Spain", "Argentina"],
    rightAnswer: "Germany"
}, {
    question: "9. What kind of animal is the 2018 World Cup mascot(Zabivaka)?",
    answers: ["Cat", "Tiger", "Wolf", "Bear"],
    rightAnswer: "Wolf"
}, {
    question: "10. How many FIFA World Cup tournaments have there been being prior to 2018?",
    answers: ["23", "20", "21", "18"],
    rightAnswer: "20"
}];

//Varible for the game

var game = {
correct:0,
wrong:0,
timer:60,
countdown: function(){
    game.timer--;
    $('#TimerClock').html(game.timer);

    if (game.timer === 0){
    game.end();
    }
},

//Game start function
start: function() {
    timer = setInterval(game.countdown, 1000);

    //Removes game start screen and displays the timer on the page
    $('#mainbody').prepend('<h2>Time Reminding: <span id="TimerClock">60</span> Seconds</h2>');
    $('#start').remove();

    //Loops through the quiz array and displays each question and its answer choices
    for (var i = 0; i < quiz.length; i++) {
        mainBox.append('<h3>' + quiz[i].question + '</h3>');
        for (var j = 0; j < quiz[i].answers.length; j++) {
        mainBox.append('<input type="radio" name="question' + '-' + i + '" value="' + quiz[i].answers[j] + '">' + quiz[i].answers[j]);
    }
}

    //Displays a submit button at the bottom of the quiz
    mainBox.append('<button id="submit">Submit</button>');
},

//Game end function
end: function() {

    //Checks each of the answers and determinates if they are the correct or wrong 
    $.each($("input[name='question-0']:checked"), function() {
    if ($(this).val() == quiz[0].rightAnswer) {
        game.correct++;
    } else {
        game.wrong++;
    }
    });
    $.each($("input[name='question-1']:checked"), function() {
        if ($(this).val() == quiz[1].rightAnswer) {
        game.correct++;
    } else {
        game.wrong++;
    }
    });
    $.each($("input[name='question-2']:checked"), function() {
    if ($(this).val() == quiz[2].rightAnswer) {
        game.correct++;
    } else {
        game.wrong++;
    }
    });
    $.each($("input[name='question-3']:checked"), function() {
    if ($(this).val() == quiz[3].rightAnswer) {
        game.correct++;
    } else {
        game.wrong++;
    }
    });
    $.each($("input[name='question-4']:checked"), function() {
    if ($(this).val() == quiz[4].rightAnswer) {
        game.correct++;
    } else {
        game.wrong++;
    }
    });
    $.each($("input[name='question-5']:checked"), function() {
    if ($(this).val() == quiz[5].rightAnswer) {
        game.correct++;
    } else {
        game.wrong++;
    }
    });
    $.each($("input[name='question-6']:checked"), function() {
    if ($(this).val() == quiz[6].rightAnswer) {
        game.correct++;
    } else {
        game.wrong++;
    }
    });
    $.each($("input[name='question-7']:checked"), function() {
    if ($(this).val() == quiz[7].rightAnswer) {
        game.correct++;
    } else {
        game.wrong++;
    }
    });
    $.each($("input[name='question-8']:checked"), function() {
        if ($(this).val() == quiz[8].rightAnswer) {
        game.correct++;
        } else {
        game.wrong++;
        }
    });
    $.each($("input[name='question-9']:checked"), function() {
        if ($(this).val() == quiz[9].rightAnswer) {
        game.correct++;
        } else {
        game.wrong++;
        }
    });

    this.result();
},
    
//Clears the quiz and shows the results
result: function() {

    clearInterval(timer);

    $('#mainbody h2').remove();
    mainBox.html('<h2>Finished!</h2>');
    mainBox.append('<h3>Right Answers: ' + this.correct + '</h3>');
    mainBox.append('<h3>Wrong Answers: ' + this.wrong + '</h3>');
    mainBox.append('<h3>Unanswered: ' + (quiz.length - (this.wrong + this.correct)) + '</h3>');
}
};


//On click, the game starts (call function)
$(document).on('click', '#start', function() {
    game.start();
    });
    
//f submit button is clicked the game is over (call function)
$(document).on('click', '#submit', function() {
    game.end();
    });