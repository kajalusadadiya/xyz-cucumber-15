$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("bankmanager.feature");
formatter.feature({
  "line": 2,
  "name": "Bank manager should add customer successfully and open account successfully.",
  "description": "",
  "id": "bank-manager-should-add-customer-successfully-and-open-account-successfully.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@BankManagerAddCustomer"
    }
  ]
});
formatter.before({
  "duration": 6958105300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Bank manager should login and add customer successfully",
  "description": "",
  "id": "bank-manager-should-add-customer-successfully-and-open-account-successfully.;bank-manager-should-login-and-add-customer-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Bank Manager Login Tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click on add customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enter firstame \u003c\"Kirshna\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enter lastname \u003c\"Patel\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enter postcode \u003c\"Ha7 1HJ\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click on add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User should see customer added successfully message",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User should accept alert",
  "keyword": "And "
});
formatter.match({
  "location": "BankManagerSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 105595000,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClicksOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 428894300,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 323704500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kirshna",
      "offset": 22
    }
  ],
  "location": "BankManagerSteps.userEnterFirstame(String)"
});
formatter.result({
  "duration": 439287800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 22
    }
  ],
  "location": "BankManagerSteps.userEnterLastname(String)"
});
formatter.result({
  "duration": 84977900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ha7 1HJ",
      "offset": 22
    }
  ],
  "location": "BankManagerSteps.userEnterPostcode(String)"
});
formatter.result({
  "duration": 86443700,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 61429200,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userShouldSeeCustomerAddedSuccessfullyMessage()"
});
formatter.result({
  "duration": 20100,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userShouldAcceptAlert()"
});
formatter.result({
  "duration": 25850300,
  "status": "passed"
});
formatter.after({
  "duration": 804652300,
  "status": "passed"
});
formatter.before({
  "duration": 3592668500,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Customer should login and logout successfully",
  "description": "",
  "id": "bank-manager-should-add-customer-successfully-and-open-account-successfully.;customer-should-login-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@Sanity,"
    },
    {
      "line": 35,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "User clicks on Bank Manager Login Tab",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "User click on add customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User enter firstame \u003c\"James\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User enter lastname \u003c\"Bond\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User enter postcode \u003c\"SU38UN\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User click on add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User should see customer added successfully message",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User should accept alert",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User click on home button",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User clicks on customer login tab",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "User search for customer from dropdown \u003c\"6\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "User should see logout button and logout successfully\u003c\"James Bond\"\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "BankManagerSteps.userIsOnHomepage()"
});
formatter.result({
  "duration": 23000,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClicksOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 532937400,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 357696700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "James",
      "offset": 22
    }
  ],
  "location": "BankManagerSteps.userEnterFirstame(String)"
});
formatter.result({
  "duration": 340351200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bond",
      "offset": 22
    }
  ],
  "location": "BankManagerSteps.userEnterLastname(String)"
});
formatter.result({
  "duration": 82308100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SU38UN",
      "offset": 22
    }
  ],
  "location": "BankManagerSteps.userEnterPostcode(String)"
});
formatter.result({
  "duration": 88851400,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 55420500,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userShouldSeeCustomerAddedSuccessfullyMessage()"
});
formatter.result({
  "duration": 15100,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userShouldAcceptAlert()"
});
formatter.result({
  "duration": 24168900,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClickOnHomeButton()"
});
formatter.result({
  "duration": 56937200,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userClicksOnCustomerLoginTab()"
});
formatter.result({
  "duration": 53347300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 41
    }
  ],
  "location": "CustomerActions.userSearchForCustomerFromDropdown(String)"
});
formatter.result({
  "duration": 517222500,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userClickOnLoginButton()"
});
formatter.result({
  "duration": 78680400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "James Bond",
      "offset": 55
    }
  ],
  "location": "CustomerActions.userShouldSeeLogoutButtonAndLogoutSuccessfully(String)"
});
formatter.result({
  "duration": 338232100,
  "status": "passed"
});
formatter.after({
  "duration": 757747600,
  "status": "passed"
});
formatter.before({
  "duration": 3315683600,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Customer should deposit money successfully",
  "description": "",
  "id": "bank-manager-should-add-customer-successfully-and-open-account-successfully.;customer-should-deposit-money-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 52,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "Given User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "User clicks on Bank Manager Login Tab",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "User click on add customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "User enter firstame \u003c\"James\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "User enter lastname \u003c\"Bond\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User enter postcode \u003c\"SU38UN\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User click on add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "User should see customer added successfully message",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "User should accept alert",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "User click on home button",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "User clicks on Bank Manager Login Tab",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "User clicks on open account tab",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "User select customer search \u003c\"6\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "User select currency \u003c\"pound\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "User click on process button",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "User should see customer account details \u003c\"Account created successfully with account Number :1016\"\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "User click on home button",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "User clicks on customer login tab",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "User search for customer from dropdown \u003c\"6\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "User click on deposit money tab",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "User enter amount \u003c\"100\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "User click on deposit amount button",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "User should see money deposited successfully message",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomerActions.givenUserIsOnHomepage()"
});
formatter.result({
  "duration": 29500,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClicksOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 680911800,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 414772400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "James",
      "offset": 22
    }
  ],
  "location": "BankManagerSteps.userEnterFirstame(String)"
});
formatter.result({
  "duration": 393584100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bond",
      "offset": 22
    }
  ],
  "location": "BankManagerSteps.userEnterLastname(String)"
});
formatter.result({
  "duration": 86319600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SU38UN",
      "offset": 22
    }
  ],
  "location": "BankManagerSteps.userEnterPostcode(String)"
});
formatter.result({
  "duration": 85634200,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 52472200,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userShouldSeeCustomerAddedSuccessfullyMessage()"
});
formatter.result({
  "duration": 13000,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userShouldAcceptAlert()"
});
formatter.result({
  "duration": 14827300,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClickOnHomeButton()"
});
formatter.result({
  "duration": 74333800,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClicksOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 62854800,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClicksOnOpenAccountTab()"
});
formatter.result({
  "duration": 53835000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 30
    }
  ],
  "location": "BankManagerSteps.userSelectCustomerSearch(String)"
});
formatter.result({
  "duration": 518400500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pound",
      "offset": 23
    }
  ],
  "location": "BankManagerSteps.userSelectCurrency(String)"
});
formatter.result({
  "duration": 167052000,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClickOnProcessButton()"
});
formatter.result({
  "duration": 63804400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account created successfully with account Number :1016",
      "offset": 43
    }
  ],
  "location": "BankManagerSteps.userShouldSeeCustomerAccountDetails(String)"
});
formatter.result({
  "duration": 16898900,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClickOnHomeButton()"
});
formatter.result({
  "duration": 43498300,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userClicksOnCustomerLoginTab()"
});
formatter.result({
  "duration": 52979300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 41
    }
  ],
  "location": "CustomerActions.userSearchForCustomerFromDropdown(String)"
});
formatter.result({
  "duration": 475960600,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userClickOnLoginButton()"
});
formatter.result({
  "duration": 50500000,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userClickOnDepositMoneyTab()"
});
formatter.result({
  "duration": 428009300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 20
    }
  ],
  "location": "CustomerActions.userEnterAmount(String)"
});
formatter.result({
  "duration": 387282000,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userClickOnDepositAmountButton()"
});
formatter.result({
  "duration": 52453100,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userShouldSeeMoneyDepositedSuccessfullyMessage()"
});
formatter.result({
  "duration": 34650000,
  "status": "passed"
});
formatter.after({
  "duration": 719559800,
  "status": "passed"
});
formatter.before({
  "duration": 3630996500,
  "status": "passed"
});
formatter.scenario({
  "line": 80,
  "name": "Customer should withdraw money successfully",
  "description": "",
  "id": "bank-manager-should-add-customer-successfully-and-open-account-successfully.;customer-should-withdraw-money-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 79,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 81,
  "name": "Given User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 82,
  "name": "User clicks on Bank Manager Login Tab",
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "User click on add customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "User enter firstame \u003c\"James\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "User enter lastname \u003c\"Bond\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "User enter postcode \u003c\"SU38UN\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "User click on add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "User should see customer added successfully message",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "User should accept alert",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "User click on home button",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "User clicks on Bank Manager Login Tab",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "User clicks on open account tab",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "User select customer search \u003c\"6\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "User select currency \u003c\"pound\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "User click on process button",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "User should see customer account details \u003c\"Account created successfully with account Number :1016\"\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 97,
  "name": "User click on home button",
  "keyword": "When "
});
formatter.step({
  "line": 98,
  "name": "User clicks on customer login tab",
  "keyword": "When "
});
formatter.step({
  "line": 99,
  "name": "User search for customer from dropdown \u003c\"6\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "User click on deposit money tab",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "User enter amount \u003c\"100\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "User click on deposit amount button",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "User should see money deposited successfully message",
  "keyword": "Then "
});
formatter.step({
  "line": 105,
  "name": "User should click on withdrawal tab",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "User enter withdraw amount \u003c\"50\"\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "User click on withdraw button",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "User should see withdrawal successful message",
  "keyword": "Then "
});
formatter.match({
  "location": "CustomerActions.givenUserIsOnHomepage()"
});
formatter.result({
  "duration": 21800,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClicksOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 524688800,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 374182600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "James",
      "offset": 22
    }
  ],
  "location": "BankManagerSteps.userEnterFirstame(String)"
});
formatter.result({
  "duration": 400386100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bond",
      "offset": 22
    }
  ],
  "location": "BankManagerSteps.userEnterLastname(String)"
});
formatter.result({
  "duration": 77532300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SU38UN",
      "offset": 22
    }
  ],
  "location": "BankManagerSteps.userEnterPostcode(String)"
});
formatter.result({
  "duration": 73709500,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 57025100,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userShouldSeeCustomerAddedSuccessfullyMessage()"
});
formatter.result({
  "duration": 13400,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userShouldAcceptAlert()"
});
formatter.result({
  "duration": 10197100,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClickOnHomeButton()"
});
formatter.result({
  "duration": 66823700,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClicksOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 45385100,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClicksOnOpenAccountTab()"
});
formatter.result({
  "duration": 52680500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 30
    }
  ],
  "location": "BankManagerSteps.userSelectCustomerSearch(String)"
});
formatter.result({
  "duration": 461660500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pound",
      "offset": 23
    }
  ],
  "location": "BankManagerSteps.userSelectCurrency(String)"
});
formatter.result({
  "duration": 198679000,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClickOnProcessButton()"
});
formatter.result({
  "duration": 52061900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account created successfully with account Number :1016",
      "offset": 43
    }
  ],
  "location": "BankManagerSteps.userShouldSeeCustomerAccountDetails(String)"
});
formatter.result({
  "duration": 11486300,
  "status": "passed"
});
formatter.match({
  "location": "BankManagerSteps.userClickOnHomeButton()"
});
formatter.result({
  "duration": 52659300,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userClicksOnCustomerLoginTab()"
});
formatter.result({
  "duration": 48723500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 41
    }
  ],
  "location": "CustomerActions.userSearchForCustomerFromDropdown(String)"
});
formatter.result({
  "duration": 472085600,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userClickOnLoginButton()"
});
formatter.result({
  "duration": 58335500,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userClickOnDepositMoneyTab()"
});
formatter.result({
  "duration": 366174400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 20
    }
  ],
  "location": "CustomerActions.userEnterAmount(String)"
});
formatter.result({
  "duration": 379432300,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userClickOnDepositAmountButton()"
});
formatter.result({
  "duration": 60148200,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userShouldSeeMoneyDepositedSuccessfullyMessage()"
});
formatter.result({
  "duration": 36111700,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userShouldClickOnWithdrawalTab()"
});
formatter.result({
  "duration": 48584800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 29
    }
  ],
  "location": "CustomerActions.userEnterWithdrawAmount(String)"
});
formatter.result({
  "duration": 2069329900,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userClickOnWithdrawButton()"
});
formatter.result({
  "duration": 67959900,
  "status": "passed"
});
formatter.match({
  "location": "CustomerActions.userShouldSeeWithdrawalSuccessfulMessage()"
});
formatter.result({
  "duration": 28879300,
  "status": "passed"
});
formatter.after({
  "duration": 753965100,
  "status": "passed"
});
});