module.exports=Page;
var {describe,it,after,before} = require('selenium-webdriver/testing');
var Page=require('../Lib/QnsAndAns_Page.js');
var chai=require('chai');
var chaiAsPromised=require('chai-as-promised');
var should=chai.should();
var page;
chai.use(chaiAsPromised);
var driver;
var find;

//Test Data setUp
var baseUrl='https://surveyinterface-v2.opinionsample.com/#/surveys/ab320070-bbad-0134-bb62-0a6b3886cf3d/screens/page_1?publisher_user_id=07b59010-86d2-0131-c9a9-0a424708edaa&panel_user_id=PANEL_USER_TEST_22fd1640-d94b-0137-0d5b-029188bc54b8&panel_user_id_kind=PANEL_USER_KIND_TEST&pparam_offer_click_id=OFFER_CLICK_TEST_22fd1640-d94b-0137-0d5b-029188bc54b8&pparam_provider_user_id=%5Bprovider_user_uuid%5D&is_test&survey_id=ab320070-bbad-0134-bb62-0a6b3886cf3d&screen_id=page_1';
var welcomeMsg='Welcome to this survey about general knowledge!';
var firstQns='There are 10 questions in the survey';
var secondQns='How many hours per day do you spend on reading the news?';
var secondAns='1-3 hours';
var thirdQns='Which of these social media platforms do you use at least once a week?';
var thirdAns1='Instagram';
var thirdAns2='Facebook';
var thirdAns3='Twitter';
var fourthQns='Which of the following media do you use at least once a week?';
var fourthAns='Television';
var fifthQns='If given the chance to learn all the secrets of one ';
var fifthAns='My Friend';
var sixthQns='Do you agree or disagree: In general, I trust the information I get from the media.';
var sixthAns='Strongly agree';
var seventhQns='What is five plus two?';
var seventhAns='7';
var eightQns='Do you live in a city or in a rural area?';
var eighthAns='City';
var ninthQns='Which is your favourite from these award-winning films?';
var ninthAns='The Godfather';
var tenthQns='What do you like most about The Godfather?';
var tenthAns='Cinematography';
var sucessMsg='All done!';


//Test Case Flow
describe('Dalia Survey interface answer flow',function(){
    
     this.timeout(50000);    
    //Intaite the browser and Open URL
    before(function(){
       page= new Page();
       page.visit(baseUrl);
    });

    //Quit the browser
    after(function(){
        page.quit();
    });

    it('Verification of Welcome message on first page',function(){
        //Get the welcome message which appears on first page     
        var getWelcmeMsg=page.getWelcomeText();
        //Verify welcome message which appears on first page
        getWelcmeMsg.should.eventually.contains(WelcomeMsg);
    });

    it('Verification confirmation of survey and Perform answer for "the first" question',function(){
        //Click on confirmation checkbox
        page.clickCnfCheckBtn();
        //Click on Next button
        page.clickNextBtn();
        //Get the question which appears on next page
        var getqnsText=page.getQuestionText();
        //Verify question which is available on next page
        getqnsText.should.eventually.contains(secondQns);
    });

    it('Verification of Perform answer for "the second" question ',function(){
        //Select desired option
        page.slctMyOptRadiobtn(secondAns);
        //Click on Next button
        page.clickNextBtn();
        //Get the question which appears on next page
        var getqnsText=page.getQuestionText();
        //Verify question which is available on next page
        getqnsText.should.eventually.contains(thirdQns);
    });

    it('Verification of Perform answer for "the third" question',function(){         
        //Select at least 3 desired options        
        page.slctMyOptChkbox(thirdAns1);      
        page.slctMyOptChkbox(thirdAns2);        
        page.slctMyOptChkbox(thirdAns3); 
        //Click on Next button      
        page.clickNextBtn();
        //Get the question which appears on next page
        var getqnsText=page.getQuestionText();
        //Verify question which is available on next page
        getqnsText.should.eventually.contains(fourthQns);
    });

    it('Verification of Perform answer for "the fourth" question',function(){ 
        //Select desired option       
        page.slctMyOptChkbox(fourthAns);
        //Click on Next button                   
        page.clickNextBtn();
        //Get the question which appears on next page
        var getqnsText=page.getQuestionText();
        //Verify question which is available on next page
        getqnsText.should.eventually.contains(fifthQns);
    });

    it('Verification of Perform answer for "the fifth" question',function(){ 
        //Enter your answer in edit box       
        page.writeAnswer(fifthAns);
        //Click on Next button
        page.clickNextBtn();
        //Get the question which appears on next page
        var getqnsText=page.getQuestionText();
        //Verify question which is available on next page
        getqnsText.should.eventually.contains(sixthQns);
    });

    it('Verification of Perform answer for "the sixth" question',function(){ 
        //Select desired option       
        page.slctMyOptRadiobtn(sixthAns);
        //Click on Next button 
        page.clickNextBtn();
        //Get the question which appears on next page
        var getqnsText=page.getQuestionText();
        //Verify question which is available on next page
        getqnsText.should.eventually.contains(seventhQns);
    });

    it('Verification of Perform answer for "the seventh" question',function(){
        //Enter your answer in edit box        
        page.writeAnswer(seventhAns);
        //Click on Next button 
        page.clickNextBtn();
        //Get the question which appears on next page
        var getqnsText=page.getQuestionText();
        //Get the question which appears on next page
        getqnsText.should.eventually.contains(eightQns);
    });

    it(' Verification of Perform answer for "the eighth" question',function(){  
        //Enter your answer in edit box          
        page.slctMyOptRadiobtn(eighthAns);
        //Click on Next button 
        page.clickNextBtn();
        //Get the question which appears on next page
        var getqnsText=page.getQuestionText();
        //Get the question which appears on next page
        getqnsText.should.eventually.contains(ninthQns);
    });

    it('Verification of Perform answer for "the ninth" question',function(){  
        //Select desired option      
        page.slctMyOptRadiobtn(ninthAns);
        //Click on Next button 
        page.clickNextBtn();
        //Get the question which appears on next page
        var getqnsText=page.getQuestionText();
        //Verify question which is available on next page
        getqnsText.should.eventually.contains(tenthQns);
    });

    it('Verification of Perform answer for "the tenth" question',function(){  
        //Select desired option      
        page.slctMyOptRadiobtn(tenthAns); 
        //Click on Next button 
        page.clickNextBtn();
        //Get the question which appears on next page
        var getqnsText=page.getQuestionText();
        //Verify question which is available on next page
        getqnsText.should.eventually.contains(sucessMsg);
    });

    it('Verification of success message after successfully attempt the answers for all 10 questions',function(){  
        //Get the sucess message which appears on sucess page     
        var getSucessMsg=page.getSucessText();
        //Verify sucess message which appears on sucess page
        getSucessMsg.should.eventually.contains(sucessMsg);
    });

});




