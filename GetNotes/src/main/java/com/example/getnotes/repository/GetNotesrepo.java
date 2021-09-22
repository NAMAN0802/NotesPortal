package com.example.getnotes.repository;

import com.example.getnotes.model.Notes;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GetNotesrepo extends MongoRepository<Notes,String> {

    @Query("{'userid':?0}")
    List<Notes> findByName(String userid);
}
