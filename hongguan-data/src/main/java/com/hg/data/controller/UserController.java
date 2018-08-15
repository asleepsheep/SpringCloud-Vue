package com.hg.data.controller;

import com.hg.data.entity.UserEntity;
import com.hg.data.enums.UserSexEnum;
import com.hg.data.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by jiangfan
 * 2018/8/14 10:48
 */
@RestController
public class UserController {

    @Autowired
    private UserMapper userMapper;

    /**
     * 查询所有用户
     * @return
     */
    @GetMapping("/users")
    public List<UserEntity> getUsers() {
        List<UserEntity> users=userMapper.getAll();

        return users;
    }

    /**
     * 查询单个用户
     * @param id
     * @return
     */
    @GetMapping("/users/{id}")
    public UserEntity getUser(@PathVariable("id") Long id) {
        UserEntity user=userMapper.getOne(id);

        return user;
    }

    /**
     * 新增用户
     * @param userName
     * @param passWord
     * @param userSex
     * @return
     */
    @PostMapping("/users")
    public String save(@RequestParam("username") String userName,
                       @RequestParam("password") String passWord,
                       @RequestParam("user_sex") UserSexEnum userSex,
                       @RequestParam("nick_name") String nickName) {
        UserEntity user = new UserEntity();
        user.setUserName(userName);
        user.setPassWord(passWord);
        user.setUserSex(userSex);
        user.setNickName(nickName);
        userMapper.insert(user);

        return "save ok";
    }

    /**
     * 更新用户
     * @param id
     * @param userName
     * @param passWord
     * @param userSex
     * @return
     */
    @PutMapping(value="/users/{id}")
    public UserEntity update(@PathVariable("id") Long id,
                             @RequestParam("username") String userName,
                             @RequestParam("password") String passWord,
                             @RequestParam("user_sex") UserSexEnum userSex,
                             @RequestParam("nick_name") String nickName) {
        UserEntity user = new UserEntity();
        user.setId(id);
        user.setUserName(userName);
        user.setPassWord(passWord);
        user.setUserSex(userSex);
        user.setNickName(nickName);
        userMapper.update(user);

        return user;
    }

    /**
     * 删除用户
     * @param id
     */
    @DeleteMapping(value="/users/{id}")
    public String delete(@PathVariable("id") Long id) {
        userMapper.delete(id);

        return "delete ok";
    }
}
