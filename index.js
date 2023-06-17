var ImgApartamento = window.document.getElementById("ImgApartamento")
var ImgApartamento2 = window.document.getElementById("ImgApartamento2")
var chevronright= window.document.getElementById("chevron-right")
var chevronleft = window.document.getElementById("chevron-left")


function rolarparadireita(){
    ImgApartamento.style ="display:none"
    ImgApartamento2.style ="display: flex"
    chevronright.style ="display:none"
    chevronleft.style ="display:flex"

}

function rolarparaesquerda(){
    ImgApartamento.style ="display:flex"
    ImgApartamento2.style ="display: none"
    chevronright.style ="display:flex"
    chevronleft.style ="display:none"
}