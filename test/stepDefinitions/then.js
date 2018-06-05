import {Then} from 'cucumber';
import loginpage from '../pageObjects/LoginPage.js';
import homepage from '../pageObjects/HomePage.js';
import actiondriver from '../pageObjects/ActionDriver.js';
import userpage from '../pageObjects/UserPage.js';

    Then(/^I am using filters to refine my search$/, function(){
        priceDropdwnSource ="(//div[contains(@class,'filter-price-slider')]/a)[1]";
        priceDropdwnDestination ="(//div[contains(@class,'filter-price-slider')]/a)[2]";
        actiondriver.dragdropElement(priceDropdwnSource, priceDropdwnDestination);

    });
