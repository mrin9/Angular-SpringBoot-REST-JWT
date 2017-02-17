package com.app.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.*;


import org.joda.time.LocalDate;
import org.springframework.context.annotation.*;
import org.springframework.http.ResponseEntity;

import springfox.documentation.builders.*;
import springfox.documentation.service.*;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.spi.service.contexts.SecurityContext;
import springfox.documentation.swagger.web.*;
import springfox.documentation.swagger2.annotations.EnableSwagger2;
//import static springfox.documentation.builders.PathSelectors.ant;
import static com.google.common.collect.Lists.*;
import java.util.*;
import com.app.identity.*;



@Configuration
@EnableSwagger2
public class SwaggerConfig{

    ApiInfo apiInfo() {
      return new ApiInfoBuilder()
        .title("API Reference")
        .version("1.0.0")
        .build();
    }

    @Bean
    public Docket customImplementation(){
		return new Docket(DocumentationType.SWAGGER_2)
      .apiInfo(apiInfo())
      .securitySchemes(newArrayList(apiKey()))
      .select().paths(PathSelectors.any())
          //.apis(RequestHandlerSelectors.any())  // If you want to list all the apis including springboots own
          .apis(RequestHandlerSelectors.basePackage("com.app.api"))
          .build()
      .pathMapping("/")
      .useDefaultResponseMessages(false)
      .directModelSubstitute(LocalDate.class, String.class)
      .genericModelSubstitutes(ResponseEntity.class)
      ;
    }

    private ApiKey apiKey() {
        //return new ApiKey("Authorization", "api_key", "header");
        return new ApiKey("Authorization", "", "header");             // <<< === Create a Heaader (We are createing header named "Authorization" here)
    }

    @Bean
    SecurityConfiguration security() {
        //return new SecurityConfiguration("emailSecurity_client", "secret", "Spring", "emailSecurity", "apiKey", ApiKeyVehicle.HEADER, "api_key", ",");
        return new SecurityConfiguration("emailSecurity_client", "secret", "Spring", "emailSecurity", "", ApiKeyVehicle.HEADER, "", ",");
    }

    // This path will be called when swagger is loaded first time to get a token
    /*
    @Bean
    public UiConfiguration uiConfig() {
        return new UiConfiguration("session");
    }
    */

}
