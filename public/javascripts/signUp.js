window.addEventListener("load", (event) => {

  const loginButton = document.getElementById("loginBtn")
  loginButton.addEventListener("click", e => {
    window.location.href = "/login"
  })

  const demoUser = document.getElementById("demoBtn")
  demoUser.addEventListener("click", e => {
    window.location.href = "/demo"
  })
  
})
