package com.app.api;

import org.springframework.stereotype.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.*;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@ApiIgnore
@Controller // Dont use RestController as this method is mapping to a static file not a JSON
public class MainController {

  @RequestMapping(value="/")
	public String index() {
		return "index.html";
	}

}
