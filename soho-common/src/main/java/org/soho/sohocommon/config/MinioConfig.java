package org.soho.sohocommon.config;

import io.minio.MinioClient;
import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author wesoho
 * @version 1.0
 * @description: TODO
 * @date 2024/11/30 22:54
 */
@Configuration
@ConfigurationProperties(prefix = "minio")
@Setter
@Getter
public class MinioConfig {
    private String endpoint;
    private String accessKey;
    private String secretKey;

    @Bean
    public MinioClient getMinioClient() {
        return MinioClient.builder()
                .endpoint(endpoint)
                .credentials(accessKey, secretKey)
                .build();
    }

    /**
     * 初始化默认头像
     */
    public void initDefaultAvatar(){

    }
}
