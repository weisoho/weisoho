package org.soho.sohoweb.controller;

import jakarta.annotation.Resource;
import org.soho.sohocommon.api.CommonResult;
import org.soho.sohocommon.util.MessageUtil;
import org.soho.sohoweb.dto.WriteArticleDTO;
import org.soho.sohoweb.enums.ArticleStatus;
import org.soho.sohoweb.service.ArticleService;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author wesoho
 * @version 1.0
 * @description: 文章控制器
 * @date 2025/1/10 10:43
 */
@RestController
@RequestMapping("/article")
public class ArticleController {
    @Resource
    private ArticleService articleService;
    @Resource
    private MessageUtil messageUtil;

    /**
     * 写文章，根据状态判断保存还是发布
     * @param writeArticleDTO   入参
     * @return  结构
     */
    @PostMapping("create")
    public CommonResult<String> createArticle(@RequestBody @Validated WriteArticleDTO writeArticleDTO) {
        // 保存或发布文章
        articleService.saveOrPublished(writeArticleDTO);
        ArticleStatus articleStatus = writeArticleDTO.getArticleStatus();
        return CommonResult.success(ArticleStatus.saved == articleStatus ? messageUtil.getMessage("article.saved.success") : messageUtil.getMessage("article.published.success"));
    }


}
