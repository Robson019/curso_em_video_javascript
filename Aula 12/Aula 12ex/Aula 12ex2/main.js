function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('anonasc')
  var result = document.getElementById('result')

  if (
    fano.value.length == 0 ||
    Number(fano.value) > ano ||
    ano - Number(fano.value) >= 123
  ) {
    alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto') // É como se eu viesse na mão fazendo isso no HTML, só que com o js
    if (fsex[0].checked) {
      genero = 'homem'
      if (idade >= 0 && idade < 12) {
        // criança
        img.setAttribute('src', 'menininho.png')
      } else if (idade < 21) {
        // jovem
        img.setAttribute('src', 'garoto.png')
      } else if (idade < 60) {
        // adulto
        img.setAttribute('src', 'adulto.png')
      } else {
        // idoso
        img.setAttribute('src', 'idoso.png')
      }
    } else {
      genero = 'mulher'
      if (idade >= 0 && idade < 12) {
        // criança
        img.setAttribute('src', 'menininha.png')
      } else if (idade < 21) {
        // jovem
        img.setAttribute('src', 'garota.png')
      } else if (idade < 60) {
        // adulto
        img.setAttribute('src', 'adulta.png')
      } else {
        // idoso
        img.setAttribute('src', 'idosa.png')
      }
    }
    result.style.textAlign = 'center'
    result.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    result.appendChild(img)
  }
}
