let btn = document.getElementById('btn')
let div = document.getElementById('content')
let produto = document.getElementById('produto')



function calc() {
    let preco = parseFloat(document.getElementById('reais').value)
let conta = (preco * 3) - (preco / 2)

div.innerHTML = `${produto.value} - Valor unitario R$ ${preco}</br>`
div.innerHTML += `Promoção leve 3 por R$ ${conta}</br>`
div.innerHtmL += ` O 3 Produto custa apenas ${produto.value / 2}`
}

btn.addEventListener('click', calc)