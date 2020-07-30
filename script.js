// elements of the page
var container = document.querySelector(".container")
var currentTime = document.querySelector("#currentTime")
var qDiv = document.querySelector("#qDiv")
var startBtn = document.querySelector("#startBtn")


var questions = [
   {
      q: "How many stats are there in the USA?",
      choices: ["49", "51", "38", "50"],
      a: "50"
   },
   {
      q: "In which city was the Titanic launched?",
      choices: ["Whitehead", "Helen’s Bay", "Holywood", "Balfast"],
      a: "Balfast"
   },
   {
      q: "What does the white dove symbolize?",
      choices: ["Love", "Peace", "Happiness", "Sorrow"],
      a: "Peace"
   },
   {
      q: "How many milligrams make a gram?",
      choices: ["100", "1000", "1100", "10000"],
      a: "1000"
   },
   {
      q: "Who is the world’s largest land animal?",
      choices: ["Elephant", "Rhinoceros", "Giraffe", "Bear"],
      a: "Elephant"
   }
]

var index = 0
var score = 0
// var secondLeft = 80
// var wrongA = 10
var timer = 80


startBtn.addEventListener("click", function () {
   quizTimer()
   randerQuestion()
})

function randerQuestion() {
   container.textContent = ""
   var currentQ = questions[index]

   // question element
   var newQ = document.createElement("h1")
   newQ.textContent = currentQ.q
   container.appendChild(newQ)

   // list element
   var ulEl = document.createElement("ul")
   container.appendChild(ulEl)

   //choices element
   for (var i = 0; i < currentQ.choices.length; i++) {
      var liEl = document.createElement("li")
      var space = document.createElement("br")
      liEl.setAttribute("class", "btn btn-warning")
      liEl.setAttribute("data-answer", currentQ.choices[i])
      liEl.textContent = currentQ.choices[i]
      liEl.addEventListener("click", fn)
      ulEl.appendChild(liEl)
      ulEl.appendChild(space)
   }


}

function quizTimer() {
   var interval = setInterval(function () {
      timer--
      var currentTime = document.querySelector("#currentTime")
      currentTime.textContent = "Timer: " + timer

      if (timer == 0 || index >= questions.length) {
         clearInterval(interval)
         endQuiz()
      }

   }, 1000)

}


function fn(event) {
   var currentQ = questions[index]
   var currentPressedLi = event.target
   var valueOfLi = currentPressedLi.getAttribute("data-answer")
   console.log(valueOfLi)
   if (valueOfLi == currentQ.a) {
      score++
      console.log("You are right")
   } else {
      console.log("You are wrong")
      timer -= 15
   }
   index++

   if (index >= questions.length) {
      endQuiz()
   } else {
      randerQuestion()
   }

}

function endQuiz() {
   container.textContent = " "
   currentTime.textContent = " "
   var h1El = document.createElement("h1")
   var scoreEl = document.createElement("h1")
   scoreEl.setAttribute("style", "color:blue ; font-size: 25px; margin-top:20px; text-align:center")
   container.appendChild(h1El)
   container.appendChild(scoreEl)

   if (score >= 4) {
      h1El.textContent = "Congratulation! You past"
      scoreEl.textContent = "Your Score is: " + score
      h1El.setAttribute("style", "color:green ; font-size: 35px;text-align:center; margin-top:30px ")

   } else {
      h1El.textContent = "You failed"
      scoreEl.textContent = "Your Score is: " + score
      h1El.setAttribute("style", "color:red; text-align:center; margin-top:30px")
   }

   // var tryA = document.createElement("button")
   // tryA.textContent = "Try Agin"
   // tryA.setAttribute("style", "padding:7px 20px; color:white; background-color:pink; font-size:25px; margin-top:70px; margin-left:170px ")

   // tryA.addEventListener("click", function () {
   //    quizTimer()
   //    randerQuestion()
   // })
   // container.appendChild(tryA)


   // var index = 0
   // var score = 0
   // var timer = 80
}







