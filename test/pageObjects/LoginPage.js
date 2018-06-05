import actiondriver from '../pageObjects/ActionDriver.js';
class loginpage{
    loginUser(text1, text2){
        iframe = "//div[contains(@class,'iframeSignin')]";
        actiondriver.enterFrame(iframe);
        username = "//input[contains(@id,'userName')]";
        continuebtn = "//button[contains(@id,'checkUser')]";
        password = "(//input[contains(@id,'password_login')])[2]";
        loginbtnInframe = "(//button[contains(@id,'submitLoginUC')])";
        actiondriver.type(username, text1);
        actiondriver.click(continuebtn);
        actiondriver.type(password);
        actiondriver.click(loginbtnInframe);


    }
}
export default new loginpage();