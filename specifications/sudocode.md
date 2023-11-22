
# Workflow Pseudocode
 
## 1.Project API

### 1.1 Function to add a new project

- Method: POST
- API End Point: `/project`
- Request: `req.body`
- Response: `res.status(200).json({ data: newProject })`

    1. when the user hits the `/project` endpoint an event is started.
    2. this event triggers the correponding lambda with the request body.
    3. Lambda contains the asynchronous function with logical code for connecting to the postgresql database.
    4. we are using aws secrets manager to store our postgresql credentials.
    5. Lambda recieve postgresql credentials from aws secrets manager and connection is made to the corresponding database.
    6. lambda function takes the request object which has details of new project from the user
    7. adds the new project to the `project` table in the database by executing the POST query.
    8. Then the connection to the database is terminated and the instance of the lambda is no longer in existence.

### 1.2 Function to update an existing project based on id.

- Method: PUT
- API End Point: `/project/{id}`
- Request: `req.params.id`
- Response: `res.status(200).json({ data: newProject })`

    1. when the user hits the `/project/{id}` endpoint an event is started.
    2. this event triggers the correponding lambda with the request body.
    3. Lambda contains the asynchronous function with logical code for connecting to the postgresql database.
    4. we are using aws secrets manager to store our postgresql credentials.
    5. Lambda recieve postgresql credentials from aws secrets manager and connection is made to the corresponding database.
    6. lambda function takes the request object which has updated details of the project and an `{id}` from the user 
    7. updates the `project` table in the database by executing the PUT postgresql query.
    8. Then the connection to the database is terminated and the instance of the lambda is no longer in existence.

### 1.3 Function to delete a project based on id.

- Method: DELETE
- API End Point: `/project/{id}`
- Request: `req.params.id`
- Response: `res.status(200).json({ message: 'Stage deleted successfully' });`

    1. when the user hits the `/project/{id}` endpoint an event is started.
    2. this event triggers the correponding lambda with the request body.
    3. Lambda contains the asynchronous function with logical code for connecting to the postgresql database.
    4. we are using aws secrets manager to store our postgresql credentials.
    5. Lambda recieve postgresql credentials from aws secrets manager and connection is made to the corresponding database.
    6. lambda function takes the `{id}` of the project from the user 
    7. deletes the project from the `project` table of the database by executing the DELETE query.
    8. Then the connection to the database is terminated and the instance of the lambda is no longer in existence.
   
### 1.4 Function to get list of all projects 

- Method: GET
- API End Point: `/project`
- Request: async `(req, res)`
- Response: `res.status(200).json(project)`

    1. when the user hits the `/project` endpoint an event is started.
    2. this event triggers the correponding lambda with the request body.
    3. Lambda contains the asynchronous function with logical code for connecting to the postgresql database.
    4. we are using aws secrets manager to store our postgresql credentials.
    5. Lambda recieve postgresql credentials from aws secrets manager and connection is made to the corresponding database.
    6. lambda function takes the request from the user
    7. gets All projects from the `project` table from the database by executing the GET query.
    8. Then the connection to the database is terminated and the instance of the lambda is no longer in existence.

### 1.5 Function to get an existing project basedon id.

- Method: GET
- API End Point: `/project/{id}`
- Request: async `(req, res)`
- Response: `res.status(200).json(project)`

    1. when the user hits the `/project/{id}` endpoint an event is started.
    2. this event triggers the correponding lambda with the request body.
    3. Lambda contains the asynchronous function with logical code for connecting to the postgresql database.
    4. we are using aws secrets manager to store our postgresql credentials.
    5. Lambda recieve postgresql credentials from aws secrets manager and connection is made to the corresponding database.
    6. lambda function takes the `{id}` from the user
    7. gets the details of the project from the `project` table in the database by executing the GET query.
    8. Then the connection to the database is terminated and the instance of the lambda is no longer in existence.

## 2.Stage Management API

### 2.1Add a New Stage

