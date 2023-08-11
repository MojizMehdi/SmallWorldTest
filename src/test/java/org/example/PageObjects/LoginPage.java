package org.example.PageObjects;

import org.example.Utilities.BaseClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LoginPage extends BaseClass {

    public LoginPage(WebDriver driver, WebDriverWait wait) {

        super(driver, wait);
        PageFactory.initElements(driver, this);
    }

    @FindBy(name = "user-name")
    @CacheLookup
    private WebElement emailField;

    @FindBy(name = "password")
    @CacheLookup
    private WebElement passwordField;

    @FindBy(name = "login-button")
    @CacheLookup
    private WebElement signInButton;

    @FindBy(xpath = "//h3[@data-test='error']")
    @CacheLookup
    private WebElement errorMessageLabel;

    public void fillEmailData(String email) {

        WaitUntilElementVisible(emailField);
        emailField.isEnabled();
        emailField.clear();
        emailField.sendKeys(email);
    }

    public void fillPasswordData(String password) {

        WaitUntilElementVisible(passwordField);
        passwordField.isEnabled();
        passwordField.clear();
        passwordField.sendKeys(password);
    }

    public void clickSignInButton() {

        WaitUntilElementVisible(signInButton);
        signInButton.isEnabled();
        signInButton.click();
    }

    public boolean errorMessageIsDisplayed() {

        WaitUntilElementVisible(errorMessageLabel);
        errorMessageLabel.isDisplayed();
        return true;
    }

    public void loginSuccessfulCheck() {

        WaitUntilElementVisible(emailField);
        emailField.isDisplayed();
        WaitUntilElementVisible(passwordField);
        passwordField.isDisplayed();
        WaitUntilElementVisible(signInButton);
        signInButton.isDisplayed();
    }
}