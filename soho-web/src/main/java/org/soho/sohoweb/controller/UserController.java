package org.soho.sohoweb.controller;

import cn.dev33.satoken.stp.StpUtil;
import jakarta.annotation.Resource;
import org.soho.sohocommon.api.CommonResult;
import org.soho.sohocommon.expection.CustomValidationException;
import org.soho.sohoweb.dto.UserLoginDTO;
import org.soho.sohoweb.dto.UserRegisterDTO;
import org.soho.sohoweb.service.UserService;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

/**
 * @author wesoho
 * @version 1.0
 * @description: 用户控制器
 * @date 2024/11/26 20:39
 */
@RestController
@RequestMapping("user")
public class UserController {
    @Resource
    private UserService userService;

    /**
     * 注册
     *
     * @param user 用户注册入参
     * @return 是否注册成功
     */
    @PostMapping("register")
    public CommonResult<Boolean> register(@ModelAttribute @Validated UserRegisterDTO user) throws CustomValidationException {

        return CommonResult.success(userService.register(user));
    }

    /**
     * 登录
     *
     * @param user 用户登录入参
     * @return 登录token
     */
    @PostMapping("login")
    public CommonResult<String> login(@RequestBody UserLoginDTO user) throws CustomValidationException {
        userService.login(user);
        return CommonResult.success();
    }

    /**
     * 登出
     */
    @PostMapping("logout")
    public CommonResult<String> logout() {
        StpUtil.logout();
        return CommonResult.success();
    }

    /**
     * 检验登录状态
     */
    @GetMapping("check-auth")
    public CommonResult<String> checkAuth() {
        StpUtil.checkLogin();
        return CommonResult.success();
    }
}
