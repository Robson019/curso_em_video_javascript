function somar() {
  var tn1 = document.getElementById('txtn1')
  var tn2 = document.getElementById('txtn2')
  var resp = document.getElementById('resp')
  var n1 = Number(tn1.value)
  var n2 = Number(tn2.value)
  var soma = n1 + n2
  resp.innerHTML = `Resultado: ${soma}`
}
