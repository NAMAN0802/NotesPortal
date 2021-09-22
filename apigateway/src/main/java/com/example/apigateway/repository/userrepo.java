package com.example.apigateway.repository;

import com.example.apigateway.model.user;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestMapping;

@Repository
public interface userrepo extends MongoRepository<user,String> {
}
