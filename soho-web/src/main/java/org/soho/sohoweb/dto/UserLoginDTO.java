package org.soho.sohoweb.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

/**
 * @author wesoho
 * @version 1.0
 * @description: 用户登录入参
 * @date 2024/11/30 14:08
 */
@Getter
@Setter
public class UserLoginDTO {
    @NotBlank(message = "密码不能为空！")
    private String password;

    private String phone;

    private String email;
}