- Method: POST
- API End Point: `/project/{projectid}/stages`
- Request: `req.body`
- Response: `res.status(201).json({ data: newStage })`

    1. when the user hits the `/project/{projectid}/stages` endpoint an event is started.
    2. this event triggers the correponding lambda with the request body.
    3. Lambda contains the asynchronous function with logical code for connecting to the postgresql database.
    4. we are using aws secrets manager to store our postgresql credentials.
    5. Lambda recieve postgresql credentials from aws secrets manager and connection is made to the corresponding database.
    6. lambda function takes the request object which has details of new project from the user.
    7. adds the new stage to the `project` table in the database by executing the POST query.
    8. Then the connection to the database is terminated and the instance of the lambda is no longer in existence.
   
### 2.2 Get a Stage by ID

- Method: GET
- API End Point: `  /project/{projectid}/stages/{id}`
- Request: async `(req, res)`
- Response: `res.status(200).json(stageId);`

    1. when the user hits the `/project/{projectid}/stages/{id}` endpoint an event is started.
    2. this event triggers the correponding lambda with the request body.
    3. Lambda contains the asynchronous function with logical code for connecting to the postgresql database.
    4. we are using aws secrets manager to store our postgresql credentials.
    5. Lambda recieve postgresql credentials from aws secrets manager and connection is made to the corresponding database.
    6. lambda function takes the `projectid`,`{id}` from the user
    7. gets the details of the stage from the `stage` table in the database by executing the GET query.
    8. Then the connection to the database is terminated and the instance of the lambda is no longer in existence.

### 2.3 Update an Existing Stage based on id

- Method: PUT
- API End Point: ` /project/{projectid}/stages/{id}`
- Request: `req.params.id`
- Response: `res.status(200).json({ data: newStage })`

    1. when the user hits the `/project/{projectid}/stages/{id}` endpoint an event is started.
    2. this event triggers the correponding lambda with the request body.
    3. Lambda contains the asynchronous function with logical code for connecting to the postgresql database.
    4. we are using aws secrets manager to store our postgresql credentials.
    5. Lambda recieve postgresql credentials from aws secrets manager and connection is made to the corresponding database.
    6. lambda function takes the request object which has updated details of the stage and `projectid`, `{id}` from the user
    7. updates the `stage` table in the database by executing the postgresql query.
    8. Then the connection to the database is terminated and the instance of the lambda is no longer in existence.

### 2.4 Delete a Stage by id

- Method: DELETE
- API End Point: ` /project/{projectid}/stage/{id}`
- Request: `req.params.id`
- Response: `res.status(200).json({ message: 'Stage deleted successfully' });`

    1. when the user hits the `/project/{projectid}/stages/{id}` endpoint an event is started.
    2. this event triggers the correponding lambda with the request body.
    3. Lambda contains the asynchronous function with logical code for connecting to the postgresql database.
    4. we are using aws secrets manager to store our postgresql credentials.
    5. Lambda recieve postgresql credentials from aws secrets manager and connection is made to the corresponding database.
    6. lambda function takes `projectid` and `id` from the user
    7. deletes the stage from the `stage` table of the database by executing the DELETE query.
    8. Then the connection to the database is terminated and the instance of the lambda is no longer in existence.
   
### 2.5 Function to list stages in particular project

- Method: GET
- API End Point: `/project/{projectid}/stages`
- Request: async `(req, res)`
- Response: `res.status(200).json(stages)`

    1. when the user hits the `/project/{projectid}/stages` endpoint an event is started.
    2. this event triggers the correponding lambda with the request body.
    3. Lambda contains the asynchronous function with logical code for connecting to the postgresql database.
    4. we are using aws secrets manager to store our postgresql credentials.
    5. Lambda recieve postgresql credentials from aws secrets manager and connection is made to the corresponding database.
    6. lambda function takes the `projectid` from the user
    7. gets all stages from the `stage` table from the database by executing the postgresql query.
    8. Then the connection to the database is terminated and the instance of the lambda is no longer in existence.
