package com.hg.auth;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Created by jiangfan
 * 2018/8/9 11:48
 */
@Component
@FeignClient(name = "hongguan-monitor")
public interface AuthClient {

    @Bean
    @GetMapping("/monitorMsg")
    String getMonitorMsg();
}
