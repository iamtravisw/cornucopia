package com.iamtravisw.cornucopia.user;

import com.iamtravisw.cornucopia.security.JwtTokenUtil;
import net.minidev.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;

@RestController
@RequestMapping("api/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @PostMapping("/register")
    public ResponseEntity<?>  saveUser(@Validated @RequestBody User user) {
        String password = user.getPassword();
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String hashedPassword = passwordEncoder.encode(password);
        user.setPassword(hashedPassword);

        // Is the Email or Username already in use?
        User checkEmail = userRepository.findByEmailAddress(user.getEmail());
        User checkUserName = userRepository.findByUsername(user.getUserName());

       if(checkEmail != null){
           return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("This email is already in use");
       } else if(checkUserName != null) {
           return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("This username is already in use");
       } else {
           userRepository.save(user);
           return ResponseEntity.status(HttpStatus.OK).body(user);
       }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Validated @RequestBody User user) {
        String password = user.getPassword();
        User storedUser = userRepository.findByUsername(user.getUserName());
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        boolean passwordMatch = passwordEncoder.matches(password, storedUser.getPassword());

        if(passwordMatch){
            final String token = jwtTokenUtil.generateToken(user);

            JSONObject result = new JSONObject();
            result.put("Bearer", token);
            result.put("User", storedUser);
            Date date = new Date();

            storedUser.setLastLogin(date);
            userRepository.save(storedUser);
            storedUser.setPassword(null);
            return ResponseEntity.status(HttpStatus.OK).body(result);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Password is incorrect");
        }
    }

    @GetMapping("/retrieve/{userId}")
    public ResponseEntity<?> getUser(@Validated @PathVariable Long userId) {
        User storedUser = userRepository.findByUserId(userId);
        storedUser.setPassword("**********");
        if(storedUser.getUserName() != null){
            return ResponseEntity.status(HttpStatus.OK).body(storedUser);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Cannot find user.");
        }
    }

    @PostMapping("/edit/{userId}")
    public ResponseEntity<?> updateUser(@Validated @RequestBody User user) {
        User storedUser = userRepository.findByUserId(user.getUserId());
        User checkUserName = userRepository.findByUsername(user.getUserName());
        if(!storedUser.getUserName().equals(user.getUserName())){
            if(checkUserName != null) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username is already in use.");
            }
            storedUser.setUserName(user.getUserName());
        }
        if(!storedUser.getBiography().equals(user.getBiography())){
            storedUser.setBiography(user.getBiography());
        }
        if(!storedUser.getTagLine().equals(user.getTagLine())){
            storedUser.setTagLine(user.getTagLine());
        }
        userRepository.save(storedUser);
        return ResponseEntity.status(HttpStatus.OK).body(storedUser);
    }
}
