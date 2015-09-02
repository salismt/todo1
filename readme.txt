- public <!-- holds all files for frontend-->
----- core.js <!-- all angular code for app -->
----- index.html <!-- main view -->

- package.json <!-- npm config to install dependencies -->
- server.js <!-- Node configuration -->server.js where we will:

- Configure our application
- Connect to our database
- Create our Mongoose models
- Define routes for our RESTful API
- Define routes for our frontend Angular application
- Set the app to listen on a port so we can view it in our browser

The index.html is needed to interact with angular. We will:

- Assign Angular module and controller
- Initialize the page by getting all todos
- Loop over the todos
- Have a form to create todos
- Delete todos when they are checked