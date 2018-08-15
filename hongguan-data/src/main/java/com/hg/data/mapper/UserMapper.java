package com.hg.data.mapper;

import com.hg.data.entity.UserEntity;
import com.hg.data.enums.UserSexEnum;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * User映射Mapper接口
 * Created by jiangfan
 * 2018/8/14 10:37
 */
@Repository
public interface UserMapper {

    /**
     * 查询所有users
     * @return
     */
    @Select("SELECT * FROM users")
    @Results({
            @Result(property = "userSex",  column = "user_sex", javaType = UserSexEnum.class),
            @Result(property = "nickName", column = "nick_name")
    })
    List<UserEntity> getAll();

    /**
     * 查询单个user
     * @param id
     * @return
     */
    @Select("SELECT * FROM users WHERE id = #{id}")
    @Results({
            @Result(property = "userSex",  column = "user_sex", javaType = UserSexEnum.class),
            @Result(property = "nickName", column = "nick_name")
    })
    UserEntity getOne(Long id);

    /**
     * 添加单个user
     * @param user
     */
    @Insert("INSERT INTO users(userName, passWord, user_sex, nick_name) VALUES(#{userName}, #{passWord}, #{userSex}, #{nickName})")
    void insert(UserEntity user);

    /**
     * 更新单个user
     * @param user
     */
    @Update("UPDATE users SET userName = #{userName}, passWord = #{passWord}, nick_name = #{nickName} WHERE id = #{id}")
    void update(UserEntity user);

    /**
     * 删除单个user
     * @param id
     */
    @Delete("DELETE FROM users WHERE id = #{id}")
    void delete(Long id);
}
