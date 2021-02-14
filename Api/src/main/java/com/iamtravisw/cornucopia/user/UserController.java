package com.iamtravisw.cornucopia.user;

import com.iamtravisw.cornucopia.security.JwtTokenUtil;
import net.minidev.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @PostMapping("/register")
    public User saveUser(@Validated @RequestBody User user) {
        String password = user.getPassword();
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String hashedPassword = passwordEncoder.encode(password);
        user.setPassword(hashedPassword);
        return userRepository.save(user);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Validated @RequestBody User user) {

        String password = user.getPassword();
        User storedUser = userRepository.findByEmailAddress(user.getEmail());
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        boolean passwordMatch = passwordEncoder.matches(password, storedUser.getPassword());

        if(passwordMatch){
            final String token = jwtTokenUtil.generateToken(user);

            JSONObject result = new JSONObject();
            result.put("Bearer ", token);
            result.put("userId", storedUser.getUserId());

            return ResponseEntity.status(HttpStatus.OK).body(result);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Password is incorrect.");
        }
    }
}
