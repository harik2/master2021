// "use strict"
//les objets 
let hp={
    libelle:'hp dv 6',
    prix: 3000,
    afficher :function(){
        console.log('libelle est '+this.libelle+' le prix est '+this.prix);
    }
}
let dell={
    libelle:'dell vostro',
    prix: 5000,
    afficher :function(){
        console.log('libelle est '+this.libelle+' le prix est '+this.prix);
    }
}

// console.log('hp',hp);
hp.afficher();
const afficherCopie=hp.afficher.bind(hp);
const afficherCopie2=hp.afficher;
afficherCopie();
afficherCopie2();
class Produit{

constructor(libelle,prix){
    this.libelle=libelle;
    
    this.prix=prix;
    this.afficher=this.afficher.bind(this);

}
afficher(){
    console.log('libelle est '+this.libelle+', prix est '+this.prix)
}

    
}

let sony=new Produit("sony vaio",5000);
console.log('sony',sony);
sony.afficher();
let hp2=new Produit("hp dv7",3000);
hp2.afficher();
const afficherHP=hp2.afficher;
afficherHP();
