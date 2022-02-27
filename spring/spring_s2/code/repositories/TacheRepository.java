package com.taches.code.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.taches.code.entities.Tache;

public interface TacheRepository extends JpaRepository<Tache, Long> {

}
