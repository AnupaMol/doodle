package com.coviam.doodle.doodle;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties
public class PathProperties {
	private String product;
	private String search;

	public String getProduct() {
		return product;
	}

	public String getSearch() {
		return search;
	}

	public void setSearch(String search) {
		this.search = search;
	}

	public void setProduct(String product) {
		this.product = product;
	}
	
}

