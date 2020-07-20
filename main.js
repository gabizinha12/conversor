const horas = document.getElementById('inputHoras')
const resultado = document.getElementById('res')

function calcular(horas) {
var calc = Math.floor(horas * 60 * 60)
resultado.innerHTML = `Agora são ${calc}`
}