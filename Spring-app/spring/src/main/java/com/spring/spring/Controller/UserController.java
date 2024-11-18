package com.spring.spring.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.spring.Model.LoginRequest;
import com.spring.spring.Model.LoginResponse;
import com.spring.spring.service.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("api/v1")
@CrossOrigin
public class UserController {
    
    private final UserService  userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        LoginResponse response = new LoginResponse();
        response.setToken("token_details");

        String resulString = userService.login(request);
        return new ResponseEntity<>(response,HttpStatus.CREATED);
    }
    

}
