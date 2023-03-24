package org.testrunner;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.io.IOException;

import org.pojo.AddcartKidly;
import org.pojo.LoginKidly;
import org.pojo.SearchKidly;
import org.utilities.BaseClass;

public class Sample extends BaseClass{
	 public static SearchKidly s;
	 public   static AddcartKidly a;

	public static void main(String[] args) throws IOException, AWTException {
		launchBrowser();
		
		launchUrl("https://www.kidly.co.uk/ideas");
		windowMaximize();
		s=new SearchKidly();
		implicity(20);
		javascriptClick(s.getSearchIcon());
		enterText(s.getSearchTxt(),readExcel("Kidly",3,0));
		javascriptClick(s.getSearchclick());
		a=new AddcartKidly();
		implicity(20);
	     javascriptClick(a.getProduct());


    javascriptClick(a.getAddBasket());
    pauseForElement(3000);

       javascriptClick(a.getViewbasket());


		
        javascriptClick(a.getAddbasketincrease());
        Robot r=new Robot();
        r.keyPress(KeyEvent.VK_BACK_SPACE);
        r.keyRelease(KeyEvent.VK_BACK_SPACE);

        
        enterText(a.getAddbasketincrease(),"3");
        javascriptClick(a.getUpdate());

	
	}

}
