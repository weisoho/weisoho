package org.soho.sohocommon.expection;

import cn.dev33.satoken.exception.NotLoginException;
import lombok.extern.slf4j.Slf4j;
import org.soho.sohocommon.api.CommonResult;
import org.soho.sohocommon.enums.ErrorCode;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.HashMap;
import java.util.Map;

/**
 * @author wesoho
 * @version 1.0
 * @description: 全局异常处理器
 * @date 2024/12/1 19:49
 */
@ControllerAdvice
@Slf4j
public class GlobalExceptionHandler {

    @ExceptionHandler(NotLoginException.class)
    public ResponseEntity<CommonResult<Map<String,String>>> notLoginException(NotLoginException ex) {

        return new ResponseEntity<>(CommonResult.failed(HttpStatus.BAD_REQUEST.value(),ErrorCode.NOT_LOGIN.getMessage()), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(value = CustomValidationException.class)
    public ResponseEntity<CommonResult<String>> handleCustomValidationException(CustomValidationException ex) {
        log.error("An unexpected error occurred: ", ex);
        ErrorCode errorCode = ex.getErrorCode();
        return new ResponseEntity<>(CommonResult.failed(errorCode.getCode(), errorCode.getMessage()), HttpStatusCode.valueOf(errorCode.getHttpStatus()));
    }

    // 处理 @Validated 或 @Valid 引发的参数验证异常
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<CommonResult<Map<String,String>>> handleValidationExceptions(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });

        return new ResponseEntity<>(CommonResult.failed(HttpStatus.BAD_REQUEST.value(), errors.values().toString().replace("[","").replace("]","")), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(value = Exception.class)
    public ResponseEntity<CommonResult<String>> handleCustomValidationException(Exception ex) {
        log.error("An unexpected error occurred: ", ex);
        ErrorCode internalError = ErrorCode.INTERNAL_ERROR;
        return new ResponseEntity<>(CommonResult.failed(internalError.getCode(), internalError.getMessage()), HttpStatusCode.valueOf(internalError.getHttpStatus()));
    }
}

