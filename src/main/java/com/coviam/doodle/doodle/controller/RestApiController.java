package com.coviam.doodle.doodle.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/api")
public class RestApiController {
	
	 @RequestMapping(value = "/listProd/{key}", method = RequestMethod.GET)
	    public Object listProductsByCategory(@PathVariable("key") String key) {
	       
		 final String uri = "http://172.16.20.10:8080/getProductByCategory/1";
		 RestTemplate restTemplate = new RestTemplate();
		 String result = restTemplate.getForObject(uri, String.class);

		 return result;
	    }
	 
}
