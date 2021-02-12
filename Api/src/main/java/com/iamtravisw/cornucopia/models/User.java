package com.iamtravisw.cornucopia.models;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.Id;
import java.util.Date;

@Getter
@Setter
public class User {

    @Id
    private int userId;

    private String userName;

    private String firstName;

    private String lastName;

    private String email;

    private String userImageUrl;

    private Date lastLogin;

    private char premium;

}
