const imgElements = document.getElementsByClassName("img");

for (let i = 0; i < imgElements.length; i++) {
    imgElements[i].addEventListener('click', () => {
        imgElements[i].style.display = "none";
    });
}