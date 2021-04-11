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
public class Ingredient {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long ingredientId;

    private String ingredientName;

    private Boolean atHome;

    private String imageUrl;

    @Enumerated(EnumType.STRING)
    private Unit unit;

    private Double quantity;

    private Double warningLow;

    private String note;

    @JoinColumn
    @OneToOne
    private User user;

    private Date modDate;

    private Date addDate;

}
