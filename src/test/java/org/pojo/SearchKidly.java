package org.pojo;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.utilities.BaseClass;

public class SearchKidly extends BaseClass{
	public SearchKidly() {
        PageFactory.initElements(driver,this);

	}

	@FindBy(xpath="//span[@class='secondaryNavigation-searchIcon']")
	private WebElement searchIcon;
	
	@FindBy(xpath="//input[@class='searchMenu-searchInput aa-input']")
	private WebElement searchTxt;
	
     @FindBy(xpath="//span[@class='searchMenu-searchButtonIcon']")
     private WebElement searchclick;
     
     
	public WebElement getSearchclick() {
		return searchclick;
	}

	public WebElement getSearchIcon() {
		return searchIcon;
	}

	public WebElement getSearchTxt() {
		return searchTxt;
	}
	
	
}
