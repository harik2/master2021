import React, { useEffect, useState } from "react";
import { Form } from "./Form";
import { Produits } from "./Produits";

const App = () => {
const URL='http://localhost:3200/produits/';
  const all=()=>{
    fetch(URL).then(res=> res.json()).then(produits => setliste(produits) );
  }
useEffect(() => {
  all();
}, []);

const [liste, setliste] = useState([
  { id:1,
    libelle:'hp',
    prix:5000

  },
  { id:2,
    libelle:'dell',
    prix:15000

  }
])
const init={
  id:0,
  libelle:'...',
  prix:0
}
const [current, setcurrent] = useState(init)
const [editing, setediting] = useState(false)

const add =()=>{
  if(!editing){
    // setcurrent({...current,id: parseInt(Math.random()*1000)})
    let cur={...current,id: parseInt(Math.random()*1000)};
    setliste([...liste,cur]);
    fetch(URL,{
      method:'POST',
      headers:{
          'Content-type':'application/json'
      },
      body:JSON.stringify(cur)
  
  });
  }else{
    setliste(liste.map(p=>p.id===current.id? current:p))
    setediting(false)
  }
  setcurrent(init)
}

const del=(id)=>{
setliste(liste.filter(p=>p.id!==id))
}
const edit=(id)=>{
// setliste(liste.filter(p=>p.id!==id))
let c=liste.find(p=>p.id===id);
setcurrent(c )
setediting(true)
}

  return (
    <div className="container text-center">
    
      <Form current={current} setcurrent={setcurrent} editing={editing} add={add} />
      <Produits liste={liste}  del={del} edit={edit} />
      <button onClick={all}>ALL</button>
    </div>
  );
};
export default App;
