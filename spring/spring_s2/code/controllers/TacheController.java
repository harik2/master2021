package com.taches.code.controllers;

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

import com.taches.code.entities.Tache;
import com.taches.code.repositories.TacheRepository;

@RestController
@RequestMapping("/taches")
public class TacheController {
@Autowired	
TacheRepository tr;
	@PostMapping("/")
	public void add(@RequestBody Tache t) {
	tr.save(t);
	}
	@GetMapping("/")
	public  List<Tache> getTaches() {
		return tr.findAll();
	}
	@GetMapping("/{id}")
	public  Tache showTache(@PathVariable("id") long id) {
		return tr.findById(id).get();
	}
	
	@PutMapping("/{id}")
	public Tache update(@RequestBody Tache tache, @PathVariable("id") long id) {
	Tache t=tr.findById(id).get();
	t.setNom(tache.getNom());
	t.setEtat(tache.getEtat());
	tr.save(t);
		return t;
	}
	
	@DeleteMapping("/{id}")
	public void supprimer(@PathVariable("id") long id) {
		tr.deleteById(id);
		
	}
}
