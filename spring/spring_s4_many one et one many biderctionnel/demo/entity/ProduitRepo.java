package com.example.demo.entity;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface ProduitRepo  extends JpaRepository<Produit, Long>{
public List<Produit> findByCategoryId(long id);
public List<Produit> findByLibelle(String libelle);
public List<Produit> findByLibelleContaining(String mc);
public List<Produit> findByLibelleContainingAndPrixLessThan(String mc,double prix);

}
