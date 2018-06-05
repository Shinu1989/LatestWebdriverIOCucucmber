import {Given} from 'cucumber';
import actiondriver from '../pageObjects/ActionDriver.js';
import homepage from '../pageObjects/HomePage.js';


    Given(/^I am on the  HomePage$/,function(){
        actiondriver.openURl();
        signin = "//div[contains(@class,'accountInner')]";
        actiondriver.compareText(signin, "Sign In");

    });