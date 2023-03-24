package org.pojo;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.utilities.BaseClass;

public class LoginKidly extends BaseClass{
	public LoginKidly() {
        PageFactory.initElements(driver,this);

	}
	
	public WebElement getSearchBtn() {
		return searchBtn;
	}

	public WebElement getOpenAcc() {
		return openAcc;
	}

	@FindBy(xpath="//button[text()='Allow cookies']")
	private WebElement cookies;
	
	
	@FindBy(xpath="//p[contains(text(),'Your password')]")
	private WebElement invalidErrorMsg;
	
	@FindBy(xpath="//p[text()='Hey Lakshmi!']")
	private WebElement validMsg;
	
	
	public WebElement getInvalidErrorMsg() {
		return invalidErrorMsg;
	}

	public WebElement getValidMsg() {
		return validMsg;
	}

	public WebElement getCookies() {
		return cookies;
	}

	public WebElement getMyAcc() {
		return myAcc;
	}

	public WebElement getTxtEmail() {
		return txtEmail;
	}

	public WebElement getTxtPass() {
		return txtPass;
	}

	public WebElement getSignBtn() {
		return signBtn;
	}

	
	@FindBy(xpath="//button[@title='Close']")
	private WebElement popup;
	
	public WebElement getPopup() {
		return popup;
	}

	
	@FindBy(xpath="(//button[@type='button'])[27]")
	private WebElement searchBtn;
	
	@FindBy(xpath="//span[text()='Open Account navigation']")
	private WebElement openAcc;
	
	@FindBy(xpath="//span[text()='My Account']")
	private WebElement myAcc;
	
	@FindBy(id="EmailAddress")
	private WebElement txtEmail;
	
	@FindBy(id="Password")
	private WebElement txtPass;
	
	@FindBy(xpath="(//input[@type='submit'])[1]")
	private WebElement signBtn;
	
	

}
