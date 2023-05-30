function soma() {
    primeiro_numero = document.getElementById("primeiro-numero")
    segundo_numero = document.getElementById("segundo-numero")
    resultado = parseFloat(primeiro_numero.value) + parseFloat(segundo_numero.value)
    input_resultado = document.getElementById("resultado")
    input_resultado.value = resultado
}
function subtracao() {
    primeiro_numero = document.getElementById("primeiro-numero")
    segundo_numero = document.getElementById("segundo-numero")
    resultado = parseFloat(primeiro_numero.value) - parseFloat(segundo_numero.value)
    input_resultado = document.getElementById("resultado")
    input_resultado.value = resultado
}
function divisao() {
    primeiro_numero = document.getElementById("primeiro-numero")
    segundo_numero = document.getElementById("segundo-numero")
    resultado = parseFloat(primeiro_numero.value) / parseFloat(segundo_numero.value)
    input_resultado = document.getElementById("resultado")
    input_resultado.value = resultado

}
function multiplicacao() {
    primeiro_numero = document.getElementById("primeiro-numero")
    segundo_numero = document.getElementById("segundo-numero")
    resultado = parseFloat(primeiro_numero.value) * parseFloat(segundo_numero.value)
    input_resultado = document.getElementById("resultado")
    input_resultado.value = resultado

}