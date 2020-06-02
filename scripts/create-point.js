
function populateUFs() {
    const ufSelect = document.querySelector("select[name=ufseletor]")

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
    const citySelect = document.querySelector("select[name=cityselector]")
    const stateInput = document.querySelector("input[name=ufseletor]")

    console.log(event.target.value)

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${event.target.value}/municipios`)
    .then( res =>  res.json() )
    .then( cities => {
        for(const city of cities) {
            citySelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`
            // ufSelect.innerHTML = ufSelect.innerHTML + `<option value="1">Valor</option>`
        }
        citySelect.disabled = false
    })
}

document.querySelector("select[name=ufseletor]")
document.addEventListener("change", getCities)

