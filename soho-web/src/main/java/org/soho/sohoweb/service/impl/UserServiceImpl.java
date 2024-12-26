package org.soho.sohoweb.service.impl;

import cn.dev33.satoken.secure.BCrypt;
import cn.dev33.satoken.stp.StpUtil;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.IdWorker;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import jakarta.annotation.Resource;
import org.apache.commons.lang3.StringUtils;
import org.soho.sohocommon.constant.Constants;
import org.soho.sohocommon.enums.ErrorCode;
import org.soho.sohocommon.expection.CustomValidationException;
import org.soho.sohocommon.util.MinioUtil;
import org.soho.sohoweb.dto.UserLoginDTO;
import org.soho.sohoweb.dto.UserRegisterDTO;
import org.soho.sohoweb.mapper.UserMapper;
import org.soho.sohoweb.po.UserPo;
import org.soho.sohoweb.service.UserService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;


/**
 * @author wesoho
 * @version 1.0
 * @description: 用户服务层
 * @date 2024/11/29 1:00
 */
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, UserPo> implements UserService {
    @Resource
    private MinioUtil minioUtil;

    @Override
    public Boolean register(UserRegisterDTO user) throws CustomValidationException {
        // 检查注册参数
        checkRegisterParams(user);
        // 雪花算法获取用户ID
        long userId = IdWorker.getId();
        // 加密密码
        String hashPwd = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
        UserPo userPo = UserPo.createUserPo(userId, user.getUsername(), hashPwd, null, user.getPhone(), user.getEmail());
        MultipartFile avatarFile = user.getAvatarFile();
        // 判断是否传入头像
        if (avatarFile != null) {
            String filename = STR."\{userId}/\{avatarFile.getOriginalFilename()}";
            minioUtil.uploadFile(avatarFile, Constants.BUCKET_NAME.AVATAR_BUCKET_NAME, filename);
            userPo.setAvatarPath(filename);
        }

        return this.save(userPo);
    }
    private void checkRegisterParams(UserRegisterDTO user) throws CustomValidationException {
           QueryWrapper<UserPo> queryWrapper = new QueryWrapper<>();
           if(StringUtils.isNotBlank(user.getPhone())){
               queryWrapper.eq("phone", user.getPhone());
               // 查询号码或者email是否重复
               UserPo one = this.getOne(queryWrapper);
               if (one != null) {
                   throw new CustomValidationException(ErrorCode.DUPLICATE_PHONE_NUMBER);
               }
           } else if(StringUtils.isNotBlank(user.getEmail())){
               queryWrapper.eq("email", user.getEmail());
               // 查询号码或者email是否重复
               UserPo one = this.getOne(queryWrapper);
               if (one != null) {
                   throw new CustomValidationException(ErrorCode.DUPLICATE_EMAIL);
               }
           } else {
               throw new CustomValidationException(ErrorCode.PHONE_OR_EMAIL_REQUIRED);
           }
       }
    @Override
    public void login(UserLoginDTO user) throws CustomValidationException {
        QueryWrapper<UserPo> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("phone", user.getPhone()).or().eq("email", user.getEmail());
        // 根据号码或者email查询用户数据
        UserPo one = this.getOne(queryWrapper);
        // 未查询到用户
        if (one == null) {
            throw new CustomValidationException(ErrorCode.USER_NOT_FOUND);
        }
        //用户密码不正确
        if (!BCrypt.checkpw(user.getPassword(), one.getPassword())) {
            throw new CustomValidationException(ErrorCode.INVALID_PASSWORD);
        }
        StpUtil.login(one.getUserId());
    }
}