package com.taches.code.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.taches.code.entities.Produit;

public interface ProduitRepo extends JpaRepository<Produit, Long> {

}
