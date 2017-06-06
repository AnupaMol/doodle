package com.coviam.doodle.doodle.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.coviam.doodle.doodle.PathProperties;

@RestController
@RequestMapping("/api")
public class RestApiController {
	
		private PathProperties paths;
		@Autowired
	    public void setProduct(PathProperties paths) {
	        this.paths = paths;
	    }
		@RequestMapping(value = "/listProd/{key}", method = RequestMethod.GET)
	    public Object listProductsByCategory(@PathVariable("key") String key) {
	       

		 final String uri = paths.getProduct() +"/getProductByCategory/1";
		 
		 RestTemplate restTemplate = new RestTemplate();
		 String result = restTemplate.getForObject(uri, String.class);
		 return result;
	    }
		@RequestMapping(value = "/search/{query}", method = RequestMethod.GET)
	    public Object search(@PathVariable("query") String query) {
	       
		 final String uri = paths.getSearch() +"/search/"+query;
		 
		 RestTemplate restTemplate = new RestTemplate();
		 String result = restTemplate.getForObject(uri, String.class);
		 return result;
	    }
		
	 
}
