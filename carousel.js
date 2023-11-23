// dichiariamo la costante img
const imgCards = document.getElementsByClassName("img_card");

let imgItem = 0;

// funzione bottone
const buttonNext = document.querySelector(".button_next");

buttonNext.addEventListener("click", function () {

    if (imgItem < imgCards.lenght - 1) {

        imgCards[imgItem].classList.remove("active");
        imgCards[imgItem].classList.add("delete");

        imgItem++;

        imgCards[imgItem].classList.remove("delete");
        imgCards[imgItem].classList.add("active");

    }

});

console.log(imgCards);