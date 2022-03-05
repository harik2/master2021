package com.taches.code.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.taches.code.entities.Category;

public interface CategoryRepo  extends JpaRepository<Category, Long> {

}
