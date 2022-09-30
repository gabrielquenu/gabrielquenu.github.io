const galleryItemElements = document.querySelectorAll(".gallery-item>img")

galleryItemElements.forEach((element) => {
    element.onclick = function () { setActiveInactive(element) }
})

function setActiveInactive(elementClicked) {
    galleryItemElements.forEach((element) => {
        if (elementClicked === element) {
            element.parentElement.classList.toggle('gallery-item')
            element.parentElement.classList.toggle('gallery-item-selected')
        } else {
            if (element.parentElement.classList.contains('gallery-item-selected')) {
                element.parentElement.classList.add('gallery-item')
                element.parentElement.classList.remove('gallery-item-selected')
            }
        }
    })

}
