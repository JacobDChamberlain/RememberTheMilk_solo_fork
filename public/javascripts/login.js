window.addEventListener("load", (event) => {

  const signUpButton = document.getElementById("signUpBtn")
  signUpButton.addEventListener("click", e => {
    window.location.href = "/signup"
  })

  const demoUser = document.getElementById("demoBtn")
  demoUser.addEventListener("click", e => {
    window.location.href = "/demo"
  })

})
