package org.reportutilities;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class Report {
	
	public static void generatejvmReports(String jsonFilePath) {
		File f=new File(System.getProperty("user.dir")+"\\src\\test\\resources\\Report\\JvmReports");
        Configuration con= new Configuration(f,"Kidly Automation");
        con.addClassifications("Browser name","chrome");
        
        List<String> li=new ArrayList<String>();
        li.add(jsonFilePath);
        ReportBuilder r=new ReportBuilder(li,con);
        r.generateReports();
        
	}

}
