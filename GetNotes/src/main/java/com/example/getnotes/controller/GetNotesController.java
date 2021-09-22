package com.example.getnotes.controller;

import com.example.getnotes.model.Notes;
import com.example.getnotes.repository.GetNotesrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class GetNotesController {

    @Autowired
    private GetNotesrepo repo;

    @GetMapping("/{userid}")
    public List<Notes> getNotes(@PathVariable String userid)
    {
       return repo.findByName(userid);
    }
    @GetMapping("/notes/{id}")
    public Notes getNotesbyid(@PathVariable String id)
    {
        return repo.findById(id).orElse(null);
    }


}
