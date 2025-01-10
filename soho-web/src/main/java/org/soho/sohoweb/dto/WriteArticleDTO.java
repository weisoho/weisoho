package org.soho.sohoweb.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;
import org.soho.sohoweb.enums.ArticleStatus;

/**
 * @author wesoho
 * @version 1.0
 * @description: 写文章入参
 * @date 2025/1/10 10:55
 */
@Getter
@Setter
public class WriteArticleDTO {
    @NotBlank(message = "{article.title.not.null}")
    private String title;

    private String content;

    private ArticleStatus articleStatus;
}
