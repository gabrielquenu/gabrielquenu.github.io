const galleryItemElements = document.querySelectorAll(".gallery-item")

galleryItemElements.forEach((element) => {
    element.onclick = function () { setActiveInactive(element) }
})

function setActiveInactive(elementClicked) {
    galleryItemElements.forEach((element) => {
        if (elementClicked === element) {
            element.classList.toggle('gallery-item')
            element.classList.toggle('gallery-item-selected')
        } else {
            if (element.classList.contains('gallery-item-selected')) {
                element.classList.add('gallery-item')
                element.classList.remove('gallery-item-selected')
            }
        }
    })

}
