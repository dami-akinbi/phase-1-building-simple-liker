// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const heart = document.querySelector("li .like-glyph");

// for empty heart
heart
  .addEventListener("click", () => {
    if (heart.textContent === EMPTY_HEART) {
      // heart.setAttribute("class", ".activated-heart");
      heart.textContent = FULL_HEART;

      const serverRequest = mimicServerCall();
      console.log(serverRequest);
      console.log(serverRequest.state);
      return serverRequest;
    }
  })
  .catch((err) => {
    const errorDiv = document.querySelector("#modal");
    const p = document.querySelector("#modal p");

    errorDiv.setAttribute("class", null);
    p.textContent = err.message;
    console.log(err.message);
    console.log(errorDiv);
    console.log(p);
  });

// for full heart
heart.addEventListener("click", () => {
  if (heart.textContent === FULL_HEART) {
    heart.textContent = EMPTY_HEART;
    console.log(heart);
  }
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
