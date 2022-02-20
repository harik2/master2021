package com.example.demo.entites;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Produit {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private long id;
private String libelle;
private double prix;
private int qte;
public Produit() {
	super();
	// TODO Auto-generated constructor stub
}
public Produit(String libelle, double prix) {
	super();
	this.libelle = libelle;
	this.prix = prix;
}
public String getLibelle() {
	return libelle;
}
public void setLibelle(String libelle) {
	this.libelle = libelle;
}
public double getPrix() {
	return prix;
}
public void setPrix(double prix) {
	this.prix = prix;
}
@Override
	public String toString() {
		
		return "libelle  : "+libelle+"\nPrix : "+prix;
	}
}
