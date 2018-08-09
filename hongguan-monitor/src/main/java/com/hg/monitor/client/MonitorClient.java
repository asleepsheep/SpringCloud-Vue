package com.hg.monitor.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Feign客户端接口,基于Ribbon和Hystrix的声明式服务调用
 *
 * 其中@FeignClient中的name属性的值,指向的是想要调用的服务的名字
 * 而@GetMapping中的路径要和服务中调用方法的路径保持一致
 *
 * Created by jiangfan
 * 2018/8/9 11:44
 */
@Component
@FeignClient(name = "hongguan-auth")
public interface MonitorClient {
    @Bean
    @GetMapping("/authMsg")
    String getMonitorMsg();
}
