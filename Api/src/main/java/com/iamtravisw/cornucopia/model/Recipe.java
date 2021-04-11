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
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long recipeId;

    private String name;

    @OneToMany
    private List<Ingredient> ingredients;

    private String imageUrl;

    private Date modDate;

    private Date addDate;

}
