const URL = "http://localhost:3200/produits";
// console.log('A')
let del = (id) => {
  fetch(URL + "/" + id,{method:'delete'}).then(rsp=>all());
//   console.log('suppression');
};
let ajouter=(produit)=>{
    // let o={libelle: 'hp dv 7',prix: 8000};
fetch(URL,{
    method:'POST',
    headers:{
        'Content-type':'application/json'
    },
    body:JSON.stringify(produit)

}).then(resp=>all())
}
let all=()=>{
    document.querySelector("tbody").innerHTML=""
    fetch(URL)
  .then((reponse) => reponse.json())
  .then((produits) => {
    produits.forEach((p) => {
      document.querySelector("tbody").innerHTML += `  <tr>
         <td>${p.id}</td>
         <td>${p.libelle}</td>
         <td>${p.prix}</td>
         <td>${p.qtestock}</td>
         <td><a href="#" onclick="del(${p.id})"> S</a> </td>
       </tr>`;
    });
  });
}
// console.log('C')
document.querySelector('button').addEventListener('click',()=>{
let libelle=document.getElementById('libelle');
let prix=document.getElementById('prix');
let qte=document.getElementById('qtestock');
let produit={libelle:libelle.value,prix: prix.value,qtestock:qte.value};
ajouter(produit);
console.log("objet en js",produit,'produit stringify (format json)',JSON.stringify(produit))
});
all();