package com.iamtravisw.cornucopia.repository;

import com.iamtravisw.cornucopia.model.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecipeRepository extends JpaRepository<Recipe, Long> {

    @Query(value = "SELECT * FROM RECIPE WHERE RECIPE_ID = ?1", nativeQuery = true)
    Recipe findByRecipeId(Long recipieId);

    @Query(value = "SELECT * FROM RECIPE WHERE USER_USER_ID = ?1", nativeQuery = true)
    List<Recipe> findAllRecipesByUserId(Long userId);

}
