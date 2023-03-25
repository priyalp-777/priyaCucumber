package org.pojo;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.utilities.BaseClass;

public class AddcartKidly extends BaseClass {

	public AddcartKidly() {
       PageFactory.initElements(driver,this);
	}
	
	@FindBy(xpath="//span[@class='secondaryNavigation-searchIcon']")
	private WebElement searchbar;
	
	
	@FindBy(xpath="//button[@title='Close']")
	private WebElement popup;
	
	public WebElement getPopup() {
		return popup;
	}

	@FindBy(xpath="//span[text()='Search']")
	private WebElement searchtxt;
	
	@FindBy(xpath="//span[text()='Go to Basket']")
      private WebElement goToBasket;
	
	public WebElement getGoToBasket() {
		return goToBasket;
	}

	@FindBy(xpath="//button[@type='submit']")
	private WebElement searchclick;
	
	@FindBy(xpath="//span[text()='Fuzzkin Lamb'] ")
	private WebElement product;
	
	@FindBy(xpath="//input[@value='Add to basket']")
	private WebElement addBasket;
	
	@FindBy(xpath="//a[contains(text(),'View')]")
	private WebElement viewbasket;
	
	@FindBy(xpath="//input[@id='quantity_KDS245030101']")
	private WebElement addbasketincrease;
	
	@FindBy(xpath="//input[@value='Update']")
	private WebElement update;

	@FindBy(xpath="//button[@class='basketBtn js_basket-checkoutButton']")
    private WebElement checkout;
	
	
	public WebElement getCheckout() {
		return checkout;
	}

	public WebElement getSearchbar() {
		return searchbar;
	}

	public WebElement getSearchtxt() {
		return searchtxt;
	}

	public WebElement getSearchclick() {
		return searchclick;
	}

	public WebElement getProduct() {
		return product;
	}

	public WebElement getAddBasket() {
		return addBasket;
	}

	public WebElement getViewbasket() {
		return viewbasket;
	}

	public WebElement getAddbasketincrease() {
		return addbasketincrease;
	}

	public WebElement getUpdate() {
		return update;
	}
	
	
	
}

