package com.iamtravisw.cornucopia.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

//@Entity
@Getter
@Setter
@NoArgsConstructor
public class Cuisine {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long cuisineId;

    private String name;

    private String origin;

    private Date modDate;

    private Date addDate;

}
