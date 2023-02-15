
# basic-express-server

LAB - Class 02

Project: basic-express-server

Author: Ashwini Uppal

Problem Domain
Basic express Server where we write some middleware and practice deployment. Tested this by writing 5 different test cases and running npm test. All the tests are passing and deployed app is working as expected.

#### Links and Resources
GitHub Actions ci/cd
 [Action tab](https://github.com/ashuppal/basic-express-server/actions)

#### Dev back-end server url
 [backend server url](https://lab02-dev.onrender.com)


Setup
.env requirements (where applicable) - created .env file

Features / Routes

Deploy as Dev Branch once ci/cd works. Merge dev branch into main.

Tests

passed all the 5 test:
1. 404 on a bad route - {"error":"404 Not Found","route":"/what","message":"The route you are looking for does not exist"}
2. 404 on a bad method - {"error":"404 Not Found","path":"/what","message":"The route you are looking for does not exist"}
3. 500 if no name in the query string - {"error":"500 Server Error","route":"/person","query":{},"message":"No name provided"}
4. 200 if the name is in the query string - Name: ash
5. given an name in the query string, the output object is correct - Name: ash

UML
![UML](./assets/UML.png)
