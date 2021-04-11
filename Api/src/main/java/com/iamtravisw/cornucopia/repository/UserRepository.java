package com.iamtravisw.cornucopia.repository;

import com.iamtravisw.cornucopia.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query(value = "SELECT * FROM USER WHERE USER_ID = ?1", nativeQuery = true)
    User findByUserId(Long userId);

    @Query(value = "SELECT * FROM USER WHERE USER_NAME = ?1", nativeQuery = true)
    User findByUsername(String userName);

    @Query(value = "SELECT * FROM USER WHERE EMAIL = ?1", nativeQuery = true)
    User findByEmailAddress(String emailAddress);

}
