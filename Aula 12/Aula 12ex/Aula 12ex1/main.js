function carregar() {
  var escrever = document.getElementById('horario')
  var picture = document.getElementById('imagem')
  var horas = new Date()
  var horario = horas.getHours()
  escrever.innerHTML = `Agora são ${horario} horas.`
  if (horario < 10) {
    // ADICIONAR MAIS UM ZERO EM NÚMEROS MENORES QUE 12H
    escrever.innerHTML = `Agora são 0${horario} horas.`
  }
  if (horario >= 0 && horario < 12) {
    // BOM DIA!
    picture.src = 'foto_manha.png'
    document.body.style.background = '#e2cd9f'
  } else if (horario >= 12 && horario < 18) {
    // BOA TARDE!
    picture.src = 'foto_tarde.png'
    document.body.style.background = '#b9846f'
  } else {
    // BOA NOITE!
    picture.src = 'foto_noite.png'
    document.body.style.background = '#515154'
  }
}
