package org.soho.sohoweb.po;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;
import org.soho.sohoweb.enums.ArticleStatus;

import java.time.LocalDateTime;

/**
 * @author wesoho
 * @version 1.0
 * @description: 数据库持久化对象
 * @date 2025/1/10 10:46
 */
@Getter
@Setter
@Accessors(chain = true)
@TableName("articles")
public class ArticlePo {
    @TableId
    private long id;

    @TableField("author_id")
    private long authorId;

    @TableField("title")
    private String title;

    @TableField("content")
    private String content;

    @TableField("created_at")
    private LocalDateTime createdAt;

    @TableField("updated_at")
    private LocalDateTime updatedAt;

    @TableField("published_at")
    private LocalDateTime publishedAt;

    @TableField("article_status")
    private ArticleStatus articleStatus;

    // 友好的url
    @TableField("slug")
    private String slug;


}
