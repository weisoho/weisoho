package org.soho.sohoweb.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @author wesoho
 * @version 1.0
 * @description: TODO
 * @date 2024/12/22 18:18
 */
@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:5173")// 允许的源
                .allowedMethods("POST","GET")// 方法
                .allowedHeaders("*")// 允许的头信息
                .allowCredentials(true);// 允许携带cookie
    }
}
