const peso1 = 1.0
const peso2 = Number("2.0")

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)) //ver se o numero ele é inteiro ou não 
console.log(Number.isInteger(peso2)) //ver se o numero ele é inteiro ou não 

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
// tofixed ele encutar os numeros grande que talvez não seja necessario para sua aplicação 

console.log(media.toFixed(3))
console.log(media.toFixed(4))

console.log(media.toString(2)) // converter para binario 
console.log(typeof media)  // saber tipo de varivel 
