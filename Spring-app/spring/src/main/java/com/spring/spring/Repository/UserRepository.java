package com.spring.spring.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.spring.spring.Model.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long>{

    public Optional<User> findByUsername(String username);

}
