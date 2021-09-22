package com.example.userlogin.repository;

import com.example.userlogin.model.user;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface userrepo extends MongoRepository<user,String> {

    @Query("{'userid':?0}")
    user findByUserId(String userid);
}
