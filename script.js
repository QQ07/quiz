let currentQuestion = "";

// function askQuestion() {
//   currentQuestion = prompt("Enter your question:");
//   document.getElementById("question-display-audience").innerText =
//     currentQuestion;
// }

function saveAnswer() {
    var hide = document.getElementById("audience-screen");
    hide.classList.add("hide");
  const ans = document.getElementById("answerInput").value;
  console.log(ans)
  fetch("https://quiz-app-production-1fb9.up.railway.app/saveAnswer", {
  // fetch("http://localhost/saveAnswer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ans }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      displayPopup();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function displayPopup() {
  var popup = document.getElementById("popup");
  popup.classList.add("show");

  // setTimeout(function () {
  //   popup.classList.remove("show");
  // }, 2000); // Adjust the time here (in milliseconds) for how long you want the popup to be displayed
}
