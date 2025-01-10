package org.soho.sohocommon.util;

import java.util.Locale;

/**
 * @author wesoho
 * @version 1.0
 * @description: Slug生成器
 * @date 2025/1/10 13:18
 */
public class SlugGeneratorUtil {
    /**
     * 生成友好的url
     *
     * @param input 输入
     * @return 格式友好的url
     */
    public static String generateSlug(String input) {
        if (input == null || input.isEmpty()) {
            return "";
        }
        // 移除所有非字母数字字符，替换为空格
        String noSpecialChars = input.replaceAll("[^a-zA-Z0-9\\s]", " ");
        // 替换多个空格为单个连字符
        String slug = noSpecialChars.trim().replaceAll("\\s+", "-");
        // 转换为小写
        return slug.toLowerCase(Locale.ROOT);
    }
}
