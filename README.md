# Weather App

http://weatherapp-env.eba-ibzg88ts.us-east-1.elasticbeanstalk.com/

The Weather App is a web application that allows users to get weather information for different locations.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [References](#Sites-used)
- [Bugs-and-issues]

## Features

- Get weather information for specific locations.
- User authentication to access personalized data.

## Technologies Used

- Frontend:
  - React (with React Router)
  - HTML5
  - CSS3
  - Axios (for making API requests)

- Backend:
  - Node.js
  - Express.js
  - MongoDB 
  - Mongoose

## Setup and Installation

1. Clone the repository:
2. Install dependencies:
3. Start the frontend and backend servers:


The frontend will run at `http://localhost:3000`, and the backend will run at `http://localhost:4000`.

## Usage

1. Navigate to the homepage of the Weather App (`http://localhost:3000`).
2. Enter a location in the search bar and click the "Search" button to get weather information for that location.
3. Optionally, sign in to access personalized data, such as saving favorite locations.

## API Endpoints

- GET `/api/weather/:location`: Fetch weather data for a specific location.

- POST `/api/signin`: Sign-in user with email and password.

## Refrences to Sites used.
- https://W3schools.com/ 
- https://Stackoverflow.com/

## Busg and issues.
1. Were not able to Connect frontend in AWS.
2. LogIn and SignUp not functional.








