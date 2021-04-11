package com.iamtravisw.cornucopia.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

//@Entity
@Getter
@Setter
@NoArgsConstructor
public class Meal {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long mealId;

    @OneToOne
    @JoinColumn
    private Food appetizer;

    @OneToOne
    @JoinColumn
    private Food entree;

    @OneToMany
    private List<Food> sides;

    @OneToOne
    @JoinColumn
    private User user;

    @OneToMany
    private List<Cuisine> cuisine;

    private String imageUrl;

    private Date modDate;

    private Date addDate;

}
