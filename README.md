Angular Assignment 02
● You have work inside the same application we created for last assignment.
● Implement multi-module system(at-least app module, auth module, features
module).
● Make use of authguard to authorize the routes.
● Design 404 page not found screen for wildcard route.
● Design 401 unauthorized screen for routes rejected by Authgaurd.
● Make use of services to make an API calls
● Design login screen which will use data from JSON server for authentication.
● Login form should have proper validation and error messages.
● Use of *ngFor to iterate existing production list.
● Use pipes to convert values into different format
    1. Name => Capitalize
    2. Price => Dollars
    3. Release Date => Medium Date
● On product details page use of *ngIf for stock units as follows:
    1. If stock_units > 10 then status should be Available in green text color
    2. If stock_units <= 10 and stock_units > 3 then status should be Only
     {{stock_units}} left in orange text color.
    3. If stock_units <= 3 then status should be Only {{stock_units}} left in red
     text color.
● Use of TemplateRef in your application(Make it by yourself, Optional).