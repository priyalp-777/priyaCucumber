package org.sample;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.utilities.BaseClass;

public class Ip extends BaseClass {
	public static void main(String[] args) {
		launchBrowser();
		launchUrl("https://www.amazon.in/");
		windowMaximize();
		WebElement acc = driver.findElement(By.xpath("//span[text()='Account & Lists']"));
		moveToTheElement(acc);
	    WebElement list = driver.findElement(By.xpath("//div[@id='nav-al-wishlist']"));
       System.out.println(list.getText());
        WebElement uracc = driver.findElement(By.xpath("//div[@id='nav-al-your-account']"));
       System.out.println(uracc.getText());

	}

}
