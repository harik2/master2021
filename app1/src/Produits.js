import React from 'react'
import { Produit } from './Produit'

export const Produits = ({liste,del,edit}) => {
    return (
       <table className='table table-striped'>
           <thead>
               <tr>
                   <th>id</th>
                   <th>libelle</th>
                   <th>prix</th>
               </tr>
           </thead>
           <tbody>
               { 
               liste.map(p=><Produit produit={p} del={del} edit={edit}/>)
               }
           
           </tbody>
       </table>
    )
}
