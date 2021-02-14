package com.iamtravisw.cornucopia.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.Query;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public User saveUser(@Validated @RequestBody User user) {
        String password = user.getPassword();
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String hashedPassword = passwordEncoder.encode(password);
        user.setPassword(hashedPassword);
        return userRepository.save(user);
    }

    @PostMapping("/login")
    public User login(@Validated @RequestBody User user) {
        String password = user.getPassword();
        User storedUser = userRepository.findByEmailAddress(user.getEmail());
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        boolean isPasswordMatch = passwordEncoder.matches(password, storedUser.getPassword());
        if(isPasswordMatch){
            System.out.println("Logging in...");
            return user;
        } else {
            System.out.println("Password is incorrect.");
            return null;
        }
    }

    @GetMapping("/{id}")
    public Optional<User> findUserById(@PathVariable(value = "id") long id){
        return userRepository.findById(id);
    }

}
