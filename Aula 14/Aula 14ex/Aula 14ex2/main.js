function tabuada() {
  var num = document.getElementById('txtn')
  var tab = document.getElementById('seltab')
  if (num.value.length == 0) {
    alert('[ERRO] Digite um valor para gerar a tabuada!')
  } else {
    var n = Number(num.value)
    tab.innerHTML = ''
    for (var c = 1; c <= 10; c++) {
      var item = document.createElement('option')
      item.text = `${n} x ${c} = ${n * c}`
      item.value = `tab${c}`
      tab.appendChild(item)
    }
  }
}
