A simple demonstartion of a Blog, with bacnk REST API and Node.JS. The backend here used is MongoDB. Following dependencies 
will be required to run this project - 
    1. "bcryptjs",
    2. "express",
    3. "mongoose",
    4. "nodemon"

This application requires a connection string from MongoDB, and would require your credentials which can be replaced in
the app.js file. 

To run the application, simply run the command "npm start" or refer package.json for running and testing details. 

The backend allows a user to create, update and delete a user, and a blog. The blog and users share a one to many relationship.
A user can have multiple blogs, while a blog can only have 1 user. The user and blog models are defined under model folder. 

All the testing for the application is carried out through Postman. To refer API endpoints, refer blog-routes and user-routes
files. 

Possible errors to encounter - 
    1. Dependencies not installed -> use npm to install dependencies. 
    2. Port already in use -> If the port is already in use, switch to a different available port for localhost.
    3. URL not written properly in Postman -> refer to routes folder for correct routing.