// hid the timer and all the text including the results page until start button is clicked
$("#timer").hide();
$("#hidet").hide();
$("#end").hide();
// if button is clicked then button hides and everything except the results page is shown
$("#button1").on("click", function (){
    $("#timer").show();
    $("#hidet").show();
    $("#button1").hide();
    $("#timer").html(number + " seconds");
});
// variables here for correct, incorrect, and unanswered questions
// the interval along with arrays to store the answer of user 
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var number = 15;
var interval; 
var num1 = 7;
var num2 = 0;
var userAnswer = [];
var userChecks = [];
var input;
var inNum;
// set of questions in an array, tried object but got confusing
var questions = [

        "Who did Obi-Wan defeat in Episode I The Phantom Mence?",
        "What kind of army did the Kaminoans create for the Republic?",
        "Which charcter in Episode 3 changed sides?",
        "What planet was the rebel base location in Episode 4?",
        "What shocking news did the audience react to in Episode 5?",
        "What color lightsaber did Luke Skywalker have in Episode 6 The Return of the Jedi?",
        "What planet did Rey find BB-8 in The Force Awakens?",
        "What happens to Luke Skywalker in Episode 8 The Last Jedi",

    ]
// another array with inner arrays of choices for each radio button
var choices = [
    ["Darth Maul","Jar Jar Binks","Mace Windu","Yoda"],
    ["Droid Army","Ewok Army","Clone Army","Rebels"],
    ["Anakin Skywalker","Obi-Wan Kenobi","Count Dooku","Yoda"],
    ["Hoth","Tatooine","Naboo","Yavin-4"],
    ["Yoda is alive","Han in concrete","Darth Vader is Luke's Father","Who is Boba Fett"],
    ["Yellow","Green","Blue","Purple"],
    ["Jakku", "Bespin","Kashyyk","Hoth"],
    ["He Fights Ren","He Dies","Fixes his X-Wing","Dances"],

];
// answers in value form so it is easier to use later in the check answers 
var answers = 
[0,2,0,3,2,1,0,1];

// run function clears timer and then sets it up
function run()
{ 
    clearInterval(interval);
    interval = setInterval(decrement, 1000);
}
// decrement function uses var number set to 15 to decrease to 0 every 1000 seconds
function decrement()
{
    // shows the times remaining until the question appears
    //note: cannot click and answer and another question appears, must wait until timer is done
    number--;
    $("#timer").html("Time remaining until next question: " + number + " seconds");
    var checked1 = $("#inlineRadio1").is(":checked");
    var checked2 = $("#inlineRadio2").is(":checked");
    var checked3 = $("#inlineRadio3").is(":checked");
    var checked4 = $("#inlineRadio4").is(":checked");
    console.log(checked1);
    if((number === 0) || (checked1 == true) || (checked2 == true) || (checked3 == true) || (checked4 == true))
    {
        num1--;
        num2++;
        clearInterval(interval);
        nextQuestion();
        checked1 = false;
        checked2 = false;
        checked3 = false;
        checked4 = false;
    }

}

function setUp()
{
// this functionsets up the quiz area with 1 question and four options using array
// other questions come in on loop in nextQuestion() function
    $("#question").html(questions[0]);
    $('label[for=inlineRadio1]').html(choices[0][0]);
    $('label[for=inlineRadio2]').html(choices[0][1]);
    $('label[for=inlineRadio3]').html(choices[0][2]);
    $('label[for=inlineRadio4]').html(choices[0][3]);

// once a radio button is clicked the input gets added to an array 
//note: if click more than 1 radio, it will still add to the array
//and the results with not be correct 
    $("input").on("click", function ()
    {

       input = $("input:checked").val();
        console.log(input)
         console.log($("input:checked").val());
         userAnswer.push(($("input:checked").val()));
         for(var i=0; i<userAnswer.length; i++) 
        { 
            // change the input value into a int number so it can be comparable later 
            userAnswer[i] = parseInt(userAnswer[i], 10); 
        } 
         console.log(userAnswer.length);
        //  if the user has the min of answers which equal to the number of questions 
        //then checkAnswer function is activated
         if(userAnswer.length === 8)
            {
                console.log("here");

                console.log(userAnswer);
                checkAnswers();
            }
    });

    
}
// this function makes sure that each radio button is not clicked 
//when the next question appears
function nextQuestion()
{
    $("#inlineRadio1").prop("checked",false);
    $("#inlineRadio2").prop("checked",false);
    $("#inlineRadio3").prop("checked",false);
    $("#inlineRadio4").prop("checked",false);
    number = 15;
    // resets the timer interval to 15 seconds
    interval = setInterval(decrement, 1000);
    // loop that sets the next questions and keeps going until user answers are total of 8
        for(var i = 1; i < questions.length; i++)
        {    
            // labels change for each question with the code below along with the choices
            $("#question").html(questions[i-num1]); 
            $('label[for=inlineRadio1]').html(choices[num2][0]);
            $('label[for=inlineRadio2]').html(choices[num2][1]);
            $('label[for=inlineRadio3]').html(choices[num2][2]);
            $('label[for=inlineRadio4]').html(choices[num2][3]);
            console.log(num2);
        }
        
}
// this functiopn hides the timer and main content
//then shows the results content with
//also clear interval 
function checkAnswers()
{
    clearInterval(interval);
    $("#timer").hide();
    $("#hidet").hide();
    $("#end").show();
    // issue with for loop so hard coded each answer with the userAnswers 
    if(userAnswer[0] === answers[0])
    {
        correct++;
    }
    else if(userAnswer[0] != answers[0])
    {
        incorrect++;
    }
    // pretty much if a answer matches the userAnswer with the location then correct is added
    //otherwise incorrect is added
    if(userAnswer[1] === answers[1])
    {
        correct++;
    }
    else if(userAnswer[1] != answers[1])
    {
        incorrect++;
    }

    if(userAnswer[2] === answers[2])
    {
        correct++;
    }
    else if(userAnswer[2] != answers[2])
    {
        incorrect++;
    }

    if(userAnswer[3] === answers[3])
    {
        correct++;
    }
    else if(userAnswer[3] != answers[3])
    {
        incorrect++;
    }

    if(userAnswer[4] === answers[4])
    {
        correct++;
    }
    else if(userAnswer[4] != answers[4])
    {
        incorrect++;
    }

    if(userAnswer[5] === answers[5])
    {
        correct++;
    }
    else if(userAnswer[5] != answers[5])
    {
        incorrect++;
    }

    if(userAnswer[6] === answers[6])
    {
        correct++;
    }
    else if(userAnswer[6] != answers[6])
    {
        incorrect++;
    }

    if(userAnswer[7] === answers[7])
    {
        correct++;
    }
    else if(userAnswer[7] != answers[7])
    {
        incorrect++;
    }

    if(userAnswer.length != answers.length)
    {
        unanswered++;
    }
    console.log(correct);
    console.log(incorrect);
    // after the calculation
    //the results are shown to the user 
    $("#results").html("Correct answered: " + correct);
    $("#results1").html("Incorrect answered: " + incorrect);
    $("#results2").html("Unanswered: " + unanswered);
}
// button click and then the setup function starts the program
$("#button1").on("click", run);
setUp();