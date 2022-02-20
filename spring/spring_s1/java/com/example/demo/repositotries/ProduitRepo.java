package com.example.demo.repositotries;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entites.Produit;

public interface ProduitRepo extends JpaRepository<Produit, Long> {

}
