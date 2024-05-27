function mostrar() {
  var txtp = document.getElementById('txtpais')
  var res = document.getElementById('resp')
  var pais = txtp.value
  res.innerHTML = `<p>Vivendo em <strong>${pais}</strong></p>`
  if (pais == 'Brasil') {
    res.innerHTML += `<p>Você é <strong>Brasileiro</strong>.</p>`
  } else {
    res.innerHTML += `<p>Você é <strong>Estrangeiro</strong>.</p>`
  }
}
