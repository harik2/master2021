package com.taches.code.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="taches")
public class Tache {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private long id;
private String nom;
private String etat;
public String getEtat() {
	return etat;
}
public void setEtat(String etat) {
	this.etat = etat;
}
public Tache() {
//	super();
}
public Tache(String nom) {
	super();
	this.nom = nom;
}

public String getNom() {
	return nom;
}
public void setNom(String nom) {
	this.nom = nom;
}


}
