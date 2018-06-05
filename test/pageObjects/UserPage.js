import actiondriver from '../pageObjects/ActionDriver.js';
class userpage{
    userpagefuncs(){
        electronics = "(//span[contains(text(),'Electronics')])[1]";
        topSellingTv ="(//span[contains(text(),'Top Selling TVs')])[1]";
        actiondriver.hoverElement(electronics);
        actiondriver.click(topSellingTv);
        
    }
}
export default new userpage();