package org.soho.sohoweb.po;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author wesoho
 * @version 1.0
 * @description: 持久化对象
 * @date 2024/11/30 14:20
 */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@TableName("soho_user")
public class UserPo {
    @TableId("user_id")
    private Long userId;

    //用户名
    @TableField("username")
    private String username;

    //密码
    @TableField("password")
    private String password;

    // 桶名称/头像名称
    @TableField("avatar_path")
    private String avatarPath;

    //手机号码
    @TableField("phone")
    private String phone;

    //邮箱
    @TableField("email")
    private String email;

    /**
     * 创建UsePo，不传入Id
     * @param username  用户名
     * @param password  密码
     * @param avatarPath    桶名称/头像名称
     * @return  UserPo对象
     */
    public static UserPo createUserPo(long userId,String username, String password, String avatarPath, String phone, String email){
        UserPo userPo = new UserPo();
        userPo.setUserId(userId);
        userPo.setUsername(username);
        userPo.setPassword(password);
        userPo.setAvatarPath(avatarPath);
        userPo.setPhone(phone);
        userPo.setEmail(email);
        return userPo;
    }
}
