var pos = 0, quiz, quiz_status, question, selectedAnswer, options, optionA, optionB, optionC, correct = 0;


var questions = [
  {
      question: "1. Which of the following is NOT a part of the front-end development triad?",
      a: "HTML",
      b: "CSS",
      c: "PHP",
      answer: "C"
    },
  {
      question: "9. What is the purpose of a form element?",
      a: "To insert an image into the web page.",
      b: "To create a form on the web page.",
      c: "To create a hyperlink to another web page.",
      answer: "B"
    },
  {
      question: "3. What is the correct CSS code for setting the background color of a <div> element to red?",
      a: "#div { background-color: red }",
      b: ".div { background-color: red }",
      c: "div { background-color: red }",
      answer: "C"
    },
  {
      question: "4. What is the correct JavaScript code for adding two numbers together and displaying the result in an alert box?",
      a: "alert(2 + 2);",
      b: "console.log(2 + 2);",
      c: "All of the above are correct.",
      answer: "C"
    },
    {
        question: "5. What is the purpose of an img element?",
        a: "To insert an image into the web page.",
        b: "To create a hyperlink to another web page.",
        c: "To insert an image into the web page.",
        answer: "C"
      },
  ];

	
function get(x){
  return document.getElementById(x);
}


function renderQuestion(){
  quiz = get("quiz");
  if(pos >= questions.length){
    quiz.innerHTML = "<h2>Congrats! You answered "+correct+" of "+questions.length+" questions correctly.</h2><br><button onclick='renderQuestion()'>Play again</button>";
    get("quiz_status").innerHTML = "Quiz completed";
    
    pos = 0;
    correct = 0;
    
    return false;
  }

  get("quiz_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  
  question = questions[pos].question;
  optionA = questions[pos].a;
  optionB = questions[pos].b;
  optionC = questions[pos].c;

  
  quiz.innerHTML = "<h3>"+question+"</h3>";

  
  quiz.innerHTML += "<label> <input type='radio' name='options' value='A'> "+optionA+"</label><br>";
  quiz.innerHTML += "<label> <input type='radio' name='options' value='B'> "+optionB+"</label><br>";
  quiz.innerHTML += "<label> <input type='radio' name='options' value='C'> "+optionC+"</label><br><br>";
  quiz.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer(){
  
  options = document.getElementsByName("options");
  for(var i=0; i < options.length; i++){
    if(options[i].checked){
      selectedAnswer = options[i].value;
    }
  }
  
  if(selectedAnswer == questions[pos].answer){
    
    correct++;
  }
  
  pos++;
  
  renderQuestion();
}

window.addEventListener("load", renderQuestion);