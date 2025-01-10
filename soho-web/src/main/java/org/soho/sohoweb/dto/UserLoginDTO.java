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
    @NotBlank(message = "invalid.password")
    private String password;

    private String phone;

    private String email;
}
