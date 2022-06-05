let titrePage = document.querySelector('title');
titrePage.innerHTML = 'Les tests d\'Arthur';
let titrePageHtml = document.createElement('h1');//Cet element n'existe pas encore dans le DOM
titrePageHtml.innerHTML = 'Arthur manipule le DOM';
document.body.appendChild(titrePageHtml);
let paragraphe1 = document.createElement('p');//on veut creer un paragraphe
paragraphe1.innerHTML= 'la manipulation du DOM semble plus simple lorsqu\'on suit le bon cour';
document.body.appendChild(paragraphe1);
let button = document.createElement('button');
let button1 = document.createElement('button');
button.innerHTML = 'Do';
button1.innerHTML = 'Undo';
document.body.appendChild(button);
document.body.appendChild(button1);

function add(){
    let paragraphe2 = document.createElement('p');
    paragraphe2.id ='para2'
    paragraphe2.innerHTML = 'Apr&eagrave;s avoir ajouter le paragraphe et chang&eacute; de couleur';
    document.body.appendChild(paragraphe2);
    paragraphe2.style.backgroundColor='green';
    paragraphe2.style.color = 'red';

}
function minus(){
    let paragraphe3 = document.getElementById('para2');

    document.body.removeChild(paragraphe3);
}

button.onclick = add;
button1.onclick = minus;