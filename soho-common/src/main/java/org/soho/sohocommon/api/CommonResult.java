package org.soho.sohocommon.api;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.Setter;
import org.soho.sohocommon.constant.ResultCode;
import org.soho.sohocommon.constant.ResultInfo;

/**
 * @author wesoho
 * @version 1.0
 * @description: 通用返回结果封装类
 * @date 2024/11/27 19:45
 */
@Getter
@Setter
@JsonInclude(JsonInclude.Include.NON_NULL)
public class CommonResult<T> {
    private long code;
    private String message;
    private T data;

    protected CommonResult() {
    }

    protected static <T> CommonResult<T> createCommonResultWithOutData(long code, String message) {
        CommonResult<T> commonResult = new CommonResult<>();
        commonResult.setCode(code);
        commonResult.setMessage(message);
        return commonResult;
    }

    protected static <T> CommonResult<T> createCommonResult(long code, String message,T data) {
        CommonResult<T> commonResult = new CommonResult<>();
        commonResult.setCode(code);
        commonResult.setMessage(message);
        commonResult.setData(data);
        return commonResult;
    }

    /**
     * 成功返回结果，不包含data数据
     *
     */
    public static <T> CommonResult<T> success() {
        return createCommonResultWithOutData(ResultCode.SUCCESS, ResultInfo.SUCCESS);
    }

    /**
     * 成功返回结果
     *
     * @param data 获取的数据
     */
    public static <T> CommonResult<T> success(T data) {
        return createCommonResult(ResultCode.SUCCESS, ResultInfo.SUCCESS, data);
    }

    /**
     * 失败
     *
     * @param code 错误码
     * @param message 错误信息
     */
    public static <T> CommonResult<T> failed(int code, String message) {
        return createCommonResultWithOutData(code, message);
    }
}
