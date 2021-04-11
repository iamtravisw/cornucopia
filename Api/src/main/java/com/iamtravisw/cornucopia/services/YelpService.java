package com.iamtravisw.cornucopia.services;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.TimeUnit;

public class YelpService {

    private static final HttpClient httpClient = HttpClient.newBuilder()
            .version(HttpClient.Version.HTTP_2)
            .connectTimeout(Duration.ofSeconds(10))
            .build();

    public String requestData(String path){

        HttpRequest request = HttpRequest.newBuilder()
                .GET()
                .uri(URI.create("https://api.yelp.com/v3/"+path))
                .setHeader("Bearer", "8AZyyxTSkYccR7ej_iszp_AC9FWegWhY5quM7fUMbJl6qhExEIoRkn8xFwMEj3yeX_LP0vv70pqX2PsViwWxc1_7rPjt9aEvv-V43k9vH1PUUFHBGqzO_RFmFRArX3Yx")
                .build();

        CompletableFuture<HttpResponse<String>> response =
                httpClient.sendAsync(request, HttpResponse.BodyHandlers.ofString());

        String result = response.toString();

        return result;

    }


}
