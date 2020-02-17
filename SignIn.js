const { Given, When, Then } = require("cucumber");
const assert = require("assert");

Given("I open the url {string}", function(url) {
  browser.url(url);
});

When("I set {string} to the inputfield {string}", function(
  userInput,
  inputSelector
) {
  const inputElement = browser.$(inputSelector);
  inputElement.setValue(userInput);
});

When("I click on submit button", function() {
  const subminBtn = browser.$('[data-test-id="signIn__BUTTON"]');
  subminBtn.click();
});

Then("I expect that user loged in succsessfully", function() {
  // Write code here that turns the phrase above into concrete actions
  const menuElement = browser.$('[data-test-id="HEADER-NAVIGATION"]');
  menuElement.waitForDisplayed();
  assert.equal(menuElement.isDisplayed(), true, "menu is not displayed");
});


Feature:
    In order to keep my product stable
    As a developer or product manager
    I want to make sure that everything works as expected

    @happy_path
    Scenario: User can successfully sign in to the home page
        Given I open the url "https://stag.dazn.com/en-DE/account/signin"
        When I set "basdazn+de53@gmail.com" to the inputfield '[data-test-id="EMAIL"]'
        And I set "12345a" to the inputfield '[data-test-id="PASSWORD"]'
        And I click on submit button
        Then I expect that user loged in succsessfully
