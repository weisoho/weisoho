package org.soho.sohoweb.service.impl;

import cn.dev33.satoken.stp.StpUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.soho.sohocommon.util.SlugGeneratorUtil;
import org.soho.sohoweb.dto.WriteArticleDTO;
import org.soho.sohoweb.enums.ArticleStatus;
import org.soho.sohoweb.mapper.ArticleMapper;
import org.soho.sohoweb.po.ArticlePo;
import org.soho.sohoweb.service.ArticleService;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

/**
 * @author wesoho
 * @version 1.0
 * @description: 文章服务类
 * @date 2025/1/10 11:03
 */
@Service
public class ArticleServiceImpl extends ServiceImpl<ArticleMapper, ArticlePo> implements ArticleService {
    @Override
    public void saveOrPublished(WriteArticleDTO writeArticleDTO) {
        ArticlePo articlePo = new ArticlePo();
        BeanUtils.copyProperties(writeArticleDTO, articlePo);
        // 设置作者ID
        articlePo.setAuthorId(Long.parseLong(StpUtil.getLoginId().toString()));
        if (articlePo.getArticleStatus() == ArticleStatus.PUBLISHED) {
            articlePo.setPublishedAt(LocalDateTime.now());
        }
        articlePo.setSlug(generateUniqueSlug(writeArticleDTO.getTitle()));
        this.saveOrUpdate(articlePo);
    }

    /**
     * 根据标题生成友好的url
     *
     * @param baseTitle 标题
     * @return 格式友好的url
     */
    private String generateUniqueSlug(String baseTitle) {
        String slug = SlugGeneratorUtil.generateSlug(baseTitle);
        int counter = 1;

        LambdaQueryWrapper<ArticlePo> queryWrapper = new LambdaQueryWrapper<>();
        while (this.getOne(queryWrapper.eq(ArticlePo::getSlug, slug)) != null) {
            slug = SlugGeneratorUtil.generateSlug(baseTitle + "-" + counter++);
        }

        return slug;
    }

}
