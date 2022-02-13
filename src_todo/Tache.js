import React from 'react';

export const Tache = ({tache,del,edit}) => {
  return <li onDoubleClick={()=>edit(tache.id)} className='list-group-item d-flex'>{tache.id}:  {tache.text} <button onClick={()=>del(tache.id)} className='ms-auto btn btn-danger'>X</button>
  <button className='btn btn-primary' onClick={()=>edit(tache.id)}>Edit</button>
  
  </li>;
};
