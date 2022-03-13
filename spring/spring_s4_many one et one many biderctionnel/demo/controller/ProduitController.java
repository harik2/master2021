package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Category;
import com.example.demo.entity.Produit;
import com.example.demo.entity.ProduitRepo;

@RestController
@RequestMapping("produits")
public class ProduitController {
@Autowired
 ProduitRepo pr;
	@GetMapping("/")
	public List<Produit> produits() {
		return  pr.findAll();
	}
	@GetMapping("/{id}")
	public Produit getProduit(@PathVariable("id") long id) {
		return pr.findById(id).get();
	}
	@PostMapping("/")
	public void add(@RequestBody Produit p) {
	
	
		pr.save(p);
	}
	
	@PutMapping("/{id}")
	public void update(@RequestBody Produit produit, @PathVariable("id") long id) {
		Produit p=pr.findById(id).get();
		p.setLibelle(produit.getLibelle());
		p.setPrix(produit.getPrix());
		
		pr.save(p);
	}
	@DeleteMapping("/{id}")
	public void del(@PathVariable("id") long id) {
		try {
			pr.deleteById(id);
		} catch (Exception e) {
			System.out.println("erreur"+e.getLocalizedMessage());
		}
		
	}
	@GetMapping("{id}/category")
public Category cat(@PathVariable("id") long id) {
		return pr.findById(id).get().getCategory();
	}
	@GetMapping("/lib/{libelle}")
	public List<Produit> getlib(@PathVariable("libelle") String libelle){
	return pr.findByLibelle(libelle);	
	}
	@GetMapping("/mc/{mc}")
	public List<Produit> getlibs(@PathVariable("mc") String mc){
	return pr.findByLibelleContaining(mc);	
	}
//	/mc/h/prix/100
	@GetMapping("/mc/{mc}/prix/{prix}")
	public List<Produit> getlibsp(@PathVariable("mc") String mc,@PathVariable("prix") double prix){
	return pr.findByLibelleContainingAndPrixLessThan(mc,prix);	
	}
}
