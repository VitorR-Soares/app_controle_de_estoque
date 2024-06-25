const containerConteudo = document.querySelector(".containerConteudo")
const popUp = document.querySelector(".fundoPopUp")
const btnAddColab = document.querySelector("#btnAddColab")
const btnCancelar = document.querySelector("#btnCancelar")
const btnFecharPopUp = document.querySelector(".btnFecharPopUp")
const inputTel = document.querySelector("#inputTel")
const inputTipo = document.querySelector("#tipoForm")
const exibeFones = document.querySelector(".exibirInfo")
const abrirPopUp=()=>{
    popUp.classList.remove("ocultarPopUp")
}
const fecharPopUp=()=>{
    popUp.classList.add("ocultarPopUp")
}

const preencherTabela=()=>{
    const endpoint = "http://127.0.0.1:1880/consulta_colaboradores"
    fetch(endpoint)
    .then(res=>res.json())
    .then(res=>{
        res.map((el,i)=>{
            // Criação das novas linhas
            const novaLinha = document.createElement("div")
            novaLinha.classList.add("linhaConteudo")
            const c1 = document.createElement("div")
            c1.setAttribute("class", "dado c1")
            c1.innerHTML = el.id_usuario
            const c2 = document.createElement("div")
            c2.setAttribute("class", "dado c2")
            c2.innerHTML = el.nome
            const c3 = document.createElement("div")
            c3.setAttribute("class", "dado c3")
            c3.innerHTML = el.tipo
            const c4 = document.createElement("div")
            c4.setAttribute("class", "dado c4")
            c4.innerHTML = el.status
            const c5 = document.createElement("div")
            c5.setAttribute("class", "dado c5")

            // Adicionando os elementos na página
            containerConteudo.appendChild(novaLinha)
            novaLinha.appendChild(c1)
            novaLinha.appendChild(c2)
            novaLinha.appendChild(c3)
            novaLinha.appendChild(c4)
            novaLinha.appendChild(c5)
        })
    })
}

preencherTabela()

const endpointTipoUser = "http://127.0.0.1:1880/consulta_tipo_usuario"
fetch(endpointTipoUser)
.then(res=>res.json())
.then(res=>{
    res.map((el,i)=>{
        const novoTipo = document.createElement("option")
        novoTipo.value = i+1
        novoTipo.innerHTML = el.descricao
        inputTipo.appendChild(novoTipo)
    })
    console.log(res)
})





btnAddColab.addEventListener("click",()=>{
    console.log("click")
    abrirPopUp()
})
btnCancelar.addEventListener("click",()=>{
    console.log("click")
    fecharPopUp()
})
btnFecharPopUp.addEventListener("click",()=>{
    console.log("click")
    fecharPopUp()
})
inputTel.addEventListener("keyup",(evt)=>{
    if(evt.key=="Enter"){
        console.log("coloquei telefone no container")
        const divTel = document.createElement("div")
        divTel.setAttribute("class","containerTelefone")
        const telefone = document.createElement("div")
        telefone.setAttribute("class","telefone")
        telefone.innerHTML = inputTel.value
        const btnExcluir = document.createElement("div")
        const imgDelete = document.createElement("img")
        imgDelete.setAttribute("src","../imgs/delete.svg")
        btnExcluir.setAttribute("class","btnExcluiTel")
        divTel.appendChild(telefone)
        divTel.appendChild(btnExcluir)
        btnExcluir.appendChild(imgDelete)
        exibeFones.appendChild(divTel)
        inputTel.value = ""
        
    }
})
// const btnExcluir = document.querySelector
// btnExcluir.addEventListener("click",(evt)=>{
//     const telDelete = evt.target.parentNode.parentNode
//     telDelete.remove()
// })
                    