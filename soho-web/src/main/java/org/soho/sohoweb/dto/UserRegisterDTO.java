package org.soho.sohoweb.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

/**
 * @author wesoho
 * @version 1.0
 * @description: 用户注册入参
 * @date 2024/11/26 21:04
 */
@Getter
@Setter
public class UserRegisterDTO extends UserLoginDTO{
    //账户名（可以重复）
    private String username;

    private MultipartFile avatarFile;
}
