import React from "react";
import { Product } from "./Product";

export const TableProducts = ({liste}) => {
  
  return (
    <table className="table table-dark table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Libelle</th>
        </tr>
      </thead>
      <tbody>
     {
            liste.map(p=><Product produit={p} prix="100"/> )
     }
   
      </tbody>
    </table>
  );
};
