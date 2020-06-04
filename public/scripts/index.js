function DisplayModal(event){
    console.log("mudei")
    const divModal = document.querySelector("#modal")
    
    divModal.classList.toggle("hide")
}

const buttonSearch = document.querySelector("#page-home main a")
buttonSearch.addEventListener("click", DisplayModal)

const CloseButton = document.querySelector("#modal .content .header a")
CloseButton.addEventListener("click", DisplayModal)