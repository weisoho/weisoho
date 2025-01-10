package org.soho.sohoweb.service;

import org.soho.sohoweb.dto.WriteArticleDTO;

public interface ArticleService {
    void saveOrPublished(WriteArticleDTO writeArticleDTO);
}
