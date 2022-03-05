package com.taches.code.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.taches.code.entities.Produit;
import com.taches.code.repos.ProduitRepo;

@RestController
@RequestMapping("/produits")
public class ProduitController {
	@Autowired
	ProduitRepo pr;
@GetMapping("")
public List<Produit> getProduits(){
	return pr.findAll();
}
	
}
