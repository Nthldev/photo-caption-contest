# API Photo Contest Caption
**A project part of the Back-End Path on CodeAcademy**

[CodeAcademy project link](https://www.codecademy.com/journeys/back-end-engineer/paths/becj-22-security-infrastructure-scalibility/tracks/becj-22-portfolio-project-photo-caption-contest/modules/becp-22-photo-caption-contest-e59b30e6-216a-4b4e-8618-38b2556b8522/kanban_projects/ext-proj-caption-contest)

## Description

This project was developed as part of the Back-End Engineer Career Path.
It was developed offline in my own computer using VSCode.

## Project Summary (Scope)

> In this project you will create the backend for a platform for users to participate in a photo caption contest. Your server will host a few images and you will create endpoints to authenticate and authorize users. In order for a user to create a caption, they will need to be authenticated (signed in). You will need a database design and schema in order to integrate a database layer to store all your users and captions. You will use PostgreSQL and the ORM, sequelize to communicate between your database and your server. As you create your endpoints you will be testing them on Postman to ensure that they work correctly. Once the server is running, you will use a localized cache to optimize the performance of frequently requested data. Finally, you will write the documentation using Swagger and deploy your project to Render.

### Project Objectives:

- Use Git version control
- Create documentation using the Swagger API
- Implement a database
- Integrate existing API endpoints with the database layer
- Database implementation for transactions
- Deploy the application using Render

### Prerequisites:

- Command line and file navigation
- Git and GitHub
- Javascript
- Node.js/Express
- Postman
- PostgreSQL
- Database relationships and configuration
- Sequelize
- Render

### Dependencies utilized on the project

- bcrypt (6.0.0)
- dotenv (17.4.2)
- express (5.2.1)
- express-session (1.19.0)
- node-cache (5.1.2)
- pg (8.21.0)
- pg-hstore (2.3.4)
- sequelize (6.37.8)
- swagger-jsdoc (6.3.0)
- swagger-ui-express
- nodemon (3.1.14) 

---

## How to run it locally

Follow the steps below to run it locally in your machine.

### Prerequisites

- [Node.js](https://nodejs.org)
- [Git](https://git-scm.com)
- [PostgreSQL](https://www.postgresql.org/)

### Step by Step

1. **Clone Repository**

``` bash
git clone https://github.com/Nthldev/photo-caption-contest.git
```

2. **Access the root folder of the project**

``` bash
cd .../photo-caption-contest
```

3. **Install dependencies**

``` bash
npm install
```

4. **Create a .env on the root folder of the project with your credentials, port, keys etc.** 

``` bash
cp .env.example .env
```

5. **Start the server**

``` bash
npm start
```

6. **Accessing the API**

After initiating successfully the API will be avaiable on the following address:

* **URL Base:** `http://localhost:3000`

---

## Avaiable Endpoints

- **Homepage:** `GET http://localhost:3000`

### General Endpoints

- **Retrieve all images:** `GET http://localhost:3000/images`
- **Retrieve an image by ID:** `GET http://localhost:3000/images/:id`
- **Insert a caption to an image by its ID:** `POST http://localhost:3000/images/:id/captions`

### Authentication Endpoints

- **Register new user:** `POST http://localhost:3000/auth/register`
- **Login user:** `POST http://localhost:3000/auth/login`
- **Logout user:** `POST http://localhost:3000/auth/logout`

## Link to documentation using Swagger

- `http://localhost:3000/api-docs`

## Technical Decisions

- **Retrieve images with captions**: The exercise explicitly requires that captions associated with photos should only be accessed when fetching an image by ID, and not when fetching all images.

- **Session Storage**: MemoryStore in development. For production, connect-pg-simple or Redis is recommended.

- **Authentication**: bcrypt + express-session

- **Authorization**: If the user is not authorized, they will not be redirected by the server. The server will only return the correct error message and status code, leaving the redirection logic up to the front-end.

- **ORM**: Sequelize with PostgreSQL

- **Utils**: Hash function using bcrypt is currently placed directly in authController. For production, it is recommended to create a `/utils` folder for helper functions.

- **Commits**: Commits were initially made in the developer's native language (Portuguese) and kept this way to maintain consistency. However, making commits in English is recommended for global understanding.

- **Cache/JSON**: Due to an error encountered during development between the cache and the Sequelize object, I chose to convert the Sequelize instances into pure JSON using `.toJSON()` before inserting them into the cache, which is actually a best practice. The strategy chosen for cache maintenance was cache-aside.

## Possible future improvements

- Create an 'account' endpoint to mantain personal account data as name, email and password.
- Create a web app that displays photos, captions, and allows users to register and submit captions.
- Design and implement a voting mechanism for ranking caption submissions.


## 👤 Autor

Desenvolvido por **Nathan Levis**. Get in touch!

[![LinkedIn](https://shields.io)](Soon!)
[![GitHub](https://shields.io)](https://github.com/Nthldev)