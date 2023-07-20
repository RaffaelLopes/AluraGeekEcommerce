// Função para validar usuário
function validarUsuario() {
  var password = document.getElementById("password").value; // Obtém o valor do campo de senha
  var mail = document.getElementById("email").value; // Obtém o valor do campo de email

  if (password == "12345" && mail == "test@test.com") {
    // Se a senha for "12345" e o email for "test@test.com"
    window.open("newproduct.html"); // Abre uma nova janela para a página "newproduct.html"
  } else {
    // Senão
    alert("Usuário e senha incorreto"); // Exibe um alerta informando que o usuário e a senha estão incorretos
    console.log("error"); // Registra "error" no console
  }
}

// Função para enviar mensagem por e-mail
function enviarMensaje() {
  var nombre = document.getElementById("input").value; // Obtém o valor do campo "input" (nome)
  var texto = document.getElementById("textarea").value; // Obtém o valor do campo "textarea" (texto da mensagem)

  if (input.value != "" && textarea.value != "") {
    // Se os campos "input" e "textarea" não estiverem vazios
    alert("Uma janela será aberta para enviar sua mensagem"); // Exibe um alerta informando que uma janela será aberta para enviar a mensagem
    window.location.href =
      // Redireciona para uma URL de e-mail com os campos preenchidos
      "mailto:raffa.amb@gmail.com?subject=" +
      "Alura Geek - Mensaje" +
      "&body=" +
      encodeURIComponent("Nome: " + nombre + "\r" + "Comentarios: " + texto);

    document.getElementById("input").value = ""; // Limpa o campo "input" (nome)
    document.getElementById("textarea").value = ""; // Limpa o campo "textarea" (texto da mensagem)
  } else {
    // Senão
    alert("Acrescente seu nome e sua mensagem"); // Exibe um alerta informando que o nome e a mensagem devem ser preenchidos
  }
}

// Função para evitar recarga de página
function evitarRecarga(event) {
  event.preventDefault(); // Previne a ação padrão do evento
  return false; // Retorna false para evitar a recarga da página
}

// Função para carregar arquivo
function cargarArchivo() {
  document.getElementById("file-input").click(); // Simula um clique no elemento com ID "file-input" (input type="file")
  console.log("agregar archivo OK"); // Registra "agregar archivo OK" no console
}

// Função para soltar arquivo
function dropArchivo() {
  console.log("agregar archivo OK"); // Registra "agregar archivo OK" no console
}

// Função para adicionar produto
function agregarProducto() {
  var nombreProducto = document.getElementById("nombreProducto").value; // Obtém o valor do campo "nombreProducto"
  var precioProducto = document.getElementById("precioProducto").value; // Obtém o valor do campo "precioProducto"
  var descripcionProducto = document.getElementById("descripcionProducto").value; // Obtém o valor do campo "descripcionProducto"

  if (
    nombreProducto != "" && // Se o campo "nombreProducto" não estiver vazio
    precioProducto != "" && // Se o campo "precioProducto" não estiver vazio
    descripcionProducto != "" // Se o campo "descripcionProducto" não estiver vazio
  ) {
    // Se todos os campos estiverem preenchidos
    console.log(nombreProducto); // Registra o valor do campo "nombreProducto" no console
    console.log(precioProducto); // Registra o valor do campo "precioProducto" no console
    console.log(descripcionProducto); // Registra o valor do campo "descripcionProducto" no console
    console.log("agregar producto OK"); // Registra "agregar producto OK" no console
  } else {
    // Senão
    alert("Preencha todos os campos"); // Exibe um alerta informando que todos os campos devem ser preenchidos
  }
}
