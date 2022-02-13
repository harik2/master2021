import React from "react";

export const Form = ({tacheform,add,settacheform,editing}) => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Tache :
        </label>
        <input type="text" className="form-control" value={tacheform.text} onChange={(e)=>settacheform({...tacheform,text:e.target.value})}  />{tacheform.id}
        <button type="button" className="btn btn-primary" onClick={add} >{!editing? "Ajouter":"Modifier"}</button>
      </div>
    </form>
  );
};
