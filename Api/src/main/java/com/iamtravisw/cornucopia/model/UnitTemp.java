package com.iamtravisw.cornucopia.model;

public enum UnitTemp {
    FH("FAHRENHEIT"),
    C("CELSIUS");

    public final String label;

    UnitTemp(String label) {
        this.label = label;
    }
}