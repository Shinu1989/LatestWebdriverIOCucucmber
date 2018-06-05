import {When} from 'cucumber';
import loginpage from '../pageObjects/LoginPage.js';
import homepage from '../pageObjects/HomePage.js';
import actiondriver from '../pageObjects/ActionDriver.js';
import userpage from '../pageObjects/UserPage.js';
    When(/^I enter "username" and "password" in the loginframe$/, function(){
        homepage.navigateToLoginPage();
        loginpage.loginUser(username, password);


    })

    When(/^ I reach UserPage$/, function(){
       userpage.userpagefuncs();
    })
