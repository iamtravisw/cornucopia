package com.iamtravisw.cornucopia.meal;

import com.iamtravisw.cornucopia.food.Food;
import com.iamtravisw.cornucopia.user.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.List;

//@Entity
@Getter @Setter
@NoArgsConstructor
public class Meal {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long mealId;

    private Food appetizer;

    private Food entree;

    private List<Food> sides;

    private User user;

    private String cuisine;

    private String mealImageUrl;

}
