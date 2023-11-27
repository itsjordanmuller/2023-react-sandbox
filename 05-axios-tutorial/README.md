## [5. Axios](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/05-axios-tutorial/axios)

<img src="https://custom-icon-badges.demolab.com/badge/Axios%20Tutorial-e8b2ff.svg?logo=bookmark&logoColor=000000&style=for-the-badge" width="100%" alt="Axios Tutorial" />

This section of the React sandbox focuses on demonstrating various features and capabilities of Axios, a popular promise-based HTTP client for making HTTP requests in JavaScript applications. The tutorial covers basic to advanced Axios functionalities within a React application context.

### Objectives
- To understand and implement various HTTP request methods using Axios.
- To explore the configuration of request headers and handling of responses.
- To learn about setting global defaults and creating custom instances in Axios.
- To use interceptors for request and response manipulation.

### Setup and Installation
- **Dependencies**: `axios`
- **Installation**: `npm install axios`
- **Import**: `import axios from 'axios';`

### Key Features Implemented

#### 1. Basic HTTP Requests
- **GET, POST, PUT/PATCH, DELETE**: Implemented different request types like `axios.get()`, `axios.post()`, `axios.put()`, `axios.delete()`.
- **Handling Promises**: Demonstrated the use of async-await for handling Axios promises.
- **Error Handling**: Showcased error handling techniques using try-catch blocks.

#### 2. Headers Configuration
- Explored setting headers for GET and POST requests.
- Implemented a practical example to fetch a dad joke using custom headers.

#### 3. Post Request
- Demonstrated sending data to the server using `axios.post()` method.
- Covered additional options like setting authentication headers.

#### 4. Global Defaults
- Discussed the setting of global default headers and baseURL in Axios.
- Addressed the changes in the latest version of Axios regarding the 'common' property.

#### 5. Custom Axios Instance
- Created a custom Axios instance with pre-configured baseURL and headers.
- Showcased how to use custom instances for specific API calls.

#### 6. Interceptors
- Implemented both request and response interceptors.
- Showcased their use in logging and error handling.

### Techniques Used
- **React Functional Components**: Utilized functional components for structuring the application.
- **Hooks (useState, useEffect)**: Employed React hooks for state management and side effects.
- **Async-Await**: Used for asynchronous API calls.
- **Error Handling**: Techniques to catch and handle errors in HTTP requests.
- **Custom Styling**: Employed CSS for custom styling of components.

### Learning Outcomes
- **Axios vs Fetch API**: Learned the advantages of Axios over the native Fetch API in terms of automatic JSON data transformation and error handling.
- **Interceptors Usage**: Gained insights into the power of interceptors for global request/response handling.
- **Global vs Custom Instance**: Understood the significance of using global default settings versus custom instances for different use cases.

### Future Enhancements
- Implement more complex Axios features like cancellation tokens.
- Explore integration with state management libraries like Redux for better state handling of HTTP responses.