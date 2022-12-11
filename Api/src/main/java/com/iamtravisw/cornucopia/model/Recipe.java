package com.iamtravisw.cornucopia.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long recipeId;

    private String name;

    private Cuisine cuisine;

    private Double prepTime;

    @Enumerated(EnumType.STRING)
    private UnitTime prepTimeUnits;

    private Double cookTime;

    @Enumerated(EnumType.STRING)
    private UnitTime cookTimeUnits;

    private Double temp;

    @Enumerated(EnumType.STRING)
    private UnitTemp tempUnits;

    private String yield;

    @JoinColumn
    @OneToMany(cascade=CascadeType.ALL)
    private List<Ingredient> ingredients;

    @JoinColumn
    @OneToMany(cascade=CascadeType.ALL)
    private List<Step> steps;

    private String imageUrl;

    private String equipment;

    private String notes;

    @JoinColumn
    @OneToMany(cascade=CascadeType.ALL)
    private List<Tag> tags;

    @JoinColumn
    @OneToOne
    private User user;

    private Date modDate;

    private Date addDate;

}
