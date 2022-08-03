// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


document.addEventListener("DOMContentLoaded", () => {hearts()});
const errorModal = document.querySelector("#modal");
errorModal.classList.add("hidden")
  function hearts() {
    const likeBtn = document.querySelectorAll("span.like-glyph");

  likeBtn.forEach(likeListener)

  function likeListener(eachBtn) {
    eachBtn.addEventListener("click", (e) => {
      mimicServerCall()
      .then((response) => {
        if (e.target.innerText === EMPTY_HEART) {
          e.target.innerText = FULL_HEART
          e.target.classList.add("activated-heart")
        }
        else if (e.target.innerText === FULL_HEART) {
          e.target.innerText = EMPTY_HEART
          e.target.classList.remove("activated-heart")
        }
        })
      
      .catch(function() {
        const errorMess = document.getElementById("modal")
        console.log(errorMess)
        errorMess.className = ""

        setTimeout(() => {errorMess.className = "hidden"}, 3000)})
  })
  }};

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

// const hearts = document.q
//   const input = document.getElementById("button");
  
//   function clickAlert() {
//     alert("I was clicked!");
//   }

//   input.addEventListener("click", clickAlert);

// function likeListener() {
//   document.addEventListener("click", (e) => {
    
//   })
// }

// likeBtn.addEventListener("click", () => {
//   likeBtn.append(FULL_HEART);
// });