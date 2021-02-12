package com.iamtravisw.cornucopia.controllers;

import com.iamtravisw.cornucopia.models.User;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    public User CreateUser() {

        User user = new User();

        return user;
    }
}
