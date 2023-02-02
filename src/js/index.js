/*Objetivo 1 - Quando o ususario clicar veja o trailer, deve abrir a modal com o video*/

/*Objetivo 2 - Quando usuario clicar no X deve fechar a modal*/

/*Objetivo 1 - Quando o ususario clicar veja o trailer, deve abrir a modal com o video
    - passo 1 - dar um jeito de pegar o elemento que representa o botao na tela usando o js
    - passo 2 - dar um jeito de identificar quando o usuario clicar no botao
    - passo 3 - dar um jeito de pegar o elemento da modal no js
    - passo 4 - abrir a modal na tela     
*/

/*Objetivo 2 - Quando usuario clicar no X deve fechar a modal
    - passo 1 - dar um jeito de pegar o elemento de fechar modal usando js
    - passo 2 - dar um jeito de identificar quando o usuario clicar no X
    - passo 3 - fechar a modal
*/

//Objetivo 1
// passo 1 - dar um jeito de pegar o elemento que representa o botao na tela usando o js
console.log(document.querySelector('.botao-trailer'));

const botaoTrailer = document.querySelector('.botao-trailer');
const video = document.getElementById('video')
// passo 3 - dar um jeito de pegar o elemento da modal no js
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

// passo 2 - dar um jeito de identificar quando o usuario clicar no botao
botaoTrailer.addEventListener("click", () => {
    // passo 4 - abrir a modal na tela
    modal.classList.add('aberto'); //acessa a lista de classe e add
    video.setAttribute('src', linkDoVideo);
})

//Objetivo 2
//passo 1 - dar um jeito de pegar o elemento de fechar modal usando js
const botaoFecharModal = document.querySelector('.fechar-modal');

//passo 2 - dar um jeito de identificar quando o usuario clicar no X
botaoFecharModal.addEventListener('click', () => {
    //passo 3 - fechar a modal
    modal.classList.remove('aberto');
    video.setAttribute('src', '')
})




 

