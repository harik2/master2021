package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.demo.entites.Produit;
import com.example.demo.repositotries.ProduitRepo;

@SpringBootApplication
public class RestApi1Application implements CommandLineRunner {
@Autowired	
ProduitRepo rep;
	
	public static void main(String[] args) {
		SpringApplication.run(RestApi1Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
//		rep.save(new Produit("hp dv 8", 4550));
//		rep.save(new Produit("dell", 7000));
//
//		rep.save(new Produit("sony dv 8", 6550));
//rep.deleteById((long) 1);
	List<Produit> data = rep.findAll();
	System.out.println("Liste des produits "+data);
	}

}
