package com.hg.auth.controller;

import com.hg.auth.AuthClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by jiangfan
 * 2018/8/8 19:30
 */
@RestController
public class AuthController {

    @Autowired
    private AuthClient authClient;

    @GetMapping("/authMsg")
    public String authMsg() {
        return "This is authMsg";
    }

    @GetMapping("/monitorMsg")
    public String getAuthMessage() {
        String authMessage = authClient.authMsg();

        return authMessage;
    }

}
