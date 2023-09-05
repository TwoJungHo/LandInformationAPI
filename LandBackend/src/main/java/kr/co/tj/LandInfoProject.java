package kr.co.tj;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class LandInfoProject {

	public static void main(String[] args) {
		SpringApplication.run(LandInfoProject.class, args);
	}
	
}