package com.taches.code.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.taches.code.entities.Category;
import com.taches.code.repos.CategoryRepo;

@RestController
@RequestMapping("/categories")
public class CategoryController {
@Autowired
private CategoryRepo cr;
@GetMapping({"","/","/abdou"})
	public List<Category> getCats(){
		return cr.findAll();
	}
	
}
