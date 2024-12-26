package org.soho.sohoweb.service;

import com.baomidou.mybatisplus.extension.service.IService;
import org.soho.sohocommon.expection.CustomValidationException;
import org.soho.sohoweb.dto.UserLoginDTO;
import org.soho.sohoweb.dto.UserRegisterDTO;
import org.soho.sohoweb.po.UserPo;

public interface UserService extends IService<UserPo> {
    Boolean register(UserRegisterDTO user) throws CustomValidationException;

    void login(UserLoginDTO user) throws CustomValidationException;
}
