package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
//@Table("categorie")
public class Category {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
private long id;
//	@Column(name = "nom",length = 55)
private String nom ;
	
@OneToMany(mappedBy="category")
//@JsonIgnore
private java.util.List<Produit> produits;


}
