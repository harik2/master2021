
import {Personne} from './poo_js.mjs'
class Etudiant extends Personne{
constructor(nom,prenom){
    super(nom);
    this.prenom=prenom
}
aff(){
    super.aff();
    console.log(this.prenom);
}
}
let p=new Personne('harik')
// p.aff()
let e=new Etudiant('Amira','HARIK')
e.aff()

