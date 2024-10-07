# Mars Weather Service API

This is a Node.js/Express application that serves weather data from NASA's InSight Mars Weather Service API. The backend API processes the data and provides it to the frontend for visualization.

## Features

- Provides Mars weather data, including high/low temperatures, wind speeds, and atmospheric pressure.
- Fetches data from NASA's InSight API and serves it via custom endpoints.
- Implements error handling for API requests.
- Cross-Origin Resource Sharing (CORS) is enabled to allow requests from the frontend.

## Tech Stack

- **Node.js**: JavaScript runtime environment.
- **Express**: Fast and minimalist web framework for Node.js.
- **Axios**: Promise-based HTTP client for the browser and Node.js.
- **CORS**: Middleware for enabling cross-origin requests.
- **Render/Heroku**: Deployment platforms.

## Prerequisites

Before setting up and running the application, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- NASA API Key (You can get it from [NASA's Open API](https://api.nasa.gov/))

## Installation

### 1. Clone the repository:

### 2. Install dependencies:

Make sure you have npm installed, then run the following command to install the necessary packages:
```bash
npm install
```

### 3. Create a .env file:
In the root directory of your project, create a .env file and add your environment variables. You will need to include your NASA API key for now you dont need it i have manually hard coded the api key in relavant service

### 4. Run the application:
Once the .env file is configured, you can start the application locally by individually going into backend and frontend folders using cd backend and cd frontend and running the specific command 

Running the Development Server
To start the project in development mode, run the following command:

```bash
npm run dev
```

Building for Production
To build the project for production, run:


```bash
npm run build
```



