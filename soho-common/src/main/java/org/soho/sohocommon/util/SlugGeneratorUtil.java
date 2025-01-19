package org.soho.sohocommon.util;

import com.github.slugify.Slugify;

/**
 * @author wesoho
 * @version 1.0
 * @description: Slug生成器
 * @date 2025/1/10 13:18
 */
public class SlugGeneratorUtil {
    private static final Slugify slugify = Slugify.builder().build();

    /**
     * 将给定的字符串转换为URL安全的slug。
     *
     * @param input 输入字符串
     * @return URL安全的slug
     */
    public static String generateSlug(String input) {
        if (input == null || input.isEmpty()) {
            return "";
        }
        return slugify.slugify(input);
    }

}
