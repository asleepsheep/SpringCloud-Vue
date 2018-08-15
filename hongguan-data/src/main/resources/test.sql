create database test;
use test;
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `userName` varchar(32) DEFAULT NULL COMMENT '用户名',
  `passWord` varchar(32) DEFAULT NULL COMMENT '密码',
  `user_sex` varchar(32) DEFAULT NULL,
  `nick_name` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

INSERT INTO users (userName,PASSWORD,user_sex,nick_name) VALUES("root","111111","MAN","sage_wang");
INSERT INTO users (userName,PASSWORD,user_sex,nick_name) VALUES("root1","222222","WOMAN","sage_wang");
INSERT INTO users (userName,PASSWORD,user_sex,nick_name) VALUES("root2","333333","MAN","sage_wang");