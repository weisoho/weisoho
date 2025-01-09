package org.soho.sohocommon.util;

import io.minio.*;
import io.minio.errors.*;
import io.minio.http.Method;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

/**
 * @author wesoho
 * @version 1.0
 * @description: minio工具类
 * @date 2024/11/30 15:11
 */
@Component
@Slf4j
public class MinioUtil {

    @Resource
    private MinioClient minioClient;

    /**
     * 通过MultipartFile上传文件到minio服务器
     *
     * @param file MultipartFile文件
     * @param bucketName  桶名称
     * @param fileName    文件名
     */
    public boolean uploadFile(MultipartFile file, String bucketName, String fileName) {
        try (InputStream inputStream = file.getInputStream()) {
            if (!ifBucketExists(bucketName)) {
                createBucket(bucketName);
            }
            ObjectWriteResponse objectWriteResponse = minioClient.putObject(PutObjectArgs.builder().bucket(bucketName).object(fileName).stream(inputStream, inputStream.available(), -1).build());
            return true;
        } catch (ServerException | InsufficientDataException | ErrorResponseException | IOException |
                 NoSuchAlgorithmException | InvalidKeyException | InvalidResponseException | XmlParserException |
                 InternalException e) {
            log.error("Failed to upload file to MinIO: {}", e.getMessage(), e);
            return false;
        }
    }

    /**
     * 生成预签名的 URL，用于直接下载对象
     *
     * @param bucketName 存储桶名称
     * @param objectName 对象名称（文件名）
     * @param expires 过期时间（秒）
     * @return 预签名的 URL
     * @throws Exception 如果生成过程中发生错误
     */
    public String generatePresignedUrl(String bucketName, String objectName, int expires){
        try {
            // 生成预签名的 URL
            return minioClient.getPresignedObjectUrl(
                    GetPresignedObjectUrlArgs.builder()
                            .bucket(bucketName)
                            .object(objectName)
                            .expiry(expires)
                            .method(Method.GET)
                            .build()
            );
        } catch (MinioException | InvalidKeyException | NoSuchAlgorithmException e) {
            System.err.println("Error occurred while generating presigned URL: " + e.getMessage());
            return "";
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public boolean ifBucketExists(String bucketName) {

        try {
            return minioClient.bucketExists(BucketExistsArgs.builder().bucket(bucketName).build());
        } catch (ErrorResponseException | InsufficientDataException | InternalException | InvalidKeyException |
                 InvalidResponseException | IOException | NoSuchAlgorithmException | ServerException |
                 XmlParserException e) {
            log.error("Failed to detect the presence of the bucket（{}）: {}", bucketName, e.getMessage(), e);
            return false;
        }
    }

    public void createBucket(String bucketName) {
        try {
            minioClient.makeBucket(MakeBucketArgs.builder().bucket(bucketName).build());
        } catch (ErrorResponseException | InsufficientDataException | InternalException | InvalidKeyException |
                 InvalidResponseException | IOException | NoSuchAlgorithmException | ServerException |
                 XmlParserException e) {
            log.error("Failed to create a bucket（{}）: {}", bucketName, e.getMessage(), e);
        }
    }
}
