package org.stepdefinition;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.io.IOException;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.pojo.AddcartKidly;
import org.pojo.SearchKidly;
import org.utilities.BaseClass;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Addcart extends BaseClass{
	 public SearchKidly s;
	 public  AddcartKidly a;
	@Given("user enter the search product")
	public void user_enter_the_search_product() throws IOException {
		s=new SearchKidly();
		implicity(20);
		javascriptClick(s.getSearchIcon());
		pauseForElement(2000);
		enterText(s.getSearchTxt(),readExcel("Kidly",3,0));
		javascriptClick(s.getSearchclick());
        pauseForElement(3000);

	    (driver.findElement(By.xpath("//span[text()='Fuzzkin Lamb'] "))).click();

	   }

	@Given("user sees the result based on search selected product")
	public void user_sees_the_result_based_on_search_selected_product() {
	     a=new AddcartKidly();   
	}

	@When("user add the product to add to cart")
	public void user_add_the_product_to_add_to_cart() throws AWTException {
	     a=new AddcartKidly(); 
			implicity(20);


	     javascriptClick(a.getAddBasket());
	     pauseForElement(3000);

	       
	   }

	@Then("user sees the cart page")
	public void user_sees_the_cart_page() {
	     a=new AddcartKidly();  
		//	Assert.assertTrue("Checkout not displayed",a.getCheckout().isDisplayed());

	    }
	@When("user increase the count {string} in add to cart")
	public void user_increase_the_count_in_add_to_cart(String value) throws IOException, AWTException {
		a=new AddcartKidly(); 
		implicity(20);



         javascriptClick(a.getAddBasket());
         pauseForElement(3000);

         driver.findElement(By.xpath("//a[text()='View basket']")).click();
       // clickElement(a.getViewbasket());
        javascriptClick(a.getAddbasketincrease());
        Robot r=new Robot();
        r.keyPress(KeyEvent.VK_BACK_SPACE);
        r.keyRelease(KeyEvent.VK_BACK_SPACE);

        
        enterText(a.getAddbasketincrease(),"3");
        javascriptClick(a.getUpdate());
	}

	
	@Then("user sees the cart page with increase count")
	public void user_sees_the_cart_page_with_increase_count() {
	     a=new AddcartKidly(); 
		//	Assert.assertTrue("Checkout not displayed",a.getCheckout().isDisplayed());

        
	    }
	@When("user decrease the count {string} in add to cart")
	public void user_decrease_the_count_in_add_to_cart(String value) throws IOException, AWTException {
		a=new AddcartKidly(); 
		implicity(20);
	    // javascriptClick(a.getProduct());


        javascriptClick(a.getAddBasket());
        pauseForElement(3000);

        javascriptClick(a.getViewbasket());
        javascriptClick(a.getAddbasketincrease());
        Robot r=new Robot();
        r.keyPress(KeyEvent.VK_BACK_SPACE);
        r.keyRelease(KeyEvent.VK_BACK_SPACE);

        
        enterText(a.getAddbasketincrease(),"1");
        javascriptClick(a.getUpdate());
		
	}



	
	@Then("user sees the cart page with decrease count")
	public void user_sees_the_cart_page_with_decrease_count() {
		
		//Assert.assertTrue("Checkout not displayed",a.getCheckout().isDisplayed());
	    }


	

}
