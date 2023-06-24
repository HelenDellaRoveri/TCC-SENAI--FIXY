document.addEventListener("DOMContentLoaded", function() {

    var loginForm = document.querySelector("form");
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;

      if (email.trim() === "") {
        alert("Por favor escreva seu email.");
        return;
      }
      if (password.trim() === "") {
        alert("Por favor escreva sua senha.");
        return;
      }
  
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "/login", true); // colocar o caminho do nosso servidor
      xhr.setRequestHeader("Content-Type", "application/json");
  
      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            alert("Login bem-sucedido!");
            window.location.href = "../index.html"; 
          } else if (xhr.status === 401) {

            alert("Senha ou email inválido.");
          } else {
            alert("Ocorreu um erro durante o login. Por favor, tente novamente mais tarde. Caso não tenha uma conta faça o cadastro.");
          }
        }
      };
  
      var data = JSON.stringify({ email: email, 
                                  password: password });
      xhr.send(data);
    });
  });