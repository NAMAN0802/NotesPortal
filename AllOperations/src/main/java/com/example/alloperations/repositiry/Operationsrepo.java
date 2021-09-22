package com.example.alloperations.repositiry;

import com.example.alloperations.model.Notes;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Operationsrepo extends MongoRepository<Notes, String> {

}
