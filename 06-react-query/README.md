## [6. React Query](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/06-react-query)

<img src="https://custom-icon-badges.demolab.com/badge/React%20Query-f4b2ff.svg?logo=bookmark&logoColor=000000&style=for-the-badge" width="100%" alt="React Query" />

The React Query section of the project demonstrates the use of React Query, a powerful library for fetching, caching, and updating data in React applications. This section covers setting up React Query, utilizing its various features, and integrating it with a custom Axios instance for HTTP requests.

### Objectives
- To implement CRUD operations using React Query and Axios.
- To understand and apply the concepts of fetching, caching, and updating data in React.
- To create a seamless user experience with efficient data management.

### Setup and Installation
- **Dependencies**: `@tanstack/react-query`, `axios`
- **Installation**: `npm install @tanstack/react-query axios`

### Key Features Implemented

#### 1. Setting Up Server
- Implemented a local server using Node.js.
- Used `npm install` and `npm start` to initialize and run the server.

#### 2. Custom Axios Instance
- Created a `utils.js` file to set up a custom Axios instance with the base URL of the local server (`http://localhost:5000/api/tasks`).

#### 3. HTTP Methods
- Demonstrated the use of various HTTP methods like GET, POST, PATCH, and DELETE.

#### 4. React Query Setup
- Introduced React Query into the project using `@tanstack/react-query`.
- Set up `QueryClient` and wrapped the main application component (`App`) in `QueryClientProvider`.

#### 5. Implementing First Query
- Used `useQuery` hook from React Query to fetch data from the server.

#### 6. Error Handling in Queries
- Demonstrated error handling within the React Query's useQuery hook.

#### 7. Creating, Updating, and Deleting Tasks
- Implemented task creation, update, and deletion using React Query's `useMutation` hook.
- Utilized mutation hook helpers for managing side-effects.

#### 8. Custom React Hooks
- Refactored CRUD operations into custom React Hooks for a cleaner and more organized codebase.

#### 9. Local Server with Persistent Data
- Modified the local server setup to store tasks data in a `tasks.json` file for persistent local data storage.

### Techniques Used
- **React Functional Components**: Used functional components for building the user interface.
- **React Query**: Implemented fetching, caching, and updating data with React Query.
- **Axios**: Used Axios for making HTTP requests.
- **Custom Hooks**: Developed custom React Hooks for managing data fetching and mutations.
- **Error Handling**: Incorporated error handling strategies for robust application behavior.
- **State Management**: Managed local state using React Query and React's useState hook.

### Learning Outcomes
- **Data Fetching**: Learned how React Query simplifies data fetching and caching.
- **Data Synchronization**: Gained insight into keeping the UI in sync with server data.
- **Mutation and Query Invalidation**: Understood the use of query invalidation to refresh data after mutations.
- **Performance Optimization**: Explored how React Query optimizes performance by reducing unnecessary renders and network requests.

### Future Enhancements
- Implement advanced React Query features like pagination and infinite scrolling.
- Explore integration with TypeScript for type safety.