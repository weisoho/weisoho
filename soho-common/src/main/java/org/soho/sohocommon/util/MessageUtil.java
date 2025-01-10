package org.soho.sohocommon.util;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.Resource;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.stereotype.Component;

/**
 * @author wesoho
 * @version 1.0
 * @description: 获取资源文件中信息工具类
 * @date 2025/1/10 11:42
 */
@Component
public class MessageUtil {
    @Resource
    private MessageSource messageSource;

    @PostConstruct
    public void init() {
        // 初始化逻辑，如果需要的话
    }

    /**
     * 获取国际化消息
     *
     * @param code 消息键
     * @param args 可选参数，用于格式化消息
     * @return 国际化消息
     */
    public String getMessage(String code, Object... args) {
        return messageSource.getMessage(code, args, LocaleContextHolder.getLocale());
    }
}
