function calcular() {
  var txtv = document.getElementById('txtvel')
  var res = document.getElementById('resp')
  var vel = Number(txtv.value)
  res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}km/h</strong></p>`
  if (vel > 60) {
    res.innerHTML += `<p>Velocidade acima do permitido. <strong>MULTADO!</strong></p>`
  }
  res.innerHTML += `<p>Dirija sempre com cinto de segurança.</p>`
}
