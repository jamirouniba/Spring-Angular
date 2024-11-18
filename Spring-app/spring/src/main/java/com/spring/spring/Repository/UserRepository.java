package com.spring.spring.Repository;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.spring.spring.Model.User;

@Repository
public class UserRepository {

    public Optional<User> findByUsername(String username) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findByUsername'");
    }

}
