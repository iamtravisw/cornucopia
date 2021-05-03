package com.iamtravisw.cornucopia.controller;

import com.google.cloud.storage.Storage;
import com.iamtravisw.cornucopia.model.Ingredient;
import com.iamtravisw.cornucopia.model.Recipe;
import com.iamtravisw.cornucopia.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import java.util.Date;


@RestController
@RequestMapping("api/recipe")
public class RecipeController {

    @Autowired
    private RecipeRepository recipeRepository;

    @PostMapping("/add")
    public ResponseEntity<?> saveIngredient(@Validated @RequestBody Recipe recipe) {
        Date date = new Date();
        recipe.setAddDate(date);
        recipe.setModDate(date);
        recipeRepository.save(recipe);
        return ResponseEntity.status(HttpStatus.OK).body(recipe);
    }

}
