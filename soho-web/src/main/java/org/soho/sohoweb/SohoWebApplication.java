package org.soho.sohoweb;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@MapperScan("org.soho.sohoweb.mapper")
@ComponentScan(basePackages = {"org.soho.sohocommon","org.soho.sohoweb"})
public class SohoWebApplication {

    public static void main(String[] args) {
        SpringApplication.run(SohoWebApplication.class, args);
    }

}
