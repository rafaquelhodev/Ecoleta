
function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res =>  res.json() )
    .then( states => {
        for(const state of states) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            // ufSelect.innerHTML = ufSelect.innerHTML + `<option value="1">Valor</option>`
        }
    })
}

populateUFs()

function getCities(event) {
    // console.log("mudei")
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    console.log(event.target.name)

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    citySelect.innerHTML = `<option value="">Selecione a cidade</option>`
    citySelect.disabled = true

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${event.target.value}/municipios`)
    .then( res =>  res.json() )
    .then( cities => {
        for(const city of cities) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }
        citySelect.disabled = false
    })

}

document
    .querySelector(`select[name="uf"]`)
    .addEventListener("change", getCities)


const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect){
    item.addEventListener("click", handleSectedItem)
}

const collectedItems = document.querySelector("input[name=items]")
let selectedItems = []

function handleSectedItem(event) {
    // add or remove a class
    const itemLi = event.target

    // adding selected class in li
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    const alreadySelected = selectedItems.findIndex( function(item){
        const itemFound = item == itemId
        return itemFound
    } )

//    console.log(alreadySelected)

   // tira os elementos do selectedItems que foram deselecionados
   if (alreadySelected >= 0) {
       const filteredItems = selectedItems.filter( item => {
           const itemIsDifferent = item != itemId
           return itemIsDifferent
       })
       selectedItems = filteredItems
   } else{
        selectedItems.push(itemId)
   }
   
//    console.log(selectedItems)
    collectedItems.value = selectedItems
   
}