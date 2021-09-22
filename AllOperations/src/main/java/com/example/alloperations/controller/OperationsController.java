package com.example.alloperations.controller;

import com.example.alloperations.model.Notes;
import com.example.alloperations.repositiry.Operationsrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class OperationsController {

    @Autowired
    private Operationsrepo repo;

    @PostMapping("/")
    public String createNotes(@RequestBody Notes notes)
    {
        repo.save(notes);
        return notes.getId();
    }

    @PutMapping("/")
    public Notes updateNotes(@RequestBody Notes newnotes)
    {
        Notes user=repo.findById(newnotes.getId()).orElse(null);
        if(user!=null) {
            user.setUserid(newnotes.getUserid());
            user.setTitle(newnotes.getTitle());
            user.setContent(newnotes.getContent());
        }
        return repo.save(user);
    }

    @DeleteMapping("/{id}")
    
    public void deleteNotes(@PathVariable String id)
    {
        repo.deleteById(id);
    }
}
