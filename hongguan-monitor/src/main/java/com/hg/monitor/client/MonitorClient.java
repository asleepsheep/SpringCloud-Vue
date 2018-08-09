package com.hg.monitor.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Created by jiangfan
 * 2018/8/9 11:44
 */
@Component
@FeignClient(name = "auth")
public interface MonitorClient {
    @Bean
    @GetMapping("/authMsg")
    String monitorMsg();
}
