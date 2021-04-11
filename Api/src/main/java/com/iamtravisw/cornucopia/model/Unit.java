package com.iamtravisw.cornucopia.model;

public enum Unit {
    tsp("TEASPOON"),
    Tbsp("TABLESPOON"),
    c("CUP"),
    qt("QUART"),
    gal("GALLON"),
    oz("OUNCE"),
    lb("POUND"),
    pt("PINT"),
    g("GRAM"),
    fl("FLUID OUNCES"),
    ml("MILLILITER"),
    L("LITER"),
    kg("KILOGRAM"),
    p("PINCH"),
    Qty("QUANTITY");

    public final String label;

    Unit(String label) {
        this.label = label;
    }
}