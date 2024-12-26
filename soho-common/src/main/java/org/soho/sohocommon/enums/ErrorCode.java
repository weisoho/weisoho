package org.soho.sohocommon.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

/**
 * @author wesoho
 * @version 1.0
 * @description: TODO
 * @date 2024/12/1 20:06
 */
@AllArgsConstructor
@Getter
public enum ErrorCode {

    // 用户相关错误
    USER_NOT_FOUND(10001, HttpStatus.NOT_FOUND.value(), "用户未找到"),
    INVALID_INPUT(10002, HttpStatus.BAD_REQUEST.value(), "非法输入"),
    DUPLICATE_EMAIL(10003, HttpStatus.BAD_REQUEST.value(), "邮箱已存在"),
    DUPLICATE_PHONE_NUMBER(10004, HttpStatus.BAD_REQUEST.value(), "号码已存在"),
    PHONE_OR_EMAIL_REQUIRED(10005, HttpStatus.BAD_REQUEST.value(), "必须输入手机号或邮箱"),
    INVALID_PASSWORD(10006, HttpStatus.BAD_REQUEST.value(), "账号或密码错误"),
    LOGIN_FAILED(10007, 409, "登录失败"),

    // 系统相关错误
    INTERNAL_ERROR(50001, HttpStatus.INTERNAL_SERVER_ERROR.value(), "系统异常"),
    DATABASE_ERROR(50002, HttpStatus.INTERNAL_SERVER_ERROR.value(), "数据库异常"),
    NETWORK_ERROR(50003, HttpStatus.INTERNAL_SERVER_ERROR.value(), "网络异常");

    // 错误码
    private final int code;
    // http状态码
    private final int httpStatus;
    // 错误信息
    private final String message;
}
