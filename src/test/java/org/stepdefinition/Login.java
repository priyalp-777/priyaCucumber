package org.stepdefinition;

import java.io.IOException;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.pojo.LoginKidly;
import org.utilities.BaseClass;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Login extends BaseClass{
	public 	LoginKidly l;
	@Given("user launch the application")
	public void user_launch_the_application() {
		launchBrowser();
		}

	@When("user enter username and password")
	public void user_enter_username_and_password() throws IOException {
		launchUrl("https://www.kidly.co.uk/ideas");
		windowMaximize();
		implicity(20);

		LoginKidly l= new LoginKidly();
		javascriptClick(l.getCookies());
		javascriptClick(l.getSearchBtn());
		javascriptClick(l.getOpenAcc());
		javascriptClick(l.getMyAcc());
		enterText(l.getTxtEmail(),readExcel("Kidly",1,0));
		enterText(l.getTxtPass(),readExcel("Kidly",1,1));
	
	    }
	@When("user click login button")
	public void user_click_login_button() {
		 l= new LoginKidly();

			javascriptClick(l.getSignBtn());

	}



	
	@Then("user sees the Home page of application")
	public void user_sees_the_Home_page_of_application() {
		 l= new LoginKidly();

     // Assert.assertTrue("My details not present",l.getValidMsg().isDisplayed());		
	}

	@When("user enter username and password with invalid")
	public void user_enter_username_and_password_with_invalid() throws IOException {
		launchUrl("https://www.kidly.co.uk/ideas");
		windowMaximize();
	   
		l= new LoginKidly();
	    javascriptClick(l.getCookies());
		javascriptClick(l.getSearchBtn());
		javascriptClick(l.getOpenAcc());
		javascriptClick(l.getMyAcc());
		enterText(l.getTxtEmail(),readExcel("Kidly",2,0));
		enterText(l.getTxtPass(),readExcel("Kidly",2,1));
	
	  
	}

	@When("user click login button with invalid")
	public void user_click_login_button_with_invalid() {
		l= new LoginKidly();
		implicity(10);
       // javascriptClick(l.getPopup());

		javascriptClick(l.getSignBtn());

	}

	@Then("user sees the error message")
	public void user_sees_the_error_message() {
		 l= new LoginKidly();
		 implicity(10);
	      Assert.assertTrue("Error message not displayed",l.getInvalidErrorMsg().isDisplayed());		

	}
	



}
