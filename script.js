// Menu Hamburguer
let menu = document.getElementById("menu")
let iconebarras = document.getElementById("iconeBarras")
let iconeFechar = document.getElementById("iconeFechar")
let sombra = document.getElementById("sombra")

function abreFechaMenu() {
    // Se o menu esta fechado
    if (window.getComputedStyle(menu).right == "-210px") {
        //Abrir o menu
        menu.style.right = "0"

        //Mostrar o icone de fechar
        iconeFechar.style.display = "inline"

        //Esconde o icone barras
        iconeBarras.style.display = "none"

        //Mostra a sombra
        sombraMenu.style.right = "0"
    }else{
        //Fechar o menu
        menu.style.right = "-210px"

        //Esconder icone fechar
        iconeFechar.style.display = "none"

        //Mostrar o icone barras
        iconeBarras.style.display = "inline"

        //Esconder a sombra
        sombraMenu.style.right = "-101vw"
    }
}