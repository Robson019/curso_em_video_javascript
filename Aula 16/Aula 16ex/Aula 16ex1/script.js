let num = document.getElementById('num')
let conj = document.getElementById('conj')
let resp = document.getElementById('resp')
let valores = []

function isNumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function adicionar() {
  if (isNumber(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado`
    item.value = `conj${num.value}`
    conj.appendChild(item)
    resp.innerHTML = ''
  } else {
    alert(`[ERRO] Digite um valor válido e NÃO repetido!`)
  }
  num.value = ''
  num.focus()
}

function finalizar() {
  if (valores.length > 0) {
    maior = menor = valores[0]
    let soma = 0
    let media = 0
    for (let c in valores) {
      soma += valores[c]
      if (valores[c] > maior) {
        maior = valores[c]
      }
      if (valores[c] < menor) {
        menor = valores[c]
      }
    }

    media = soma / valores.length

    resp.innerHTML = ''
    resp.innerHTML += `<p>Ao todo, temos ${valores.length} números cadastrados.</p>`
    resp.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    resp.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    resp.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    resp.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
  } else {
    alert(`[ERRO] Adicione pelo menos um número.`)
  }
  
}