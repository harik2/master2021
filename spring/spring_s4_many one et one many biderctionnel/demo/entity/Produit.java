package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Produit {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private long id;
private String libelle;
private double prix;
@ManyToOne(fetch = FetchType.LAZY,optional = true)
@JoinColumn(name="category_id")
@OnDelete(action = OnDeleteAction.CASCADE)
@JsonIgnore
private Category category;
public void setPrix(double prix) {
	if (prix>0) {
		this.prix = prix;
	}else {
		System.out.println("Erreur");
	}
	
}



}
