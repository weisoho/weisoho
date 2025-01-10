package org.soho.sohoweb.enums;

import lombok.Getter;

/**
 * @author wesoho
 * @version 1.0
 * @description: TODO
 * @date 2025/1/10 10:50
 */
@Getter
public enum ArticleStatus {
    // 已发布
    PUBLISHED("published"),
    // 已保存
    SAVED("saved");

    private final String articleStatus;

    ArticleStatus(String articleStatus) {
        this.articleStatus = articleStatus;
    }
}
