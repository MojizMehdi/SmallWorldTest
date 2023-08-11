$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginTest.feature");
formatter.feature({
  "line": 1,
  "name": "As a user, I want to test valid and Invalid login scenario",
  "description": "",
  "id": "as-a-user,-i-want-to-test-valid-and-invalid-login-scenario",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Successful login using valid account",
  "description": "",
  "id": "as-a-user,-i-want-to-test-valid-and-invalid-login-scenario;successful-login-using-valid-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@ValidCase"
    },
    {
      "line": 3,
      "name": "@LoginSuccessful"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User has arrived on Swag Labs website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Submit email using \"\u003cuserName\u003e\" and password using \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Success login to home page with displaying cart button",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "as-a-user,-i-want-to-test-valid-and-invalid-login-scenario;successful-login-using-valid-account;",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 9,
      "id": "as-a-user,-i-want-to-test-valid-and-invalid-login-scenario;successful-login-using-valid-account;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 10,
      "id": "as-a-user,-i-want-to-test-valid-and-invalid-login-scenario;successful-login-using-valid-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Successful login using valid account",
  "description": "",
  "id": "as-a-user,-i-want-to-test-valid-and-invalid-login-scenario;successful-login-using-valid-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@LoginSuccessful"
    },
    {
      "line": 3,
      "name": "@ValidCase"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User has arrived on Swag Labs website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Submit email using \"standard_user\" and password using \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Success login to home page with displaying cart button",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Failed login using invalid account",
  "description": "",
  "id": "as-a-user,-i-want-to-test-valid-and-invalid-login-scenario;failed-login-using-invalid-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@InvalidCase"
    },
    {
      "line": 12,
      "name": "@LoginFailed"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User has arrived on Swag Labs website",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Submit email using \"\u003cuserName\u003e\" and password using \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Login failed with displaying error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "as-a-user,-i-want-to-test-valid-and-invalid-login-scenario;failed-login-using-invalid-account;",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 18,
      "id": "as-a-user,-i-want-to-test-valid-and-invalid-login-scenario;failed-login-using-invalid-account;;1"
    },
    {
      "cells": [
        "standard",
        "123456"
      ],
      "line": 19,
      "id": "as-a-user,-i-want-to-test-valid-and-invalid-login-scenario;failed-login-using-invalid-account;;2"
    },
    {
      "cells": [
        "",
        "1234qw"
      ],
      "line": 20,
      "id": "as-a-user,-i-want-to-test-valid-and-invalid-login-scenario;failed-login-using-invalid-account;;3"
    },
    {
      "cells": [
        "akutest@email.com",
        ""
      ],
      "line": 21,
      "id": "as-a-user,-i-want-to-test-valid-and-invalid-login-scenario;failed-login-using-invalid-account;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Failed login using invalid account",
  "description": "",
  "id": "as-a-user,-i-want-to-test-valid-and-invalid-login-scenario;failed-login-using-invalid-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@LoginFailed"
    },
    {
      "line": 12,
      "name": "@InvalidCase"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User has arrived on Swag Labs website",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Submit email using \"standard\" and password using \"123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Login failed with displaying error message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 20,
  "name": "Failed login using invalid account",
  "description": "",
  "id": "as-a-user,-i-want-to-test-valid-and-invalid-login-scenario;failed-login-using-invalid-account;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@LoginFailed"
    },
    {
      "line": 12,
      "name": "@InvalidCase"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User has arrived on Swag Labs website",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Submit email using \"\" and password using \"1234qw\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Login failed with displaying error message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 21,
  "name": "Failed login using invalid account",
  "description": "",
  "id": "as-a-user,-i-want-to-test-valid-and-invalid-login-scenario;failed-login-using-invalid-account;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@LoginFailed"
    },
    {
      "line": 12,
      "name": "@InvalidCase"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "User has arrived on Swag Labs website",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Submit email using \"akutest@email.com\" and password using \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Login failed with displaying error message",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("OrderCheckout.feature");
formatter.feature({
  "line": 1,
  "name": "As a user, I want to test checkout order",
  "description": "",
  "id": "as-a-user,-i-want-to-test-checkout-order",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Successful order checkout test",
  "description": "",
  "id": "as-a-user,-i-want-to-test-checkout-order;successful-order-checkout-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@ValidCase"
    },
    {
      "line": 3,
      "name": "@CheckOutSuccessful"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User has arrived on Swag Labs website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Submit email using \"\u003cuserName\u003e\" and password using \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Success login to home page with displaying cart button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Add Sauce Labs Backpack into cart",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Add Sauce Labs Bike Light into cart",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I am clicking on cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am clicking on Check Out Button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I send First Name \"\u003cFirstName\u003e\" on information page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I send Last Name \"\u003cLastName\u003e\" on information page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I send Postal Code \"\u003cPostalCode\u003e\" on information page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I am clicking on Continue Button on information page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify Checkout Overview page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Success Check out page with message displayed \"\u003cSuccess_Message\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "as-a-user,-i-want-to-test-checkout-order;successful-order-checkout-test;",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "FirstName",
        "LastName",
        "PostalCode",
        "Success_Message"
      ],
      "line": 19,
      "id": "as-a-user,-i-want-to-test-checkout-order;successful-order-checkout-test;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce",
        "Test",
        "TestTest",
        "12345",
        "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
      ],
      "line": 20,
      "id": "as-a-user,-i-want-to-test-checkout-order;successful-order-checkout-test;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Successful order checkout test",
  "description": "",
  "id": "as-a-user,-i-want-to-test-checkout-order;successful-order-checkout-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@ValidCase"
    },
    {
      "line": 3,
      "name": "@CheckOutSuccessful"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User has arrived on Swag Labs website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Submit email using \"standard_user\" and password using \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Success login to home page with displaying cart button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Add Sauce Labs Backpack into cart",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Add Sauce Labs Bike Light into cart",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I am clicking on cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am clicking on Check Out Button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I send First Name \"Test\" on information page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I send Last Name \"TestTest\" on information page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I send Postal Code \"12345\" on information page",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I am clicking on Continue Button on information page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify Checkout Overview page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Success Check out page with message displayed \"Your order has been dispatched, and will arrive just as fast as the pony can get there!\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});