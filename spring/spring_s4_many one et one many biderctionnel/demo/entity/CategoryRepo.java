package com.example.demo.entity;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepo extends JpaRepository<Category, Long> {
List<Category> findByNomContainingOrderByIdDesc(String mc);
}
