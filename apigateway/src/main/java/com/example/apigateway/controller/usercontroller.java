package com.example.apigateway.controller;

import com.example.apigateway.model.user;
import com.example.apigateway.repository.userrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class usercontroller {

    @Autowired
    private userrepo repo;

    @PostMapping("/check")
    public user getdetails(@RequestBody user user_)
    {
        user temp=repo.findById(user_.getUserid()).orElse(null);
        if(temp!=null) {
            if (temp.getPass() == user_.getPass()) {
                return temp;
            }
        }
        return null;
    }

    @PostMapping("/create")
    public user createdetails(@RequestBody user user_)
    {
        return repo.save(user_);
    }

    @GetMapping("/{user}")
    public user getdata(@PathVariable String user)
    {
        return repo.findById(user).orElse(null);
    }


}
