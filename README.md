# Moment 4 DT207G Part 2

This project is part of Moment 4 -  *"Autentisering och säkerhet"* in the course Backend-baserad webbutveckling (DT207G) at Mittuniversitetet, Sundsvall. 

This is a simple frontend site built with HTML, CSS and JavaScript that interacts with a backend API to incorporate user authentication and access-controlled content. The backend API can be found here: **[API](https://github.com/gustafsson96/moment4dt207g.git)** and is created specifically for this assignment.

Link to the live site: **[Moment 4](https://dt207gmoment4jg.netlify.app)**

## Features

* User registration and login.
* JWT-based authentication.
* Protected page with fun facts visible only to logged in users. 
* User feedback messages. 
* Responsive design. 

## Technologies and Tools Used
* HTML
* CSS
* JavaScript
* Vite (for local development)
* **[Netlify](https://www.netlify.com/)** for deployment

## Run Locally
1. Clone repository by running: git clone https://github.com/gustafsson96/moment4.2dt207g.git
2. Navigate to the directory: cd project-name-here
3. Install dependencies: npm install
4. Start a development server by running: npm run dev

## API Interaction
* **Login:** The user's credentials are sent to the /api/login endpoint via a POST request. If successful, a JSON Web Token (JWT) is returned and stored in localStorage, which is used to access the protected page. 

* **Registration:** New users can sign up by selecting a username and password that is sent to the /api/register endpoint via a POST request. The backend handles validation (correct length and that the user does not already exist) and user creation. A JSON Web Token is returned if user registration is successful. 

* **Protected Content:** After logging in, users are redirected to a page displaying fun facts that are collected from the API. This page can only be accessed by a user with a valid JWT. 