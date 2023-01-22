let Title = document.querySelector("#Title"); // Récupère le h1 de mon HTML en lui donnant la valeur "Title".

const Video = document.querySelector(".video"); // Récupère la vidéo de mon HTML.

const Audio = document.querySelector(".audio"); // Récupère l'audio de mon HTML

Video.muted = true;// Je mute la vidéo pour la lancer au début de la vidéo, plusieurs sites m'ont expliqués que c'est la seule manière d'utiliser la fonction autoplay.

Video.play();// Je ne sais pas si il s'agit de mon navigateur personnel mais l'HTML de la vidéo ne veut pas fonctionner alors j'ai utilisé ce code, il doit être inutile pour certains navigateurs.

setInterval(() => { // Déclare un interval de 50 millisecondes

const random = Math.floor(Math.random() * Title.innerHTML.length); // Je déclare une constante nommé Random qui utilise une fonction aléatoire arrondie multiplié par le nombre de caractères présent dans la constante Title.

Title.innerHTML = Title.innerHTML.replace( // Je remplace le HTML de Title pour remplacer un caractère aléatoire par lui-même en majuscule.
   Title.innerHTML[random], // Sélectionne un caractère aléatoire
    Title.innerHTML[random].toUpperCase()); // Le remplace par lui-même en majuscule.

setTimeout(() => { // 100 millisecondes dans l'interval, un timeout permet de remplacer les majuscules par les minuscules grâce au code inverse.
Title.innerHTML = Title.innerHTML.replace( // Je remplace le HTML de Title pour remettre en minuscule les caractères majuscules.
    Title.innerHTML[random], // Sélectionne un caractère aléatoire.
         Title.innerHTML[random].toLowerCase()); // Le rend minuscule si il est majuscule.

},
100);
}, 
50);

const True = ["VOUs", "êtES", "Déjà", "VeNu", "iCi"]; // Je déclare un tableau nommé True avec une phrase dedans.

function Randomizer(array) {
    True.sort(() => Math.floor(Math.random() - 0.5)); // Je crée une fonction qui va me permettre de mélanger les strings dans le tableau avec .sort qui mélangera de façon aléatoire avec un Math.random.
}

setTimeout(() => { // Au bout de 13 secondes, ce code se lance.
    setInterval(() => { // Le code se relance ensuite toutes les 1 secondes.
        Randomizer(True); // Active la fonction Randomizer sur le tableau True.
            Title.innerHTML = ""; // Je vide le HTML de Title pour ne pas avoir à utiliser la fonction replace.
                for (let i = 0; i < True.length; i++) { // Je lance une boucle qui compilera tous les élements à l'intérieur du tableau.
                Title.innerHTML += True[i] + "_"} // Puis je remplace le HTML de Title par un élement dans l'ordre du tableau sauf que la tableau a été mélangé aléatoirement donc on peut dire "Par un élement aléatoire du tableau" ainsi qu'un underscore pour faire plus creepy.
    }, 1000);
}, 
13000);

Title.addEventListener("animationend", (Noclip) => { // Je déclare que lorsque de Title se termine alors j'active ce code.
    Title.classList.remove("WHITE");// Je retire la classe qui rend le Title blanc.
    Title.classList.add("Shadow");// J'ajoute la classe Shadow qui va rajouter une ombre au texte.
    Title.style.color = "#e4e6a8";// Je change directement en JS la couleur du text de Title.
    document.body.style.backgroundImage = "url('jch5zpef8pg31.jpg')";// Remplace la vidéo par une image de fond.
    Video.remove();// Retire la vidéo du HTML de force.
    document.body.addEventListener("mouseover", (Son) => { // Lorsque l'utilisateur bouge sa souris sur l'écran alors le son se lance. Problème, certains navigateurs obligent une interaction click sur la page pour que le son soit autorisé, donc il se peut que ce code ne fonctionne pas.
        Audio.play();
    })
})