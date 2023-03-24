package org.testrunner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.reportutilities.Report;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources",
glue="org.stepdefinition",tags="@smoke",plugin= {"html:src\\test\\resources\\Report","json:src\\test\\resources\\Report\\output.json",
		"junit:src\\test\\resources\\Report\\kidly.xml"}
)
public class Runner {
	
	@AfterClass
	public static void reportGenerations() {

		Report.generatejvmReports(System.getProperty("user.dir")+"\\src\\test\\resources\\Report\\output.json");
	}

}