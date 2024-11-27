package org.soho.sohocommon.api;

import lombok.Getter;
import lombok.Setter;
import org.soho.sohocommon.constant.ResultCode;
import org.soho.sohocommon.constant.ResultInfo;

/**
 * @author wesoho
 * @version 1.0
 * @description: TODO
 * @date 2024/11/27 19:45
 */
@Getter
@Setter
public class CommonResult<T> {
    private long code;
    private String message;
    private T data;

    protected CommonResult() {
    }

    protected CommonResult(long code, String message, T data) {
        this.code = code;
        this.message = message;
        this.data = data;
    }

    /**
     * 成功返回结果
     *
     * @param data 获取的数据
     */
    public static <T> CommonResult<T> success() {
        return new CommonResult<T>(ResultCode.SUCCESS, ResultInfo.SUCCESS, null);
    }

    /**
     * 成功返回结果
     *
     * @param data 获取的数据
     */
    public static <T> CommonResult<T> success(T data) {
        return new CommonResult<T>(ResultCode.SUCCESS, ResultInfo.SUCCESS, data);
    }
}
