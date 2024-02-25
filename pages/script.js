var campoTexto = ""

  function comentario() {
    campoTexto = document.getElementById('texto').value;
    document.getElementById('mostra').innerHTML = campoTexto;
  }