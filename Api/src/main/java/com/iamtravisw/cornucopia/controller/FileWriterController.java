package com.iamtravisw.cornucopia.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.cloud.storage.BlobId;
import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Storage;
import com.iamtravisw.cornucopia.model.Ingredient;
import com.iamtravisw.cornucopia.model.User;
import com.iamtravisw.cornucopia.repository.IngredientRepository;
import com.iamtravisw.cornucopia.repository.UserRepository;
import net.minidev.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Objects;

import org.apache.commons.io.FilenameUtils;

@RestController
@RequestMapping("api/image")
public class FileWriterController {

    @Autowired
    private Storage storage;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private IngredientRepository ingredientRepository;

    private final String bucket = "cornucopia-app";
    private final String googleStoragePath = "https://storage.googleapis.com/cornucopia-app/";
    private final String pattern = "yyyyMMdd-HHmmss";
    private final SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
    private final String date = simpleDateFormat.format(new Date());

    @PostMapping("/profile/{userId}")
    @ResponseBody
    public ResponseEntity<?> addEditProfilePhoto(@PathVariable Long userId, @RequestParam("file")MultipartFile file) throws IOException {
        User storedUser = userRepository.findByUserId(userId);
        String fileName = "profile_userId-"+userId+"_"+date+"_"+file.getOriginalFilename();
        BlobId blobId = BlobId.of(bucket, fileName);
        BlobInfo blobInfo = BlobInfo.newBuilder(blobId).build();
        byte[] data = file.getBytes();
        if(storedUser.getUserImageUrl() != null){
            String savedFileName = FilenameUtils.getName(storedUser.getUserImageUrl());
            BlobId blobIdToDelete = BlobId.of(bucket, savedFileName);
            try {
                storage.delete(blobIdToDelete);
            } catch(Exception e) {
                System.out.println(e);
            }
        }
        storedUser.setUserImageUrl(googleStoragePath+fileName);
        storedUser.setModDate(new Date());
        try {
            userRepository.save(storedUser);
            storage.create(blobInfo, data);
        } catch(Exception e) {
            ResponseEntity.status(HttpStatus.OK).body(e);
        }
        return ResponseEntity.status(HttpStatus.OK).body(storedUser);
    }

    @PostMapping("/ingredient/{ingredientId}")
    @ResponseBody
    public ResponseEntity<?> addEditIngredientPhoto(@PathVariable Long ingredientId, @RequestParam("file")MultipartFile file) throws IOException {
        Ingredient storedIngredient = null;
        String fileName = "ingredient_"+date+"_"+file.getOriginalFilename();
        BlobId blobId = BlobId.of(bucket, fileName);
        BlobInfo blobInfo = BlobInfo.newBuilder(blobId).build();
        byte[] data = file.getBytes();
        if(ingredientId != 0) {
            storedIngredient = ingredientRepository.findByIngredientId(ingredientId);

            if(storedIngredient.getImageUrl() != null){
                String savedFileName = FilenameUtils.getName(storedIngredient.getImageUrl());
                BlobId blobIdToDelete = BlobId.of(bucket, savedFileName);
                try {
                    storage.delete(blobIdToDelete);
                } catch(Exception e) {
                    System.out.println(e);
                }
                storedIngredient.setImageUrl(googleStoragePath+fileName);
                storedIngredient.setModDate(new Date());
                ingredientRepository.save(storedIngredient);
            }
        }
        try {
            storage.create(blobInfo, data);
        } catch(Exception e) {
            ResponseEntity.status(HttpStatus.OK).body(e);
        }
        String jsonString = "{\"imageUrl\": \""+googleStoragePath+fileName+"\"}";
        ObjectMapper mapper = new ObjectMapper();
        JsonNode actualObj = mapper.readTree(jsonString);
        return ResponseEntity.status(HttpStatus.OK).body(actualObj);
    }
}
