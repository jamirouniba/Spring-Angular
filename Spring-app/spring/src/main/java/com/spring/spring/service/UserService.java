package com.spring.spring.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.spring.spring.Model.LoginRequest;
import com.spring.spring.Model.User;

import com.spring.spring.Repository.UserRepository;

@Service
public class UserService {

     private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public String login(LoginRequest request) {

        Optional<User> users = userRepository.findByUsername(request.getUsername());

        if (users.isPresent()){
            return "Users details found";
        }else{
            return "Users details not found";
        }
       
    }

}
