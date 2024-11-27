package org.soho.sohoweb.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author wesoho
 * @version 1.0
 * @description: 用户接口
 * @date 2024/11/26 20:39
 */
@RestController
@RequestMapping("user")
public class UserController {
    @PostMapping("register")
    public String register(@RequestBody User user) {

    }
}
