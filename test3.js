// "use strict";
class Personne {
  constructor() {
    this.nom = "init";
  }
   aff()=>{
      console.log('aff',this)
   }
}

let p=new Personne();
p.aff();
const a=p.aff;
a();