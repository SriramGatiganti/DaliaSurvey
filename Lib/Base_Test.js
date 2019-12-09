var webdriver= require ('selenium-webdriver');
By=webdriver.By;
until=webdriver.until;


//Defining base page function
var Page=function(){

  //Initiate firefox driver
  this.driver=new webdriver.Builder().forBrowser('firefox').build();
  var driver=this.driver;
    
  //Passing desired URL to driver
  this.visit=function(url){
    return driver.get(url);
  }

  //Closing driver
  this.quit=function(){
    return driver.quit();
  }

  //deriving base function for finding element
  this.find=function(el,_MyOption){
    driver.wait(until.elementLocated(By.xpath(el),1000));
    return driver.findElement(By.xpath(el));
  }

  //deriving base function for finding elements
  this.findAll=function(el){
    driver.wait(until.elementLocated(By.xpath(el),5000));
    return driver.findElements(By.xpath(el));
  }

}

module.exports=Page;