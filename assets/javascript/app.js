
var intervalID;

function startTimer(duration, display) {
  
    var timer = duration;
    var minutes;
    var seconds;
    
    intervalID=setInterval(function () {

        if (timer < 0) {
            clearInterval(intervalID);
            timer = duration;
            pos = false;
            alert("You have ran out of time, please try again." );
        } else {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = minutes + ":" + seconds;
        }
        timer--;
    }, 1000);
}
window.onload = function () {
    var oneminuteTime = 60 * 1,
        display = document.querySelector("#time");
    startTimer(oneminuteTime, display);
};

var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
    [ "What is the only mammal born with horns?", "Antelope", "Sheep", "Giraffe", "C" ],
    [ "What kind of animal is a Komodo dragon?", "Lizard", "Dragon", "Reptile", "A" ],
    [ "How many legs does a lobster have?", "8", "10", "12", "B" ],
    [ "Which is the largest mammal in the world?", "Hippopotamus", "Whales", "Elephant", "B" ],
    [ "Which is the largest living bird?", "Vulture", "Ostrich", "Eagles", "B" ],
    [ "What animal has the longest lifespan?", "Blue Whale", "Giant Tortoise", "Locust", "B" ],
    [ "What is the only mammal capable of true flight?", "Bat", "Flying Squirrel", "Hummingbird", "A" ],
    [ "A newborn kangaroo is about the size of a ...?", "Grape", "Plum", "Lima bean", "C" ],
    [ "What is the smallest mammal in the world?", "Bumblebee bat", "Numbat", "Western Harvest Mouse", "A" ],
    [ " What animal has the highest blood pressure?", "Blue Whale", "Flea", "Giraffe", "C" ],          
];
function _(x){
    return document.getElementById(x);
}
function renderQuestion(){
    test = _("test");
    if(pos >= questions.length){
        test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
        _("test_status").innerHTML = "End of the questions.";
        pos = 0;
        correct = 0;
        return false; 
    }
    _("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    test.innerHTML = "<h3>"+question+"</h3>";
    test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
    test.innerHTML += "<button onclick='checkAnswer() '>Submit</button>";
}
function checkAnswer(){
   choices = document.getElementsByName("choices");
   for(var i=0; i<choices.length; i++){
       if(choices[i].checked){
           choice = choices[i].value;
       }
   }
   if(choice == questions[pos][4]){
       correct++;
   }
 
   pos++;
   renderQuestion();
}
window.addEventListener("load", renderQuestion, false);