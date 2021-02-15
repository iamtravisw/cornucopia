package com.iamtravisw.cornucopia.user;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter @Setter @NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long userId;

    private String userName;

    private String firstName;

    private String lastName;

    private String email;

    private String userImageUrl;

    private Date lastLogin;

    private char premium;

    private String password;

    private String phone;

}