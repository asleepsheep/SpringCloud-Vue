package com.hg.data;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
@MapperScan("com.hg.data.mapper")
public class HongguanDataApplication {

	public static void main(String[] args) {
		SpringApplication.run(HongguanDataApplication.class, args);
	}
}
