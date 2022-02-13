import React, { useState } from "react";

export const Counter = () => {
    let [nombre, setNombre] = useState(0)
const up=()=>{
  // nombre=nombre+1;
setNombre(nombre+1);
}
const down=()=>{
  // nombre=nombre+1;
setNombre(nombre-1);
}
  return (
    <div>
      <h1 className="text-danger text-center border">{nombre}</h1>
      <button onClick={up}  >+</button>
      <button onClick={down}  >-</button>
    </div>
  );
};
