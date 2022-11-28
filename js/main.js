const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("itens")) || []

itens.forEach( (elemento) => {
    criaElemento(elemento)
} )

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    
    
    const data = evento.target.elements['data']
    const curso = evento.target.elements['curso']
    const descricao = evento.target.elements['descricao']
    const duvida = evento.target.elements['duvida']

   


        const itemAtual = {
        
        "data": data.value,
        "curso": curso.value,
        "descricao": descricao.value,
        "duvida": duvida.value

        }

      
        itemAtual.id = itens[itens.length -1] ? (itens[itens.length-1]).id + 1 : 0;

        criaElemento(itemAtual)

        itens.push(itemAtual)
    

    localStorage.setItem("itens", JSON.stringify(itens))

    data.value = ""
    curso.value = ""
    descricao.value = ""
    duvida.value = ""
})

function criaElemento(item) {
    const novoItem = document.createElement("li")
    novoItem.classList.add("item")

    const numeroItem = document.createElement("strong")

    let tempo = ajustarZero(hour.toString()) + " : " + ajustarZero(minute.toString()) + " : " + ajustarZero(second.toString())

  
    numeroItem.dataset.id = item.id
    novoItem.appendChild(numeroItem)
    
    var nova_data = new Date(item.data)


    novoItem.innerHTML += dataAtualFormatada(nova_data)
    novoItem.innerHTML += "<br />Curso : " +item.curso
    novoItem.innerHTML += "<br />Descrição : "+item.descricao
    novoItem.innerHTML += "<br />Duvida : "+item.duvida + "<br />TEMPO DE APRENDIZADO "
    novoItem.innerHTML += tempo


    novoItem.appendChild(botaoDeleta(item.id))

    lista.appendChild(novoItem)
}

function atualizaElemento(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}

function botaoDeleta(id) {
    const elementoBotao = document.createElement("button")
    elementoBotao.innerText = "X"

    elementoBotao.addEventListener("click", function() {
        deletaElemento(this.parentNode, id)
    })

    return elementoBotao
}

function deletaElemento(tag, id) {
    tag.remove()

    itens.splice(itens.findIndex(elemento => elemento.id === id), 1)

    localStorage.setItem("itens", JSON.stringify(itens))
}

function dataAtualFormatada(variavel){
    var data = variavel,
        dia  = data.getDate(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = data.getFullYear();
    return diaF+"/"+mesF+"/"+anoF;
}

function ajustarZero(str) {
    
    var adicionar = (2-str.length)
    if(adicionar>0){
    for (var i = 0; i < adicionar; i++) str = '0' + str;
    }
    return str
    
  }
const listaCursos = [
'JavaScript: explorando a linguagem',
'JavaScript: programando na linguagem da web',
'JavaScript: manipulando o DOM',
'JavaScript na Web: armazenando dados no navegador',
'Expressões regulares: capturando textos de forma mágica',
'JavaScript na Web: validação de Formulários e HTML5',
'JavaScript para Web: Crie páginas dinâmicas',  
'JavaScript: programando a Orientação a Objeto',
'JavaScript: interfaces e Herança em Orientação a Objetos',
'JavaScript: conhecendo o Browser e padrões de projeto',
'JavaScript: aprofundando em MVC, padrão Proxy e Factory',
'JavaScript: salvando dados localmente com IndexedDB',
'JavaScript: de padrões a uma abordagem funcional',
'JavaScript: projeto de conclusão',
'JavaScript: desenvolvedor poliglota',
'JavaScript: validações e reconhecimento de voz',
'JavaScript: consumindo e tratando dados de uma API',
'Gráficos na web parte 1: criando e customizando gráficos',
'Vetores e Animação com SVG: trabalhando com CSS e JavaScript'
]

const cursos = document.getElementById("cursos")
const novoCurso = document.createElement("option")

let conta = listaCursos.length-1
console.log(conta)


    for(var i=0; i<= conta; i++){
    const novoCurso = document.createElement("option")    
    novoCurso.innerHTML = listaCursos[i]
    cursos.appendChild(novoCurso)
  
    }

