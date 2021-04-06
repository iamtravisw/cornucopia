package com.iamtravisw.cornucopia.ingredient;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

@Repository
public interface IngredientRepository extends JpaRepository<Ingredient, Long> {

    @Query(value = "SELECT * FROM INGREDIENT WHERE INGREDIENT_ID = ?1", nativeQuery = true)
    Ingredient findByIngredientId(Long ingredientId);

    @Query(value = "SELECT * FROM INGREDIENT WHERE USER_USER_ID = ?1", nativeQuery = true)
    List<Ingredient> findAllIngredientsByUserId(Long userId);

}
