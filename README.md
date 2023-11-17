# React Sandbox
Self-Paced Learning Sandbox for React, Axios, Node.js, Node Package Manager (npm), React Router 6, React Query 4, Redux Toolkit, Create React App, Vite, ContentfulCMS, Tailwind CSS, daisyUI, HTML, CSS & JavaScript

![React](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black)
![Axios](https://img.shields.io/badge/Axios-5A29E4.svg?style=for-the-badge&logo=Axios&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-CA4245.svg?style=for-the-badge&logo=React-Router&logoColor=white)
![React Query](https://img.shields.io/badge/React%20Query-FF4154.svg?style=for-the-badge&logo=React-Query&logoColor=white)
![Redux](https://img.shields.io/badge/Redux%20Toolkit-764ABC.svg?style=for-the-badge&logo=Redux&logoColor=white)
![Create React App](https://img.shields.io/badge/Create%20React%20App-09D3AC.svg?style=for-the-badge&logo=Create-React-App&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=Vite&logoColor=white)
![Contentful CMS](https://img.shields.io/badge/Contentful%20CMS-2478CC.svg?style=for-the-badge&logo=Contentful&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4.svg?style=for-the-badge&logo=Tailwind-CSS&logoColor=white)
![daisyUI](https://img.shields.io/badge/daisyUI-5A0EF8.svg?style=for-the-badge&logo=DaisyUI&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)

## Technologies
### [React](https://react.dev/)
React is a free and open-source front-end JavaScript library for building user interfaces based on components.

### [Axios](https://axios-http.com/)
Axios is a JavaScript library used to make HTTP requests from node. js or XMLHttpRequests from the browser.

### [React Router](https://reactrouter.com/)
React Router is a JavaScript framework that handles client and server-side routing in React applications, enabling the creation of single-page web or mobile apps that allow navigating without refreshing the page.

### [React Query](https://tanstack.com/)
React Query is a data-fetching and state management library for React applications that simplifies fetching, caching, and updating data.

### [Redux](https://redux.js.org/)
Redux is an open-source JavaScript library for managing and centralizing application state.

### [Redux Toolkit](https://redux-toolkit.js.org/)
Redux Toolkit is our official, opinionated, batteries-included toolset for efficient Redux development.

## [1. Fundamentals](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/01-fundamentals/react-fundamentals)

In this section of my React learning journey, I have meticulously explored the foundational concepts and techniques crucial for building React applications. Each commit in my repository is a step in this journey, reflecting my evolving understanding and application of React.

### Key Learnings

#### Initial Setup and Component Creation

- **React Application Setup**: Leveraged Create-React-App for a streamlined setup and launch of the development server.
- **Creating Components**: Developed my initial `Greeting` component, gaining proficiency in JSX and various component creation methods, including ES7 snippets.

#### Deep Dive into JSX

- **JSX Rules and Syntax**: Mastered the nuances of JSX, including the necessity of wrapper divs, using `React.Fragment`, and understanding self-closing tags.
- **Component Nesting and Prop Drilling**: Explored complex data flow through nested components and prop drilling.

#### Styling and Performance Optimization

- **CSS and Inline Styles**: Experimented with external CSS and inline styles using JavaScript objects, learning about style precedence in React.
- **Image Optimization**: Enhanced performance by shifting image imports from the public folder to the src folder.

#### Advanced Concepts

- **Event Handling and States**: Investigated event handling in JSX, including anonymous functions and the intricacies of event objects.
- **Code Refactoring**: Improved code organization by refactoring components and employing ES6 modules for cleaner, modular code.

#### Building the BookList Application

- **Dynamic Rendering**: Implemented dynamic component rendering using the `map` function and the concept of keys for efficient updates.
- **Props and State Management**: Enhanced the `Book` component's dynamism by passing data as props and utilizing spread operators for props.
- **Styling and Layout**: Focused on CSS for styling individual components and setting responsive layouts.

#### Additional Insights

- **JavaScript in JSX**: Demonstrated the integration of JavaScript in JSX, including handling expressions and variables.
- **Destructuring and Children Props**: Utilized destructuring for cleaner code and explored the use of children props for component flexibility.
- **Event Handling Enhancements**: Delved deeper into event handling, showcasing methods for more concise and direct event management in components.
- **Complex Prop Drilling**: Tackled more advanced prop drilling scenarios involving functions as props.

### Project Structure

- `public/index.html`: Entry point with basic HTML structure and metadata.
- `src/index.js`: JavaScript entry, rendering the `BookList` component.
- `src/Book.js`: Component for displaying book details.
- `src/books.js`: Array of book objects, demonstrating data structuring.
- `src/index.css`: Central CSS file for styling.

## [2. Backroads Project](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/02-backroads-project/backroads-app)

This section of my React learning journey focuses on developing the "BackRoads App," a travel tour showcase application. The process involved setting up the project using Create-React-App, building individual components, and linking them with a centralized data source for dynamic content rendering.

### Development Steps

#### Initial Setup

- **Project Creation**: Used Create-React-App for initial setup.
- **Boilerplate Modification**: Removed unnecessary extras from the src folder.
- **Importing Starter HTML**: Brought in HTML, CSS, and images from the project's starter files and adapted them for React.

#### Component Development and Styling

- **Component Refactoring**: Segmented the app into reusable components, such as `Navbar`, `Hero`, `About`, `Services`, `Tours`, and `Footer`.
- **Dynamic Content Rendering**: Utilized data from `data.js` for dynamic rendering in components like `Navbar`, `Services`, `Tours`, and `Footer`.
- **Styling Adjustments**: Modified CSS to fit the React component structure and adjusted class names to the JSX-friendly `className`.

#### Data Centralization and Management

- **Centralized Data Source**: Created `data.js` to manage content for tours, services, page links, and social links.
- **Dynamic Image Sources**: Modified image sources in components like `Hero` and `About` to dynamically load from the `images` folder.
- **Reusable Sub-components**: Developed sub-components like `PageLinks`, `SocialLinks`, `Service`, and `Tour` for modular content rendering.

#### Advanced Configuration

- **Package.json Modification**: Adjusted `package.json` to include CI environment variables and build scripts for different environments.
- **Component Enhancement**: Implemented features like dynamic page links and social icons, refactoring for better code reuse and maintainability.

### Project Structure

- `App.js`: The main app component integrating all sub-components.
- `data.js`: Central data source for the app's dynamic content.
- `components/`: Folder containing individual components and sub-components.
- `images/`: Contains images used throughout the app.
- `index.js`: Entry point for the React app, rendering `App`.
- `package.json`: Configuration file for dependencies, scripts, and project metadata.

## [3. Advanced React Concepts](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/03-advanced-react/advanced-react)

This section of the project is a deep dive into the more advanced aspects of React. It encompasses a wide range of topics from React hooks, conditional rendering, context API, custom hooks, to performance optimization and much more.

### Project Structure and Topics

This section of the project is methodically structured into directories, each centered around a pivotal React concept:

#### useState

> src/tutorial/01-useState/starter

Explored the basics of useState for handling variables, arrays, objects, and grasped the nuances and common pitfalls.

#### useEffect

> src/tutorial/02-useEffect/starter

Learned about useEffect for managing side effects, data fetching, and the critical role of cleanup functions.

#### Conditional Rendering

> src/tutorial/03-conditional-rendering/starter

Dived into rendering components conditionally using multiple return statements, short-circuit evaluation, and ternary operators.

#### Project Structure

> src/tutorial/04-project-structure

Practiced organizing components, CSS, and JavaScript files for scalability and maintainability, focusing on efficient use of index files.

#### Leveraging JavaScript in React

> src/tutorial/05-leverage-javascript/starter

Embraced JavaScript features like mapping over arrays and object destructuring within React components.

#### Forms

> src/tutorial/06-forms/starter

Handled form inputs and managed form state using the State hook, exploring controlled components in depth.

#### useRef

> src/tutorial/07-useRef/starter

Explored useRef for accessing DOM elements and retaining values across renders without causing re-renders.

#### Custom Hooks

> src/tutorial/08-custom-hooks/starter

Created custom hooks for data fetching and state toggling, abstracting logic for reuse across components.

#### Context API

> src/tutorial/09-context-api

Investigated React's Context API for efficient data passage through component trees, eliminating the need for prop drilling.

#### useReducer

> src/tutorial/10-useReducer/starter

Managed complex state logic with useReducer, particularly beneficial for handling multiple state transitions.

#### Performance Optimization

> src/tutorial/11-performance/starter

Covered performance optimization techniques like memoization, React.memo, useCallback, and useMemo to enhance user experience and reduce unnecessary re-renders.

### Key Learnings and Challenges

Through this journey, I've gained a deeper understanding of React's capabilities and best practices. Here are some of the key takeaways:

- **State Management**: Mastering useState and useReducer for effective state management. Understanding useState and useReducer has been crucial in managing state effectively in React applications.
- **Side Effects**: Grasping the importance of managing side effects in functional components. Managing side effects with useEffect, especially in the context of API calls and event listeners, is vital for functional components.
- **Performance**: Implementing performance optimization strategies for a better user experience. Learning about performance optimizations like memoization and React's built-in hooks (useCallback, useMemo) was enlightening. These tools help in reducing unnecessary re-renders and enhancing user experience.
- **Custom Hooks**: Creating custom hooks to streamline complex logic and promote code reuse. Creating custom hooks allowed me to abstract complex logic and reuse it across components, leading to cleaner and more maintainable code.
- **Context API**: Embracing the Context API for more efficient data management within component trees. Using the Context API helped me understand the importance of a more efficient way of passing data around the component tree, reducing the need for prop drilling.
- **Forms and Refs**: Effectively handling forms and utilizing useRef for DOM interactions. Handling forms and using the useRef hook for direct DOM access and storing mutable values was an essential part of managing user input and interactions.

#### Challenges
Faced various challenges, including but not limited to:
- Implementing multiple returns with different states (loading, error, success).
- Managing complex project structures.
- Handling forms with multiple inputs and the FormData API.
- Using useRef to target DOM nodes and elements without triggering re-renders.
- Implementing the Context API in nested component structures.
- Creating and utilizing custom hooks for specific functionalities.

### Project Highlights

- **Setup**: Established a traditional Vite app with assets provided for focused learning.
- **Advanced Topics**: Engaged in tutorial-based learning with challenges in the starter folder and completed code in the final folder.
- **State and Effect Hooks**: Delved into the intricacies of initial renders, re-renders, and the general rules of hooks.
- **Cleanup Functions and Fetching Data**: Addressed the significance of cleanup functions in useEffect and the nuances of data fetching.
- **Performance Concepts**: Explored automatic batching, React.memo, useCallback, useMemo, useTransition, and the Suspense API.

### Corresponding Projects

Linked theoretical knowledge with practical applications in the following projects:

#### useState
1. Birthday Reminder

#### useEffect and Conditional Rendering
1. Tours
2. Reviews
3. Accordion
4. Menu
5. Tabs
6. Slider

#### Forms
8. Lorem Ipsum Generator
9. Color Shades Generator
10. Grocery Bud

#### useRef
11. Navbar

#### useContext
12. Modal and Sidebar
13. Stripe Menus

#### useReducer and useContext
14. Cart

#### React Router
15. Cocktails

## [4. Fundamental Projects](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects)

### [A. Birthday Buddy](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/01-birthday-buddy/birthday-buddy)

The Birthday Buddy Project is a simple, interactive web application designed to display and manage a list of birthdays. Developed using React, this project showcases fundamental React concepts and functionalities, including the use of state, components, and event handling.

#### Features

- **Data Import and Rendering**: The application imports data from `data.js`, containing an array of objects where each object represents a person with properties like name, age, and image URL.
- **State Management**: Utilizing React's `useState` hook, the application sets up a state variable to hold and manage the imported data. This allows for dynamic updates and rendering of the birthday list.
- **Dynamic List Rendering**: It leverages the `map` method to iterate over the array of people, rendering each person's details. This includes their image (with controlled width via inline styles), name, and age.

- **Component Structure**: The app is structured into components - `App`, `List`, and `Person`:
  - `App.jsx` serves as the main container, managing the state and overall layout.
  - `List.jsx` is responsible for rendering the array of people using the `Person` component.
  - `Person.jsx` focuses on presenting the details of each individual.

- **Interactive Features**: The app features a button in the main container that allows users to clear all items from the birthday list, demonstrating state manipulation and event handling.
- **Styling and Layout**: Custom CSS is used for styling, ensuring a responsive and visually appealing interface.

#### Learning Outcomes

- **React Basics**: Gained practical experience in using React hooks for state management and understanding the component lifecycle.
- **Component Architecture**: Learned how to structure an application using reusable components and passing data via props.
- **Event Handling and State Updates**: Developed skills in handling user interactions and dynamically updating the application state.
- **Styling in React**: Enhanced understanding of applying CSS in React applications for a structured and attractive user interface.

### [B. Tours](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/02-tours/tours)

The Tours Project is an engaging web application developed using React. It focuses on fetching, displaying, and managing a list of tour packages. The project is designed to demonstrate key React concepts such as component creation, state management, conditional rendering, and handling user interactions.

#### Features

- **Component-Based Architecture**: The application is divided into three main components - `Tours`, `Tour`, and `Loading`. Each component has a dedicated file (`Tours.jsx`, `Tour.jsx`, `Loading.jsx`) and is responsible for a specific part of the application.
- **Data Fetching**: In `App.jsx`, the application fetches tour data from a provided URL using the fetch API. While the data is loading, a spinner or loading message is displayed, implemented via the `Loading` component.
- **Dynamic Rendering of Tours**: Once the data is loaded, the `Tours` component stores the tour data in its state. It then maps over this data to render a `Tour` component for each tour, passing necessary details as props.
- **Interactive Tour Management**:
  - **Remove Tour**: Users can remove a tour from the list by clicking a button in the `Tour` component. This updates the state in `Tours` to exclude the removed tour.
  - **Read More Feature**: Each `Tour` component has a 'read more' button that toggles the expansion of the tour description. This is managed by a state within the `Tour` component.
- **Refreshing Tours Data**: The application includes a feature to re-fetch the tours data. When invoked, it fetches the data again from the URL and updates the state, with the loading state reintroduced during this process.

#### Implementation Process

1. **Initial Setup**: Started with the importation of necessary files and setting up the basic React application structure.
2. **Data Fetching**: Implemented the functionality to fetch tours data from an API and handle loading states.
3. **Loading Component**: Configured the `Loading` component to display during data fetching.
4. **Tour Rendering**: Enabled the rendering of individual tours using the `Tour` component within the `Tours` container.
5. **Interactive Features**: Added functionality to remove tours and toggle the display of tour information.
6. **Data Refreshing**: Implemented a feature to refresh the tour list by re-fetching data from the API.

#### Styling and Layout

Custom CSS is employed to provide a responsive and visually appealing layout. The styling ensures a clean and user-friendly interface, enhancing the overall user experience.

#### Learning Outcomes

- **React State and Effect Hooks**: Gained in-depth knowledge of managing component state and side effects.
- **Component Design**: Developed skills in designing and implementing reusable React components.
- **Data Fetching and Rendering**: Learned efficient techniques for fetching data from an API and dynamically rendering components based on the data.
- **User Interaction Handling**: Enhanced understanding of event handling and updating component state based on user actions.

### [C. Reviews](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/03-reviews/reviews)

### [D. Accordion](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/04-accordion/accordion)

### [E. Menu](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/05-menu/menu)

### [F. Tabs](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/06-tabs/tabs)

### [G. Slider](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/07-slider/slider)

### [H. Lorem Ipsum](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/08-lorem-ipsum/lorem-ipsum)

### [I. Color Generator](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/09-color-generator/color-generator)

### [J. Grocery Bud](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/10-grocery-bud/grocery-bud)

### [K. Navbar](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/11-navbar/navbar)

### [L. Sidebar](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/12-sidebar/sidebar)

### [M. Strapi Submenus](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/13-strapi-submenus/strapi-submenus)

### [N. Cart](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/14-cart/cart)

## [5. Axios](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/05-axios-tutorial/axios)

## [6. React Query](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/06-react-query)

## [7. Fetch Stock Images](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/07-unsplash-images/stock-images)

## [8. Contentful CMS](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/08-contentful-cms/contentful)

## [9. MixMaster](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/09-mixmaster/mixmaster)

## [10. Tailwind Portfolio](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/10-tailwind-portfolio/portfolio)

## [11. Redux Toolkit](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/11-redux-toolkit-tutorial)

## [12. Comfy Store](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/12-comfy-store/comfy-store)

## Sources & Credits
Guided Exercises by [John Smilga](https://github.com/john-smilga)