package com.example.userlogin.controller;

import com.example.userlogin.model.user;
import com.example.userlogin.repository.userrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class usercontroller {

    @Autowired
    private userrepo repo;

    @PostMapping("/check")
    public ResponseEntity<?> getdetails(@RequestBody user user_)
    {
        user temp=repo.findByUserId(user_.getUserid());
        if(temp==null)
        {
            return ResponseEntity.ok("User is not Register");
        }
        else {
            if (temp.getPass().equals(user_.getPass())) {
                return ResponseEntity.ok("Login Sucessfully");
            }
        }
        return ResponseEntity.ok("Incorect password");

    }

    @PostMapping("/create")
    public String createdetails(@RequestBody user user_)
    {
        if(repo.findByUserId(user_.getUserid())!=null)
            return "Already Present";
        else
         repo.save(user_);
        return "Sucessfully saved";

    }

    @GetMapping("/{userid}")
    public user getdata(@PathVariable String userid)
    {
        return repo.findByUserId(userid);
    }


}
