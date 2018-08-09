package com.hg.monitor.controller;

import com.hg.monitor.client.MonitorClient;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by jiangfan
 * 2018/8/8 19:30
 */
@RestController
@Slf4j
public class MonitorController {

    @Autowired
    private MonitorClient monitorClient;

    @GetMapping("/monitorMsg")
    public String msg() {

        return "I am monitor";
    }
}
