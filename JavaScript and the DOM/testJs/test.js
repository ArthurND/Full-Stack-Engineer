let titrePage = document.querySelector('title');
titrePage.innerHTML = 'Les tests d\'Arthur';
let titrePageHtml = document.createElement('h1');//Cet element n'existe pas encore dans le DOM
titrePageHtml.innerHTML = 'Arthur manipule le DOM';
document.body.appendChild(titrePageHtml);
let paragraphe1 = document.createElement('p');//on veut creer un paragraphe
paragraphe1.innerHTML= 'la manipulation du DOM semble plus simple lorsqu\'on suit le bon cour';
document.body.appendChild(paragraphe1);