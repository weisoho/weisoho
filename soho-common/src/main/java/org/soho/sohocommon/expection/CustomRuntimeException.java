package org.soho.sohocommon.expection;

/**
 * @author wesoho
 * @version 1.0
 * @description: 自定义运行时异常
 * @date 2024/12/1 19:46
 */
public class CustomRuntimeException extends RuntimeException {
    public CustomRuntimeException(String message) {
        super(message);
    }

    public CustomRuntimeException(String message, Throwable cause) {
        super(message, cause);
    }
}
