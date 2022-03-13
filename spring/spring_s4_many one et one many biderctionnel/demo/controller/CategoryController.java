package com.example.demo.controller;

import java.util.ArrayList;
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
import com.example.demo.entity.CategoryRepo;
import com.example.demo.entity.Produit;
import com.example.demo.entity.ProduitRepo;

@RestController
@RequestMapping("/categories/")
public class CategoryController {
@Autowired
private CategoryRepo cr;
@Autowired
private ProduitRepo pr;
@GetMapping({"","/"})
public List<Category> all() {

	return cr.findAll();
}
@DeleteMapping("/{id}")
public void supprimer(@PathVariable long id) {
	cr.deleteById(id);
}
@GetMapping("/{id}")
public Category get(@PathVariable long id) {
	return cr.findById(id).get();
}
@PostMapping("/")
void add(@RequestBody Category categorie) {
	cr.save(categorie);
}
@PutMapping("/{id}")
void add(@RequestBody Category categorie, @PathVariable long id) {
	cr.save(categorie);
}
@GetMapping("{id}/produits")
public List<Produit> produits(@PathVariable("id") long id){
Category c=	cr.findById(id).get();
//	List<Produit> p=new ArrayList<>();
//	p=pr.findByCategoryId(id);
	return c.getProduits();
}
@DeleteMapping("{id}/produits")
public void delproduits(@PathVariable("id") long id){
Category c=	cr.findById(id).get();
	List<Produit> p=new ArrayList<>();
//	c.getProduits().forEach(x->pr.deleteBy(x));
	p=pr.findByCategoryId(id);
	if (!p.isEmpty()) {
	p.forEach(e-> {	
		pr.delete(e );
	});
	}
}
@GetMapping("mc/{mc}")
public List<Category> like(@PathVariable("mc") String mc){
	return cr.findByNomContainingOrderByIdDesc(mc);
}
}

