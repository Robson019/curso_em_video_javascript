function contagem() {
  // definindo variáveis
  var i = document.getElementById('conti')
  var f = document.getElementById('contf')
  var p = document.getElementById('passo')
  var resp = document.getElementById('result')

  // verificando se o usuário deixou alguma aba sem preencher
  if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
    resp.innerHTML = `\u{26A0} Impossível contar! \u{1F614}`
  } else {
    resp.innerHTML = 'Contando: <br>'
    var inicio = Number(i.value)
    var fim = Number(f.value)
    var passo = Number(p.value)

    // valor do passo negativo
    if (passo <= 0) {
      alert('\u{26A0} O passo será desconsiderado! Atribuindo passo 1...')
      passo = 1
    }

    if (inicio > fim) {
      // contagem negativa
      for (inicio; inicio >= fim; inicio -= passo) {
        resp.innerHTML += `${inicio} \u{1F449} `
      }
      resp.innerHTML += `\u{1F3C1}`
    } else {
      //contagem positiva
      for (inicio; inicio <= fim; inicio += passo) {
        resp.innerHTML += `${inicio} \u{1F449} `
      }
      resp.innerHTML += `\u{1F3C1}`
    }
  }
}
