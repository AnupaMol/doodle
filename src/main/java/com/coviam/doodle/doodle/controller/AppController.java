package com.coviam.doodle.doodle.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class AppController {

	 	@RequestMapping(value="/",method = RequestMethod.GET)
	    String home(ModelMap modal) {
	 		modal.addAttribute("title","Doodle");
	        return "index.html";
	    }
	 
	    @RequestMapping("/partials/{page}")
	    String partialHandler(@PathVariable("page") final String page) {
	        return page;
	    }
	
}
