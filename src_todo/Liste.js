import React from 'react';
import { Tache } from './Tache';

export const Liste = ({taches,del,edit}) => {
  return <div>
<ul className='list-group'>
    { 
    taches.map(t=><Tache tache={t} del={del} edit={edit} key={t.id}/>)
    }
   
</ul>

  </div>;
};
