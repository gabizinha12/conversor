function calcular() {
const horas = document.getElementById('inputHoras')
const resultado = document.getElementById('res')
var calc = Math.floor(horas.value * 60 * 60)
resultado.innerHTML = `Agora são ${calc} segundos`
}