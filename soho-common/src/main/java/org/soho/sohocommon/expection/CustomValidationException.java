package org.soho.sohocommon.expection;

import lombok.Getter;
import org.soho.sohocommon.enums.ErrorCode;

/**
 * @author wesoho
 * @version 1.0
 * @description: 自定义检查型异常
 * @date 2024/12/1 19:46
 */
@Getter
public class CustomValidationException extends Exception {
    private final ErrorCode errorCode;

    public CustomValidationException(ErrorCode errorCode) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
    }

    public CustomValidationException(ErrorCode errorCode, Throwable cause) {
        super(errorCode.getMessage(), cause);
        this.errorCode = errorCode;
    }
}
