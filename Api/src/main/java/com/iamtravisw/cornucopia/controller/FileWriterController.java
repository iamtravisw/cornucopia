package com.iamtravisw.cornucopia.controller;

import com.google.cloud.storage.BlobId;
import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Storage;
import com.iamtravisw.cornucopia.model.User;
import com.iamtravisw.cornucopia.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Optional;

@RestController
@RequestMapping("api/file")
public class FileWriterController {

    @Autowired
    private Storage storage;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/write/image/{userId}")
    @ResponseBody
    public ResponseEntity<?> writeFileToBucket(@PathVariable Long userId, @RequestParam("file")MultipartFile file) throws IOException {
        User storedUser = userRepository.findByUserId(userId);
        String pattern = "yyyy-MM-dd HH:mm:ss";
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
        String date = simpleDateFormat.format(new Date());
        String fileName = date+"_userId"+userId+"_"+file.getOriginalFilename();
        storedUser.setUserImageUrl("https://storage.googleapis.com/cornucopia-app/"+fileName);
        BlobId blobId = BlobId.of("cornucopia-app", fileName);
        BlobInfo blobInfo = BlobInfo.newBuilder(blobId).build();
        byte[] data = file.getBytes();
        storage.create(blobInfo, data);
        userRepository.save(storedUser);
        return ResponseEntity.status(HttpStatus.OK).body(storedUser);
    }
}
