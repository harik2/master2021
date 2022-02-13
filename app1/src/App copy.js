import React, { useState } from "react";
import { Form } from "./Form";
import { Produits } from "./Produits";

const App = () => {
//   const [btn, setbtn] = useState('Ajouter')
//   const [current, setCurrent] = useState(  {
//     id: 0,
//     libelle: "..",
//     prix: 0,
//   })
//   const [liste, setliste] = useState([
//     {
//       id: 1,
//       libelle: "sony",
//       prix: 3000,
//     },
//     {
//       id: 2,
//       libelle: "hp",
//       prix: 5000,
//     },
//     {
//       id: 3,
//       libelle: "dell",
//       prix: 8000,
//     },
//     {
//       id: 4,
//       libelle: "dell s9",
//       prix: 9000,
//     },
//   ]);
//   const add = (produit) => {
//     if(btn==='Ajouter'){
//       setliste([...liste, produit]);

//     }else{
//       console.log('modifier',produit);
//   let listeCopie=[...liste];
//  let index= listeCopie.findIndex(p=>p.id===produit.id)
//  listeCopie[index]=produit;
//  setliste(listeCopie);
//  setbtn('Ajouter')
//  setCurrent({id:0,libelle:'',prix:0});
//     // setliste(liste.map(p=> (p.id===produit.id)?produit:p ));
//     }
    
//   };
//   const del = (id) => {
//     setliste(liste.filter((p) => p.id !== id));
//   };
// const edit=(id)=>{
//   let c=liste.find(p=> p.id===id);
//   console.log('edit',c)
// setCurrent(c);
// setbtn('Modifier');
// }
  return (
    <div className="container text-center">
      ok
      <Form add={add} current={current} btn={btn} setCurrent={setCurrent}/>
      <Produits liste={liste} del={del} edit={edit} />
    </div>
  );
};
export default App;
