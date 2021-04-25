package com.iamtravisw.cornucopia.controller;

import com.iamtravisw.cornucopia.repository.IngredientRepository;
import com.iamtravisw.cornucopia.model.Unit;
import com.iamtravisw.cornucopia.model.Ingredient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("api/ingredient")
public class IngredientController {

    @Autowired
    private IngredientRepository ingredientRepository;


    @PostMapping("/add")
    public ResponseEntity<?> saveIngredient(@Validated @RequestBody Ingredient ingredient) {

        Date date = new Date();
        ingredient.setAddDate(date);
        ingredient.setModDate(date);
        ingredientRepository.save(ingredient);
        return ResponseEntity.status(HttpStatus.OK).body(ingredient);
    }

    @PutMapping("/edit")
    public ResponseEntity<?> editIngredient(@Validated @RequestBody Ingredient ingredient) {
        Date date = new Date();
        ingredient.setModDate(date);
        ingredientRepository.save(ingredient);
        return ResponseEntity.status(HttpStatus.OK).body(ingredient);
    }

    @GetMapping("/retrieve/{ingredientId}")
    public ResponseEntity<?> getIngredient(@Validated @PathVariable Long ingredientId) {
        Ingredient storedIngredient = ingredientRepository.findByIngredientId(ingredientId);
        storedIngredient.getUser().setPassword("******");
        if(storedIngredient.getIngredientName() != null){
            return ResponseEntity.status(HttpStatus.OK).body(storedIngredient);
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Cannot find ingredient.");
        }
    }

    @GetMapping("/retrieve/all/{userId}")
    public ResponseEntity<?> getAllIngredients(@Validated @PathVariable Long userId) {
        List<Ingredient> storedIngredient = ingredientRepository.findAllIngredientsByUserId(userId);

        for (Ingredient i: storedIngredient) {
            i.getUser().setPassword("******");
        }

        return ResponseEntity.status(HttpStatus.OK).body(storedIngredient);
    }

    @DeleteMapping("/delete/{ingredientId}")
    public ResponseEntity<?> deleteIngredient(@Validated @PathVariable Long ingredientId) {
        ingredientRepository.deleteById(ingredientId);
        return ResponseEntity.status(HttpStatus.OK).body("Ingredient " +ingredientId+ " successfully deleted.");
    }

    @GetMapping("/units")
    public ResponseEntity<?> getUnits() {
        List<Enum> units = Arrays.asList(Unit.values());
        return ResponseEntity.status(HttpStatus.OK).body(units);
    }

}
