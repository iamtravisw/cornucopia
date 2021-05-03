package com.iamtravisw.cornucopia.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class ComponentIngredient {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long ingredientId;

    private String ingredientName;

    private String imageUrl;

    @Enumerated(EnumType.STRING)
    private UnitMeasurement unitMeasurement;

    private Double quantity;

    @JoinColumn
    @OneToOne
    private User user;

    private Date modDate;

    private Date addDate;

}
