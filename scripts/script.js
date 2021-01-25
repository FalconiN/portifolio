const hamburguer = document.querySelector(".hamburguer")
// const toggleModal = document.querySelector('#toggle-modal')


hamburguer.addEventListener("click", function() {
    document.querySelector(".container").classList.toggle("show-menu")
})

// for (var i = 0; i < toggleModal.length; i++) {
//     console.log(toggleModal[i])
// }

// document.querySelector('#qtde').addEventListener("change", atualizarPreco)
// document.querySelector('#js').addEventListener("change", atualizarPreco)
// document.querySelector('#layout-sim').addEventListener("change", atualizarPreco)
// document.querySelector('#layout-nao').addEventListener("change", atualizarPreco)
// document.querySelector('#prazo').addEventListener("change", function(){
//     const prazo = document.querySelector("#prazo").value
//     document.querySelector('label[for="prazo"]').innerHTML = `Prazo: ${prazo} semanas`
//     atualizarPreco()
// })


// function atualizarPreco(){
//     const qtde = document.querySelector("#qtde").value 
//     const temjs= document.querySelector("#js").checked
//     const layoutSim = document.querySelector("#layout-sim").checked
//     const prazo = document.querySelector("#prazo").value


//     var preco = qtde * 100
//     if(temjs) {
//         preco = preco + (preco * 10/100)
//     }

//     if(layoutSim){
//         preco = preco + 500
//     }

//     var taxaUrgencia = 1 - prazo*0.1;
//     preco = preco + (preco*taxaUrgencia)

//     document.querySelector("#preco").innerHTML = `R$ ${preco}`
    
// }


