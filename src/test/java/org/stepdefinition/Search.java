package org.stepdefinition;

import org.junit.Assert;
import org.pojo.SearchKidly;
import org.utilities.BaseClass;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Search extends BaseClass {
	
	public SearchKidly s;
	@When("user enter the {string}product")
	public void user_enter_the_product(String product) {
		implicity(20);

		s= new SearchKidly();
		javascriptClick(s.getSearchIcon());
		pauseForElement(4000);
		enterText(s.getSearchTxt(),product);
	   }

	@When("user click search button")
	public void user_click_search_button() {
		s= new SearchKidly();
        javascriptClick(s.getSearchclick());
	    }

	@Then("user sees the result based on {string} selected product")
	public void user_sees_the_result_based_on_selected_product(String string) {
	      Assert.assertTrue("product is not displayed",s.getSearchTxt().isDisplayed());		

	}



}
