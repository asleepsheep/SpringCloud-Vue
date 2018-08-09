package com.hg.register;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class HongguanRegisterApplication {

	public static void main(String[] args) {
		SpringApplication.run(HongguanRegisterApplication.class, args);
	}
}
