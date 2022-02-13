// let produit={
//     id:1,
//     title:'hp',
//     price:5000
// };
console.log("AAA");
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((produits) => {
  let   produtidiv=produits.map((p) => {
      return `<div class="col-md-3 border text-center">
                <img src="${p.image}" alt="" class="img-fluid" style="height:300px">
                <h3>${p.title}</h3>
                <h3>${p.price}</h3>
              </div>`;
    });

    let contenuHTML=produtidiv.join("");
  let row=  document.querySelector('.row');
row.innerHTML=contenuHTML;
  })
  .catch((err) => console.log("ERREUR", err));
// console.log('fetch',reponse);
console.log("BBB");
console.log("produit 1 ");
// console.log('produit 2 ',produit);
