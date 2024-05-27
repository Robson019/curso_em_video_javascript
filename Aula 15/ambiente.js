let num = [2, 5, 1, 8]
num[4] = 7
num.push(6)
num.sort()

// for (var c = 0; c < num.length; c++) {
//   console.log(`A posição ${c} tem valor ${num[c]}`)
// }

//ainda mais simples
for (let c in num) {
  console.log(`A posição ${c} tem valor ${num[c]}`)
}

let pos = num.indexOf(9)

console.log(num)
console.log(`O nosso vetor tem ${num.length} elementos.`)

if (pos == -1) {
  console.log (`Valor não encontrado...`)
} else {
  console.log(`O valor 7 foi encontrado na posição ${pos}.`)
}