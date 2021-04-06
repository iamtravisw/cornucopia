package com.iamtravisw.cornucopia.user;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long userId;

    @Size(min = 2, max = 20, message = "Username must be between 2 and 20 characters")
    private String userName;

    private String firstName;

    private String lastName;

    @Email(message = "Email should be valid")
    private String email;

    private String userImageUrl;

    private Date lastLogin;

    private char premium;

    private String password;

    private String phone;

    private String tagLine;

    private String biography;

    private Date modDate;

    private Date addDate;

}