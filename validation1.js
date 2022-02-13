
function validerMotDePasse(){
    //selectionner les elements html dans l'arbre DOM (document object model) 
     let mdp=document.getElementById('mdp') ;   
     let conf=document.querySelector('#conf') ;
     console.log(mdp.value.length,conf);
     if (mdp.value.length<3) {
         console.log('Erreur : nombre de caractere est < 3');
        } else if(mdp.value!=conf.value){
         console.log('Erreur : les 2 mdp ne correspondent pas ');
     }  else{
        var f= document.querySelector('.monform');
        f.submit();

     }
    //  f.submit();
}