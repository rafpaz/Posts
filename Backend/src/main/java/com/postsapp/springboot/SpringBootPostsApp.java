package com.postsapp.springboot;

import com.postsapp.springboot.configuration.JpaConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@Import(JpaConfiguration.class)
@SpringBootApplication(scanBasePackages = {"com.postsapp.springboot"})
public class SpringBootPostsApp {
	public static void main(String[] args) {
		SpringApplication.run(SpringBootPostsApp.class, args);
	}
}