window.addEventListener("load", (event) => {

  //* Add Task Functionality
  //Loggingout User
  // ! -------------------------------------------------------
  const logoutUser = document.getElementById("logoutBtn")

  logoutUser.addEventListener("click", e => {
    window.location.href = "/application/logout";
  });


}); //? End of application.js
