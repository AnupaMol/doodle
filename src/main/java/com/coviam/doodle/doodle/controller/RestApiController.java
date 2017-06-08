package com.coviam.doodle.doodle.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;


import com.coviam.doodle.doodle.PathProperties;
import com.coviam.doodle.doodle.entity.FeedBackDTO;
import com.coviam.doodle.doodle.entity.OrderDTO;
import com.coviam.doodle.doodle.entity.OrderResponse;
@RestController
@RequestMapping("/api")
public class RestApiController {
	
		private PathProperties paths;
		@Autowired
	    public void setProduct(PathProperties paths) {
	        this.paths = paths;
	    }
		@RequestMapping(value = "/listByCategory/{key}", method = RequestMethod.GET)
	    public Object listProductsByCategory(@PathVariable("key") String key) {
	       

		  String uri = paths.getProduct() +"/getProductByCategory/"+key;
		 
		 RestTemplate restTemplate = new RestTemplate();
		 String result = restTemplate.getForObject(uri, String.class);
		 return result;
	    }
		//get all category
		@RequestMapping(value = "/getCategory", method = RequestMethod.GET)
	    public Object getAllCategory() {
	       

		  String uri = paths.getProduct() +"/getAllCategory";
		 
		 RestTemplate restTemplate = new RestTemplate();
		 String result = restTemplate.getForObject(uri, String.class);
		 return result;
	    }
		
		// get the product description from top merchant
		@RequestMapping(value = "/getProduct/{key}", method = RequestMethod.GET)
	    public Object getProduct(@PathVariable("key") int prod_id) {
	      
		  String uri = paths.getProduct() +"/getProduct/"+prod_id;
		 
		 RestTemplate restTemplate = new RestTemplate();
		 String result = restTemplate.getForObject(uri, String.class);
		 return result;
	    }
		
		//product of particular merchant
		@RequestMapping(value = "/getProduct/{prodId}/{MercId}", method = RequestMethod.GET)
	    public Object getProductOfMerchant(@PathVariable("prodId") int prod_id,@PathVariable("prodId") int merc_id) {
	     
		 final String uri = paths.getProduct() +"/getProduct/"+prod_id+"/"+merc_id;
		 
		 RestTemplate restTemplate = new RestTemplate();
		 String result = restTemplate.getForObject(uri, String.class);
		 System.out.println("Description "+result);
		 return result;
	    }
		
		//
		@RequestMapping(value = "/getProductMerchantFeedback/{prodId}/{MercId}", method = RequestMethod.GET)
	    public Object getMerchantProductFeedback(@PathVariable("prodId") int prod_id,@PathVariable("MercId") int merc_id) {
	      
		  String uri = paths.getInventory()+"/getMerchantProductRatingReview/"+merc_id+"/"+prod_id;
		 System.out.println("===========" + uri);
		 RestTemplate restTemplate = new RestTemplate();
		 String result = restTemplate.getForObject(uri, String.class);
		 System.out.println(result);
		 return result;
	    }
		@RequestMapping(value = "/addFeedback", method = RequestMethod.POST)
		public String OrderDTO(@RequestBody FeedBackDTO list){
			String uri = paths.getInventory()+"/addFeedback";
			 System.out.println("===========" + uri);
			 RestTemplate restTemplate = new RestTemplate();
			 String result = restTemplate.postForObject(uri,list, String.class);
			 System.out.println("Feedback"+result);	
			return result;
		}
		
		//getOrderByEmail
		@RequestMapping(value = "/getOrderByEmail/{email}", method = RequestMethod.GET)
	    public Object getOrderByEmail(@PathVariable("email") String email) {
	      
		System.out.println("This user email "+email);	
		  String uri = paths.getOrder()+"/orders/"+email+".com/";
		 System.out.println("===========" + uri);
		 RestTemplate restTemplate = new RestTemplate();
		 String result = restTemplate.getForObject(uri, String.class);
		 System.out.println(result);
		 return result;
	    }
		@RequestMapping(value = "/addOrder", method = RequestMethod.POST)
		public OrderResponse getOrderDTO(@RequestBody List<OrderDTO> list){
			String uri= paths.getCheckout()+"/addOrder";
			System.out.println("Add Order"+uri);
			RestTemplate restTemplate = new RestTemplate();
			String result =  restTemplate.postForObject(uri, list, String.class);
			if(result.equals("Success")){
				System.out.println("checkout Order"+result);
				OrderResponse response=new OrderResponse();
				response.setMessage("Success");
				return response ;
			}
			System.out.println("checkout Order"+result);
			OrderResponse response=new OrderResponse();
			response.setMessage("Success");
			return response;
			
		}
	    /* order checkout */
	    /*s@RequestMapping(value = "/checkout/{query}", method = RequestMethod.GET)
	    public Object checkout(@PathVariable("query") String query) {
	       
		  String uri = paths.setOrder() +"/addOrder/"+query;
		 
		 RestTemplate restTemplate = new RestTemplate();
		 String result = restTemplate.getForObject(uri, String.class);
		 return result;
	    }
	    */
		
		
		/*
		 * @RequestMapping(value = "/getProd/{key}", method = RequestMethod.GET)
	    public ModelAndView getProduct(@PathVariable("key") String prod_id) {
	       

		 final String uri = paths.getProduct() +"/getProduct/"+prod_id;
		 
		 RestTemplate restTemplate = new RestTemplate();
		 String result = restTemplate.getForObject(uri, String.class);
		 return new ModelAndView("prod_desc.html", "product",result);
	    }
		 */
		@RequestMapping(value = "/search/{query}", method = RequestMethod.GET)
	    public Object search(@PathVariable("query") String query) {
	       
		  String uri = paths.getSearch() +"/search/"+query;
		 System.out.println("Search uri\n"+ uri);
		 RestTemplate restTemplate = new RestTemplate();
		 String result = restTemplate.getForObject(uri, String.class);
		 return result;
	    }
		
		
		
		/*
		 * @RequestMapping
public ModelAndView getSuperheroes() {
  return new ModelAndView("superheroes", "superheroes", Arrays.asList(
     new Superhero("Clark", "Kent", "Superman", true),
     new Superhero("Siobhan", "McDougal", "Silver Banshee", false)
  ));
}
		 */
		
	 
}
