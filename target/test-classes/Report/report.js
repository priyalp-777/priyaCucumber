$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Addcart.feature");
formatter.feature({
  "name": "To verify the functionality to add to cart of the application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username and password",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees the Home page of application",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_sees_the_Home_page_of_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the search product",
  "keyword": "And "
});
formatter.match({
  "location": "Addcart.user_enter_the_search_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click search button",
  "keyword": "And "
});
formatter.match({
  "location": "Search.user_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees the result based on search selected product",
  "keyword": "And "
});
formatter.match({
  "location": "Addcart.user_sees_the_result_based_on_search_selected_product()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To add the product to add to cart page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user add the product to add to cart",
  "keyword": "When "
});
formatter.match({
  "location": "Addcart.user_add_the_product_to_add_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees the cart page",
  "keyword": "Then "
});
formatter.match({
  "location": "Addcart.user_sees_the_cart_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To increase the count of product in add to cart page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user add the product to add to cart",
  "keyword": "When "
});
formatter.step({
  "name": "user increase the count \"\u003ccount\u003e\" in add to cart",
  "keyword": "And "
});
formatter.step({
  "name": "user sees the cart page with increase count",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "count"
      ]
    },
    {
      "cells": [
        "2"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username and password",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees the Home page of application",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_sees_the_Home_page_of_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the search product",
  "keyword": "And "
});
formatter.match({
  "location": "Addcart.user_enter_the_search_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click search button",
  "keyword": "And "
});
formatter.match({
  "location": "Search.user_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees the result based on search selected product",
  "keyword": "And "
});
formatter.match({
  "location": "Addcart.user_sees_the_result_based_on_search_selected_product()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To increase the count of product in add to cart page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user add the product to add to cart",
  "keyword": "When "
});
formatter.match({
  "location": "Addcart.user_add_the_product_to_add_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user increase the count \"2\" in add to cart",
  "keyword": "And "
});
formatter.match({
  "location": "Addcart.user_increase_the_count_in_add_to_cart(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027quantity_KDS245030101\u0027]\"}\n  (Session info: MicrosoftEdge\u003d111.0.1661.51)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.7.2\u0027, revision: \u00274d4020c3b7\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_351\u0027\nDriver info: org.openqa.selenium.edge.EdgeDriver\nCommand: [3e47ec3f0c35d8af4113174a9fa5cc6a, findElement {using\u003dxpath, value\u003d//input[@id\u003d\u0027quantity_KDS245030101\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: msedge, browserVersion: 111.0.1661.51, ms:edgeOptions: {debuggerAddress: localhost:55898}, msedge: {msedgedriverVersion: 111.0.1661.54 (9e410ec23a36..., userDataDir: C:\\Users\\rapri\\AppData\\Loca...}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:55898/devtoo..., se:cdpVersion: 111.0.1661.51, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 3e47ec3f0c35d8af4113174a9fa5cc6a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:535)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:351)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:343)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy20.getWrappedElement(Unknown Source)\r\n\tat org.openqa.selenium.remote.internal.WebElementToJsonConverter.apply(WebElementToJsonConverter.java:51)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Spliterators$ArraySpliterator.forEachRemaining(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.ReduceOps$ReduceOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.collect(Unknown Source)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:469)\r\n\tat org.utilities.BaseClass.javascriptClick(BaseClass.java:381)\r\n\tat org.stepdefinition.Addcart.user_increase_the_count_in_add_to_cart(Addcart.java:70)\r\n\tat ✽.user increase the count \"2\" in add to cart(file:src/test/resources/Addcart.feature:20)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user sees the cart page with increase count",
  "keyword": "Then "
});
formatter.match({
  "location": "Addcart.user_sees_the_cart_page_with_increase_count()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "To decrease the count of product in add to cart page",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user add the product to add to cart",
  "keyword": "When "
});
formatter.step({
  "name": "user decrease the count \"\u003ccount\u003e\" in add to cart",
  "keyword": "And "
});
formatter.step({
  "name": "user sees the cart page with decrease count",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "count"
      ]
    },
    {
      "cells": [
        "1"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username and password",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees the Home page of application",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_sees_the_Home_page_of_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the search product",
  "keyword": "And "
});
formatter.match({
  "location": "Addcart.user_enter_the_search_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click search button",
  "keyword": "And "
});
formatter.match({
  "location": "Search.user_click_search_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: MicrosoftEdge\u003d111.0.1661.51)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#stale_element_reference\nBuild info: version: \u00274.7.2\u0027, revision: \u00274d4020c3b7\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_351\u0027\nDriver info: org.openqa.selenium.edge.EdgeDriver\nCommand: [3b32663af43c84ad3a8e453f29521aca, executeScript {script\u003darguments[0].click(), args\u003d[{ELEMENT\u003d981d53eb-6e7b-494b-a661-e32a15078384, element-6066-11e4-a52e-4f735466cecf\u003d981d53eb-6e7b-494b-a661-e32a15078384}]}]\nCapabilities {acceptInsecureCerts: false, browserName: msedge, browserVersion: 111.0.1661.51, ms:edgeOptions: {debuggerAddress: localhost:56816}, msedge: {msedgedriverVersion: 111.0.1661.54 (9e410ec23a36..., userDataDir: C:\\Users\\rapri\\AppData\\Loca...}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:56816/devtoo..., se:cdpVersion: 111.0.1661.51, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 3b32663af43c84ad3a8e453f29521aca\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:535)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:472)\r\n\tat org.utilities.BaseClass.javascriptClick(BaseClass.java:381)\r\n\tat org.stepdefinition.Search.user_click_search_button(Search.java:26)\r\n\tat ✽.user click search button(file:src/test/resources/Addcart.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user sees the result based on search selected product",
  "keyword": "And "
});
formatter.match({
  "location": "Addcart.user_sees_the_result_based_on_search_selected_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "To decrease the count of product in add to cart page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user add the product to add to cart",
  "keyword": "When "
});
formatter.match({
  "location": "Addcart.user_add_the_product_to_add_to_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user decrease the count \"1\" in add to cart",
  "keyword": "And "
});
formatter.match({
  "location": "Addcart.user_decrease_the_count_in_add_to_cart(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user sees the cart page with decrease count",
  "keyword": "Then "
});
formatter.match({
  "location": "Addcart.user_sees_the_cart_page_with_decrease_count()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/Login.feature");
formatter.feature({
  "name": "To verify the login functionality in application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify login using valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees the Home page of application",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_sees_the_Home_page_of_application()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify login using invalid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user enter username and password with invalid",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_enter_username_and_password_with_invalid()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: MicrosoftEdge\u003d111.0.1661.51)\nBuild info: version: \u00274.7.2\u0027, revision: \u00274d4020c3b7\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_351\u0027\nDriver info: org.openqa.selenium.edge.EdgeDriver\nCommand: [0ddbcf0d4baf304158075b05dfdc3aeb, findElement {using\u003did, value\u003dEmailAddress}]\nCapabilities {acceptInsecureCerts: false, browserName: msedge, browserVersion: 111.0.1661.51, ms:edgeOptions: {debuggerAddress: localhost:57338}, msedge: {msedgedriverVersion: 111.0.1661.54 (9e410ec23a36..., userDataDir: C:\\Users\\rapri\\AppData\\Loca...}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:57338/devtoo..., se:cdpVersion: 111.0.1661.51, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 0ddbcf0d4baf304158075b05dfdc3aeb\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:535)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:351)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:343)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy20.sendKeys(Unknown Source)\r\n\tat org.utilities.BaseClass.enterText(BaseClass.java:114)\r\n\tat org.stepdefinition.Login.user_enter_username_and_password_with_invalid(Login.java:64)\r\n\tat ✽.user enter username and password with invalid(file:src/test/resources/Login.feature:14)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click login button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.user_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user sees the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_sees_the_error_message()"
});
formatter.result({
  "status": "skipped"
});
});