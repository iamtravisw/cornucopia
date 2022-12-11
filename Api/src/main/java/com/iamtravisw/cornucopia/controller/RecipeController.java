package com.iamtravisw.cornucopia.controller;

import com.google.cloud.storage.Storage;
import com.iamtravisw.cornucopia.model.*;
import com.iamtravisw.cornucopia.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.Date;
import java.util.List;


@RestController
@RequestMapping("api/recipe")
public class RecipeController {

    @Autowired
    private RecipeRepository recipeRepository;

    @GetMapping("/cuisines")
    public ResponseEntity<?> getCuisines() {
        List<Enum> cuisines = Arrays.asList(Cuisine.values());
        return ResponseEntity.status(HttpStatus.OK).body(cuisines);
    }

    @GetMapping("/temps")
    public ResponseEntity<?> getTemps() {
        List<Enum> temps = Arrays.asList(UnitTemp.values());
        return ResponseEntity.status(HttpStatus.OK).body(temps);
    }

    @GetMapping("/times")
    public ResponseEntity<?> getTimes() {
        List<Enum> times = Arrays.asList(UnitTime.values());
        return ResponseEntity.status(HttpStatus.OK).body(times);
    }

    /*
    @PostMapping("/add")
    public ResponseEntity<?> saveRecipe(@Validated @RequestBody Recipe recipe) {
        Date date = new Date();
        recipe.setAddDate(date);
        recipe.setModDate(date);
        recipeRepository.save(recipe);
        return ResponseEntity.status(HttpStatus.OK).body(recipe);
    }

    @GetMapping("/retrieve/{recipeId}")
    public ResponseEntity<?> getRecipe(@Validated @PathVariable Long recipeId) {
        Recipe storedRecipe = recipeRepository.findByRecipeId(recipeId);
        storedRecipe.getUser().setPassword("******");
        if(storedRecipe.getName() != null){
            return ResponseEntity.status(HttpStatus.OK).body(storedRecipe);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Cannot find recipe.");
        }
    }

    @GetMapping("/retrieve/all/{userId}")
    public ResponseEntity<?> getAllRecipes(@Validated @PathVariable Long userId) {
        List<Recipe> storedRecipe = recipeRepository.findAllRecipesByUserId(userId);

        for (Recipe r: storedRecipe) {
            r.getUser().setPassword("******");
        }

        return ResponseEntity.status(HttpStatus.OK).body(storedRecipe);
    }

    */
}
