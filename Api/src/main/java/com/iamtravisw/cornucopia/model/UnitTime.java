package com.iamtravisw.cornucopia.model;

public enum UnitTime {
    SECS("Seconds"),
    MINS("Minutes"),
    HRS("Hours");

    public final String label;

    UnitTime(String label) {
        this.label = label;
    }
}