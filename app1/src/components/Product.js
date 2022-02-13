import React from "react";

export const Product = ({produit,prix}) => {
    // const {id,libelle}=props;//desctructuration d'objet
    const {id,libelle}=produit;
  return (
    <tr>
      <td>{id}</td>
      <td>{libelle} : {prix}</td>
    </tr>
  );
};
