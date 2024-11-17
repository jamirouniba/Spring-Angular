package com.spring.spring.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFound extends RuntimeException {
    
    @SuppressWarnings("unused")
    private static final long serialVerionUID = 1L;

    public ResourceNotFound (String Message){ super(Message);    }

     

}
