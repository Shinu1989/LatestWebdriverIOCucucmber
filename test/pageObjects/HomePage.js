import actiondriver from '../pageObjects/ActionDriver.js';
class homepage  extends actiondriver{

    navigateToLoginPage(){
        actiondriver.pageLoadwait();
        signin = "//div[contains(@class,'accountInner')]";
        actiondriver.hoverElement(signin);
        var loginbtnonHomePage = "//span[contains(@class,'accountBtn btn rippleWhite')]/a";
        actiondriver.click(loginbtnonHomePage);
    };
};

export default new homepage();
