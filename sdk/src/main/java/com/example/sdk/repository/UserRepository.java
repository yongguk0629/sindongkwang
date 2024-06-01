package com.example.sdk.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.sdk.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {    
    User findUserByEmail(String email);
} 
