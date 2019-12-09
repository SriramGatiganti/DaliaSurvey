var Page = require('./Base_Test.js');


//Element repository:
var welTextElemt="//h1[contains(text(),'Welcome')]";
var chkBoxElemt="//label[@class='ng-binding ng-scope']";
var ChkNxtBtnElemt="//button[@class='btn next_button_button custom_button ng-binding']";
var qtnTxtElemt="//b[contains(text(),' ')]";
var wrtAnsElemt="//input[@name='input']";
var sussTxtElemt="//h1[@class='ng-binding']";


//Actions:

//Function for retreiving welcome messgae on first page
Page.prototype.getWelcomeText=function(){
    return result= this.find(welTextElemt).getText();
}

//Function for Clicking Confirmation checkbox on the first page
Page.prototype.clickCnfCheckBtn=function(){
    return this.find(chkBoxElemt).click();
}

//Function for Clicking Next button
Page.prototype.clickNextBtn=function(){
    return this.find(ChkNxtBtnElemt).click();
}

//Function for get question text
Page.prototype.getQuestionText=function(){
    return result= this.find(qtnTxtElemt).getText();

}

//Function for selecting radiabutton answer
Page.prototype.slctMyOptRadiobtn=function(_MyOption){
    return this.find("//label[contains(text(),'"+_MyOption+"')]").click();
}

//Function for selecting checkbox answer
Page.prototype.slctMyOptChkbox=function(_MyOption){
    return this.find("//label[contains(text(),'"+_MyOption+"')]").click(); 
}

//Function for writeText in Answer edit
 Page.prototype.writeAnswer=function(_MyOption){
     return this.find(wrtAnsElemt).sendKeys(_MyOption)
 }

//Function for sucess messgae on last page
Page.prototype.getSucessText=function(){
    return result= this.find(sussTxtElemt).getText();
}

module.exports=Page;