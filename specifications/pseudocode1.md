
# Workflow Pseudocode
 
## 1.Project API

### 1.1 Function to add a new project

- Method: POST
- API End Point: `/project`
- Request: `req.body`
- Response: `res.status(200).json({ data: newProject })`

    1. Request is passed to the API
    2. Lambda is triggered with the request
    3. There is POST method is defined inside the Lambda.
    4. Lambda executes POST sql query.
    5. New project is inserted in the `project` table.

### 1.2 Function to update an existing project based on id.

- Method: PUT
- API End Point: `/project/{id}`
- Request: `req.params.id`
- Response: `res.status(200).json({ data: newProject })`

    1. Request is passed to the API
    2. Lambda is triggered with the request
    3. There is PUT method is defined inside the Lambda.
    4. Lambda executes PUT sql query.
    5. Existing project is updated in the `project` table.

### 1.3 Function to delete a project based on id.

- Method: DELETE
- API End Point: `/project/{id}`
- Request: `req.params.id`
- Response: `res.status(200).json({ message: 'Stage deleted successfully' });`

    1. Request is passed to the API
    2. Lambda is triggered with the request
    3. There is DELETE method is defined inside the Lambda.
    4. Lambda executes DELETE sql query.
    5. Existing project is deleted from the `project` table.
   
### 1.4 Function to get list of all projects 

- Method: GET
- API End Point: `/project`
- Request: async `(req, res)`
- Response: `res.status(200).json(project)`

    1. Request is passed to the API
    2. Lambda is triggered with the request
    3. There is GET method is defined inside the Lambda.
    4. Lambda executes GET sql query.
    5. All the projects are listed.

### 1.5 Function to get an existing project basedon id.

- Method: GET
- API End Point: `/project/{id}`
- Request: async `(req, res)`
- Response: `res.status(200).json(project)`

    1. Request is passed to the API
    2. Lambda is triggered with the request
    3. There is GET method is defined inside the Lambda.
    4. Lambda executes GET sql query.
    5. Details of particular project is displayed.

## 2.Stage Management API

### 2.1Add a New Stage

- Method: POST
- API End Point: `/project/{projectid}/stages`
- Request: `req.body`
- Response: `res.status(201).json({ data: newStage })`

    1. Request is passed to the API
    2. Lambda is triggered with the request
    3. There is POST method is defined inside the Lambda.
    4. Lambda executes POST sql query.
    5. New Stage is inserted in the `stage` table.
   
### 2.2 Get a Stage by ID

- Method: GET
- API End Point: `  /project/{projectid}/stages/{id}`
- Request: async `(req, res)`
- Response: `res.status(200).json(stageId);`

    1. Request is passed to the API
    2. Lambda is triggered with the request
    3. There is GET method is defined inside the Lambda.
    4. Lambda executes GET sql query.
    5. Details of particular stage is displayed.

### 2.3 Update an Existing Stage based on id

- Method: PUT
- API End Point: ` /project/{projectid}/stages/{id}`
- Request: `req.params.id`
- Response: `res.status(200).json({ data: newStage })`

    1. Request is passed to the API
    2. Lambda is triggered with the request
    3. There is PUT method is defined inside the Lambda.
    4. Lambda executes PUT sql query.
    5. Existing stage is updated in the `stage` table.
   
### 2.4 Delete a Stage by id

- Method: DELETE
- API End Point: ` /project/{projectid}/stage/{id}`
- Request: `req.params.id`
- Response: `res.status(200).json({ message: 'Stage deleted successfully' });`

    1. Request is passed to the API
    2. Lambda is triggered with the request
    3. There is DELETE method is defined inside the Lambda.
    4. Lambda executes DELETE sql query.
    5. Existing stage is deleted from the `stage` table.
   
### 2.5 Function to list stages in particular project

- Method: GET
- API End Point: `/project/{projectid}/stages`
- Request: async `(req, res)`
- Response: `res.status(200).json(stages)`

    1. Request is passed to the API
    2. Lambda is triggered with the request
    3. There is GET method is defined inside the Lambda.
    4. Lambda executes GET sql query.
    5. All the stages are listed.

