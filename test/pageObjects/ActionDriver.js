const chai    = require('chai');
      global.expect = chai.expect;
      global.assert = chai.assert;
      global.should = chai.should();
export default class actiondriver {
    openURl(){
        
    browser.url('/')
    };

    type(loc, text){
        browser.setValue(loc, text);
    };

    click(loc){
        browser.click(loc);
    };

    compareText(loc, text){
        var text1 = browser.getText(loc);
        chai.expect(text1).equal.to.text;

    };

    dragdropElement(loc1, loc2){
        browser.dragAndDrop(loc1, loc2);
    };
    hoverElement(loc){
        browser.moveToObject(loc);
    };

    dropDownSelect(loc, index){
        browser.selectByIndex(loc, index);
    };

    alertacceptfunc(){
        if(browser.alertText()){
            browser.alertDismiss();
        }
    };
        explicitWait(){


        };

        enterFrame(loc){
            browser.frame(loc);
        };

        switchtab(url){
            browser.switchTab(url);
        };

        pageLoadwait(){
            browser.timeouts('pageLoad',10000 );
        }
    };
//export default new actiondriver()   ;