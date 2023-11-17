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

#### [A. useState](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/03-advanced-react/advanced-react/src/tutorial/01-useState/starter)

Explored the basics of useState for handling variables, arrays, objects, and grasped the nuances and common pitfalls.

##### `01-error-example.jsx`
In `ErrorExample`, I explored a common mistake when trying to update a state variable in React without using `useState`. The `count` variable is initialized as `0`, and I implemented an `increaseCount` function to increment it. However, despite the count being incremented in the function, it doesn't trigger a re-render in the component, leaving the UI unchanged. This example serves as a fundamental illustration of why `useState` is essential for updating state in React components.

##### `02-useState-basics.jsx`
In `UseStateBasics`, I applied the `useState` hook to manage the state of a `count` variable. Here, `useState` is imported from React, allowing the component to track and update the `count` state dynamically. The `increaseCount` function now correctly updates the state, and each click on the "Increase" button results in the UI being updated. This exercise demonstrates the basic but crucial concept of state management in React.

##### `03-useState-array.jsx`
`UseStateArray` extends the use of `useState` to manage an array of data. I used `useState` to set an initial state from an external data source. The component allows for individual items to be removed from the state array using the `removeItem` function, which filters out the item by its `id`. There's also a button to clear all items, showcasing how `useState` can handle more complex state logic like filtering or emptying an array.

##### `04-useState-object.jsx`
In `UseStateObject`, I managed the state of an object containing multiple properties. The `useState` hook initializes the state with a person object. The `displayPerson` function demonstrates updating the state object correctly using the spread operator to maintain other object properties. This example provides insights into managing object-type state and the importance of correctly handling state immutability.

##### `05-useState-gotcha.jsx`
`UseStateGotcha` addresses a common pitfall with `useState` when used inside `setTimeout`. It highlights the asynchronous nature of state updates in React. The `handleClick` function utilizes a closure to capture the current state inside `setTimeout`, ensuring the state updates as expected even after a delay. This is a crucial lesson in understanding how React's state updates work in asynchronous scenarios.

Overall, these exercises deepened my understanding of `useState`, emphasizing its importance in React for state management and re-rendering components. I explored various use cases, from simple counters to managing arrays and objects, and tackled common issues like asynchronous state updates.

#### [B. useEffect](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/03-advanced-react/advanced-react/src/tutorial/02-useEffect/starter)

Learned about useEffect for managing side effects, data fetching, and the critical role of cleanup functions.

##### `01-code-example.jsx`
In `CodeExample`, I experimented with calling a function within a functional React component. Here, `sayHello` is invoked on each render, demonstrating how React components behave like normal JavaScript functions. Although this example is straightforward, it sets the stage for understanding more complex side effects and their handling in React components.

##### `02-useEffect-basics.jsx`
`UseEffectBasics` introduces the `useEffect` hook, a fundamental aspect of handling side effects in React. This example showed how `useEffect` runs after every render by default but can be controlled with dependency arrays. By including an empty dependency array, I ensured that the effect runs only once after the initial render, similar to `componentDidMount` in class components. This exercise was pivotal in understanding the basic mechanics of `useEffect`.

##### `03-multiple-effects.jsx`
In `MultipleEffects`, I delved into the concept of using multiple `useEffect` hooks in a single component. Each `useEffect` was tied to a different state variable (`value` and `secondValue`), and I set up separate effects that run when each respective state changes. This approach demonstrated how to isolate side effects based on specific state or prop changes, providing a clearer understanding of how to manage complex component behaviors efficiently.

##### `04-fetch-data.jsx`
`FetchData` was a practical application of `useEffect` for fetching data from an API. This exercise involved making an asynchronous request to the GitHub API to fetch user data. Here, I learned how to integrate `useEffect` with async functions and manage state based on the data received from external sources. It highlighted the importance of `useEffect` in handling asynchronous operations and updating the UI accordingly.

##### `05-cleanup-function.jsx`
Finally, `CleanupFunction` focused on the cleanup aspect of `useEffect`. It demonstrated how to properly clean up side effects, especially those involving subscriptions or event listeners, to prevent memory leaks. The component toggles the visibility of `RandomComponent`, which subscribes to a window scroll event. The cleanup function in the `useEffect` hook ensures that the event listener is removed when the component is unmounted, emphasizing the importance of cleaning up to maintain optimal performance and prevent bugs.

These exercises provided a comprehensive overview of `useEffect`, from basic usage to complex scenarios involving data fetching and cleanup. Each example built upon the previous, enhancing my understanding of managing side effects in functional components using the `useEffect` hook.

#### [C. Conditional Rendering](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/03-advanced-react/advanced-react/src/tutorial/03-conditional-rendering/starter)

Dived into rendering components conditionally using multiple return statements, short-circuit evaluation, and ternary operators.

##### `01-multiple-returns-basics.jsx`
In `MultipleReturnsBasics`, I learned about rendering different components based on state. Using `useState` and `useEffect`, I simulated a loading state that changes after 3 seconds. Initially, the component renders a "Loading..." message. Once the state updates, it renders "Multiple Returns Basics". This example was key in understanding how to use conditional rendering based on state changes in React.

##### `02-multiple-returns-fetch-data.jsx`
In `MultipleReturnsFetchData`, I extended the concept of multiple returns to handle asynchronous data fetching. This exercise involved fetching data from an API and managing different states: loading, error, and success. Depending on the state, the component renders different UI elements. It was a practical demonstration of managing different UI states in response to asynchronous operations, a common pattern in real-world applications.

##### `03-hooks-rule.jsx`
`Example` in `03-hooks-rule.jsx` was an important lesson on the rules of hooks. It demonstrated that hooks must be called at the top level of a React function component and not inside conditional statements. This exercise helped me understand the importance of following the rules of hooks for predictable and bug-free React applications.

##### `04-short-circuit-overview.jsx`
`ShortCircuitOverview` provided an insight into using short-circuit evaluation for conditional rendering. I used logical operators (`&&` and `||`) to render different UI elements based on the state. This method is concise and effective for simple conditional rendering scenarios, especially when toggling the visibility of an element or selecting between two elements.

##### `05-short-circuit-examples.jsx`
In `ShortCircuitExamples`, I applied short-circuit evaluation in more practical scenarios. It involved rendering components or elements based on different truthy or falsy conditions. The exercise also demonstrated using the ternary operator for more complex conditional rendering, providing a clearer distinction between different rendering patterns based on state.

##### `toggle-challenge.jsx`
`ToggleChallenge` was a hands-on exercise in implementing a toggle feature using conditional rendering. The challenge was to show or hide an alert message based on the component’s state. This exercise reinforced my understanding of state-driven UI changes and the practical implementation of user interactions in React components.

##### `07-user-challenge.jsx`
Finally, `UserChallenge` focused on a common use case: toggling between user login and logout states. This involved conditional rendering based on whether the user is logged in or not. Implementing the login and logout functionality and reflecting these changes in the UI was a great practice for managing user authentication states in React applications.

Throughout these exercises, I gained a comprehensive understanding of conditional rendering in React. From handling multiple states and asynchronous data fetching to applying rules of hooks and implementing user interactions, each example contributed to a deeper understanding of dynamically rendering different UI elements based on state and props in React.

#### [D. Project Structure](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/03-advanced-react/advanced-react/src/tutorial/04-project-structure)

Practiced organizing components, CSS, and JavaScript files for scalability and maintainability, focusing on efficient use of index files.

##### `Example` Folder
The `Example` folder contains two components, `FirstComponent` and `SecondComponent`, demonstrating the basic structure of React components. Each component returns a simple header element. The `Index.js` file in this folder imports both components and exports them as part of an `Example` component. This setup showcases how to effectively organize and bundle related components within a single directory, simplifying imports in larger projects.

###### Key Takeaways:
- Organizing related components in a single folder.
- Using an `index.js` file to export multiple components from a folder.

##### `Navbar` Folder
In the `Navbar` folder, I created a `Navbar.jsx` component, which is a simple component returning a header. The folder also includes an `index.jsx` file, which re-exports the `Navbar` component as the default export from the folder. This pattern is useful for maintaining clean and concise import statements in other parts of the application.

###### Key Takeaways:
- Simplifying imports by using an `index.jsx` file for re-exporting components.
- Enhancing the readability of import statements in the application.

##### `Pages` Folder
The `Pages` folder contains two components, `Home.jsx` and `About.jsx`, representing different pages of a web application. Both components are simple, rendering a div with text. The `index.jsx` file in this folder exports both components, allowing them to be imported using destructuring from the folder path in other parts of the application.

###### Key Takeaways:
- Grouping page components in a dedicated folder.
- Utilizing destructuring in import statements for cleaner code.

Overall, this section of the tutorial provided practical insights into organizing components and pages in a React application. By effectively structuring files and utilizing index files for exports, the project becomes more manageable, especially as it scales. This structure also aids in maintaining a clean and understandable codebase, which is crucial for collaborative development and long-term project maintenance.

#### [E. Leveraging JavaScript in React](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/03-advanced-react/advanced-react/src/tutorial/05-leverage-javascript/starter)

Embraced JavaScript features like mapping over arrays and object destructuring within React components.

##### `List.jsx` - Mapping Through an Array
In `List.jsx`, I utilized the JavaScript `map` function to iterate over an array of people and render a `Person` component for each item. This exercise demonstrated the seamless integration of JavaScript array methods within JSX to dynamically render a list of components. The use of the `map` method here is a fundamental technique in React for rendering lists of data.

##### `Person.jsx` - Conditional Rendering and Optional Chaining
`Person.jsx` presented a more nuanced challenge. The goal was to display information about a person, including their image. I used optional chaining (`?.`) to safely access nested properties of an object without causing an error if a certain link in the chain is `null` or `undefined`. This is particularly useful in situations where data may be incomplete or inconsistently structured. 

Overall, these exercises emphasized the importance of JavaScript proficiency in React development. They illustrated how fundamental JavaScript concepts and newer features can be effectively applied in React to create dynamic, flexible, and resilient user interfaces.

#### [F. Forms](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/03-advanced-react/advanced-react/src/tutorial/06-forms/starter)

Handled form inputs and managed form state using the State hook, exploring controlled components in depth.

##### `01-controlled-inputs.jsx`
In `ControlledInputs`, I explored controlled components in React forms. This concept involves managing the form data through React state, using `useState`. Each form input’s value is tied to a state variable, and every change in the input updates this state. The form submission is handled through a `handleSubmit` function that prevents the default form submission and logs the current state. This exercise was crucial in understanding how to handle user inputs in a React-controlled manner.

##### `02-user-challenge.jsx`
`UserChallenge` built on the concept of controlled inputs, with an added complexity of managing a list of users. Here, I implemented a form to add new users, updating the users' state with each submission. Additionally, I integrated a `removeUser` function to demonstrate dynamic state updates in response to user actions. This exercise provided practical experience in handling more complex form states and rendering dynamic lists based on user input.

##### `03-multiple-inputs.jsx`
In `MultipleInputs`, I managed a form with multiple inputs using a single state object. By using a single `handleChange` function and leveraging the input's `name` attribute, I efficiently handled the state of multiple form fields. This pattern reduced redundancy and streamlined the process of updating the state with multiple fields, demonstrating a more scalable approach to form handling in React.

##### `04-other-inputs.jsx`
`OtherInputs` introduced handling different types of form inputs, specifically checkboxes and dropdowns. I managed their states using `useState` and handled changes with respective functions. This exercise highlighted the versatility of React in handling various form elements, showing how to adapt state management techniques for different types of user inputs.

##### `05-form-data.jsx`
In `UncontrolledInputs`, I experimented with the FormData API to handle form submissions. Instead of managing each input's state, I used the FormData API to retrieve form values upon submission. This approach represents an alternative way of handling forms in React, especially useful when not requiring real-time tracking of input values. The exercise demonstrated a less common, yet efficient way of handling forms in React, particularly for simpler use cases.

Through these exercises, I gained a comprehensive understanding of handling forms in React. From controlled inputs, managing multiple inputs, adapting to different input types, to experimenting with the FormData API, each example deepened my knowledge of form handling, a critical aspect of user interactions in web applications.

#### [G. useRef](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/03-advanced-react/advanced-react/src/tutorial/07-useRef/starter)

Explored useRef for accessing DOM elements and retaining values across renders without causing re-renders.

##### `01-useRef-basics.jsx`
In `UseRefBasics`, I delved into the `useRef` hook, a powerful feature in React for accessing DOM elements directly and persisting values across renders. This exercise involved two key aspects of `useRef`:

1. **Accessing DOM Elements:** I used `useRef` to create a reference (`refContainer`) to a text input. This allowed me to focus on the input automatically when the component renders, demonstrating how `useRef` can interact with the DOM.

2. **Tracking Component Renders:** I utilized `useRef` to create a persistent variable (`isMounted`) that doesn't trigger re-renders when its value changes. This variable was used to track if the component had been rendered more than once, illustrating `useRef`'s ability to persist data across renders without causing additional renders.

The `handleSubmit` function showcases a practical use of `useRef` by accessing the value of the input field directly, a common pattern in form handling. This exercise was instrumental in understanding the versatility of `useRef`, from manipulating the DOM to preserving data across component updates, making it a unique tool in the React hook arsenal.

#### [H. Custom Hooks](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/03-advanced-react/advanced-react/src/tutorial/08-custom-hooks/starter)

Created custom hooks for data fetching and state toggling, abstracting logic for reuse across components.

##### `01-toggle.jsx` with `useToggle`
In `ToggleExample`, I utilized the `useToggle` custom hook to manage the visibility of a component. This hook encapsulates the logic of toggling a boolean state, which in this case controls the display of a piece of text. The `useToggle` hook demonstrates the power of custom hooks in abstracting and reusing stateful logic across different components.

##### `02-fetch-data.jsx` with `useFetch`
`FetchData` showcases the use of `useFetch`, a custom hook for fetching data from an API. This hook simplifies the process of making HTTP requests by handling loading states, errors, and data fetching. It shows how custom hooks can encapsulate complex asynchronous logic, making the component more readable and maintainable. 

##### `useFetch.jsx`
The `useFetch` custom hook is a generic hook for fetching data from any URL. It handles the complete lifecycle of a data request, including loading states and error handling. This hook can be used across various components to fetch different data, demonstrating the reusability and modularity of custom hooks.

##### `useFetchUser.jsx`
Similar to `useFetch`, `useFetchUser` is a custom hook but with a more specific purpose - fetching user data. It represents a more specialized version of a data-fetching hook, tailored for a specific data type or endpoint. This highlights how custom hooks can be adapted to suit particular use cases or API structures.

##### `useToggle.jsx`
The `useToggle` hook encapsulates the logic for toggling a boolean state. It's a simple yet effective demonstration of creating reusable logic with hooks. This pattern is useful in numerous scenarios, such as toggling visibility of elements, managing open/close states of modals, or switching between two states in a user interface.

Through these exercises, I explored the concept and power of custom hooks in React. Custom hooks enable the extraction and reuse of complex logic, making components cleaner and more concise. They are a powerful tool for building maintainable and scalable React applications, as they allow for the sharing of functionality across different components without duplicating code.

#### [I. Context API](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/03-advanced-react/advanced-react/src/tutorial/09-context-api)

Investigated React's Context API for efficient data passage through component trees, eliminating the need for prop drilling.

##### Context API Approach

###### `NavLinks.jsx`, `Navbar.jsx`, and `UserContainer.jsx` in Context API Folder

In these files, I explored the use of React's Context API, which is a powerful feature for managing global state across components without the need to prop drill.

- **Context Creation and Usage:** In `Navbar.jsx`, I created a context (`NavbarContext`) and used it to provide a `user` state and a `logoutUser` function to all child components. This demonstrates how to encapsulate and share state and logic within a context.
- **Custom Hook for Context:** `useAppContext` is a custom hook that makes it easier to access context values. This pattern of creating a dedicated hook for context consumption simplifies the process of using context in components.
- **Consuming Context:** In `UserContainer.jsx`, I used the `useAppContext` hook to directly access the `user` and `logoutUser` from the `NavbarContext`. This shows how components deep in the component tree can easily access and manipulate global state without prop drilling.

##### Global Context Approach

###### `App.jsx` and `context.jsx` in Global Context Folder

These files demonstrate a more extensive use of context to manage and distribute global state.

- **Global Context Provider:** In `context.jsx`, a global context (`GlobalContext`) is created, and `AppContext` is a provider component that wraps the entire app. This approach is ideal for larger applications where multiple components at different levels need to access and update global state.
- **Consuming Global Context:** In `App.jsx`, `useGlobalContext` is used to access the global state (`name`). This is an example of how global context can be utilized in different parts of the application, providing a centralized place to manage state.

##### Prop Drilling Approach

###### `NavLinks.jsx`, `Navbar.jsx`, and `UserContainer.jsx` in Prop Drilling Folder

These files illustrate the traditional prop drilling method, where state and functions are passed down through props.

- **Passing Props:** In `Navbar.jsx`, the `user` state and `logoutUser` function are passed as props to `NavLinks`, which in turn passes them down to `UserContainer`. This method requires manually passing down props through each level of components, which can become cumbersome and hard to maintain in larger applications.
- **Receiving Props in Child Components:** In `UserContainer.jsx`, the component receives `user` and `logoutUser` as props. This is straightforward for smaller applications or components with few levels, but it can lead to a lot of repetitive code and makes the components tightly coupled.

Through these exercises, I gained a comprehensive understanding of different state management strategies in React. The Context API and global context approaches allow for more efficient state management in larger applications, avoiding the complexity and maintenance issues associated with prop drilling. Prop drilling, while simpler, is more suitable for small applications with a limited component hierarchy. Each method has its own use cases and understanding when to use each is key to building efficient and maintainable React applications.

#### [J. useReducer](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/03-advanced-react/advanced-react/src/tutorial/10-useReducer/starter)

Managed complex state logic with useReducer, particularly beneficial for handling multiple state transitions.

##### `01-userReducer.jsx`
In `ReducerBasics`, I utilized the `useReducer` hook, an advanced state management tool in React. This hook is particularly useful for managing complex state logic that involves multiple sub-values or when the next state depends on the previous one. The component `ReducerBasics` demonstrates how `useReducer` works in tandem with a reducer function to handle state transitions based on dispatched actions.

- **State Management:** The `useReducer` hook is initialized with a `reducer` function and a `defaultState`. This setup allows for more organized and scalable state management, especially when the state logic becomes complex.

- **Dispatching Actions:** The component includes functions like `removeItem`, `clearList`, and `resetList`, each dispatching a specific action to the reducer. These actions dictate how the state should change, encapsulating the logic within the reducer function.

- **Reducer Function:** The reducer function (`reducer.js`) defines how the state transitions in response to each action. It handles actions like `CLEAR_LIST`, `RESET_LIST`, and `REMOVE_ITEM`, updating the state accordingly. This pattern centralizes the state logic, making it easier to understand and manage.

##### `actions.js`
This file contains constants for the action types. Using constants for action types is a common pattern in Redux and `useReducer` implementations. It helps prevent bugs due to typos in action types and makes the code more maintainable.

##### `reducer.js`
The `reducer` function is where the state management logic resides. It takes the current state and an action, then returns a new state based on the action type. This function is a pure function, meaning it doesn't mutate the current state but returns a new state object. The use of a switch statement or if-else conditions to handle different action types is a standard practice in writing reducers.

Overall, `ReducerBasics` is a practical demonstration of using `useReducer` for state management in React. It highlights the benefits of `useReducer` in handling complex state logic, providing a more structured and scalable way to manage state compared to `useState`, especially in larger applications.

#### [K. Performance Optimization](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/03-advanced-react/advanced-react/src/tutorial/11-performance/starter)

Covered performance optimization techniques like memoization, React.memo, useCallback, and useMemo to enhance user experience and reduce unnecessary re-renders.

##### `01-lower-state`
In this section, I explored the basic setup of state management in React. The `Counter` component manages its own state, incrementing a count on button click. `List` renders a list of `Person` components, each displaying a name. This structure demonstrates a common pattern in React applications, where each component manages its own state or receives data as props.

##### `02-lower-state-challenge`
The `LowerStateChallenge` module introduced a more complex state management scenario. Here, I used a form (`Form.jsx`) to add new people to a list. The `Form` component updates the parent component's (`index.jsx`) state, demonstrating how to lift state up for shared state management across components. This pattern is essential for maintaining consistency and flow of data in larger applications.

##### `03-hooks`
In this module, I focused on optimizing performance using React hooks. The `memo` hook in `List.jsx` helps prevent unnecessary re-renders of the list when the parent component's state changes. `useCallback` in `index.jsx` ensures that the `removePerson` function is not recreated on every render, which is crucial for performance, especially when passing callbacks to deeply nested child components.

##### `04-react-18`
This section delved into React 18's new features for performance optimization. `SlowComponent` is a heavy component, rendering a large list of items. In `index.jsx`, I used the `useTransition` hook to manage a loading state while performing a CPU-intensive task, improving the user experience by avoiding UI freezing. The `Suspense` component and `lazy` loading are used to defer rendering of `SlowComponent`, demonstrating React 18's capabilities in handling heavy components more efficiently.

Through these exercises, I gained a deeper understanding of various strategies for managing and optimizing state in React applications. From basic state management and lifting state up to utilizing advanced hooks and React 18 features, each step provided valuable insights into building efficient, scalable, and performant React applications.

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
[1. Birthday Buddy](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/01-birthday-buddy/birthday-buddy)

#### useEffect and Conditional Rendering

[2. Tours](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/02-tours/tours)

[3. Reviews](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/03-reviews/reviews)

[4. Accordion](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/04-accordion/accordion)

[5. Menu](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/05-menu/menu)

[6. Tabs](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/06-tabs/tabs)

[7. Slider](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/07-slider/slider)

#### Forms

[8. Lorem Ipsum Generator](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/08-lorem-ipsum/lorem-ipsum)

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

The Reviews Project is an interactive web application built using React, showcasing the implementation of a reviews display system. It focuses on rendering user reviews dynamically and providing navigation controls for users to interact with the reviews.

#### Features

- **Data Importation**: The project begins by importing review data from `data.js`, which consists of an array of objects. Each object contains details of a person's review, including their name, job, image URL, and review text.
- **State Management**: A state variable is set up using React's `useState` hook to control the display of the current review. This state holds the index of the currently displayed review.
- **Conditional Rendering**: The application renders the details of the person corresponding to the current index. This includes their image, name, job, and review text.
- **Navigation Controls**:
  - **Previous and Next Buttons**: Users can navigate through the reviews using 'prev' and 'next' buttons. These buttons update the current index and render the respective previous or next review.
  - **Random Review Button**: There is also a feature to display a random review. When clicked, it selects a random index from the reviews array and displays the corresponding review.
- **React Icons Integration**: The project integrates the `react-icons` library to enhance the UI with icons like quotes and arrows for a visually appealing experience.

#### Implementation Process

1. **Initial Setup**: The project starts with importing required files and setting up the basic React application structure.
2. **Data Import and State Setup**: Reviews data is imported from a file, and a state variable is set up to track the currently displayed review.
3. **Review Display**: Implemented the functionality to render the first person's review upon application load.
4. **Interactive Navigation**: Added the ability to cycle through reviews using next and previous buttons.
5. **Random Review Feature**: Integrated a button to display a random review from the array.

#### Styling and Layout

The application is styled using custom CSS to provide a user-friendly and engaging interface. The layout is designed to be intuitive, with clear navigation controls and a pleasant aesthetic.

#### Learning Outcomes

- **State Management in React**: Gained practical experience in using the useState hook for controlling component states.
- **Dynamic Rendering**: Developed skills in rendering components based on the application's state and user interactions.
- **Handling Events**: Enhanced understanding of handling user events like clicks to update the application's state.
- **Integrating External Libraries**: Learned how to integrate and utilize external libraries like `react-icons` in a React project.

### [D. Accordion](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/04-accordion/accordion)

The Accordion Project is a dynamic web application built using React, designed to display a list of frequently asked questions (FAQs) in an accordion-style format. This project emphasizes the use of state management, conditional rendering, and component-based architecture in React.

#### Features

- **Data Handling**: The project begins by importing a set of questions from `data.js`, which consists of an array of objects. Each object represents a FAQ with a title and corresponding information.
- **State Management**: React's `useState` hook is used to manage the state of the accordion. It tracks which question is currently open, allowing for dynamic rendering of the accordion's content.
- **Dynamic Question Rendering**: The application iterates over the questions array, rendering a `SingleQuestion` component for each FAQ. This component includes the question title and a toggle button to show or hide the answer.
- **Toggle Functionality**: Each `SingleQuestion` component has a toggle button that controls the display of the answer. Clicking the button toggles the state of a `showInfo` flag, determining whether the answer text is shown.
- **Exclusive Open Question**: The application is enhanced with functionality to ensure that only one question can be open at a time. This is achieved by modifying the state to track the currently selected question index.

#### Implementation Process

1. **Initial Setup**: The project starts with setting up the basic React application structure and importing necessary files and dependencies.
2. **Data Import and State Setup**: FAQs data is imported, and a state variable is set up to manage the currently open question.
3. **Question Components**: Implemented components for displaying individual questions (`Question`) and the entire list of questions (`Questions`).
4. **Interactive Toggle**: Added toggle functionality to show and hide answers for each question.
5. **Exclusive Display Logic**: Modified the state management to allow only one question to be open at a time, enhancing the accordion behavior.

#### Styling and Layout

Custom CSS is applied to provide a clean and intuitive user interface. The accordion-style layout is responsive, ensuring a smooth user experience across various devices.

#### Learning Outcomes

- **Component-Based Architecture**: Gained insights into structuring a React application using reusable components.
- **State Management in React**: Enhanced understanding of state management with the useState hook, especially in controlling component behaviors.
- **Conditional Rendering**: Learned techniques for dynamically rendering components based on the application's state and user interactions.
- **Event Handling**: Developed skills in handling user events and updating the application's state accordingly.

### [E. Menu](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/05-menu/menu)

The Menu Project is an interactive and responsive web application developed using React. It is designed to display a restaurant menu with various categories and items, offering dynamic filtering capabilities. This project demonstrates essential React concepts, including component creation, state management, and event handling.

#### Features

- **Title Component**: A reusable Title component is implemented to display the main title of the app, enhancing reusability and modularity.
- **Data Import and State Management**: The menu items data, imported from `data.js`, is an array of objects representing individual menu items. This data is managed using React's `useState` hook in the `App.jsx` component, allowing dynamic updates and rendering.
- **Dynamic Menu Item Rendering**: The `Menu` component receives the menu items state and iterates over the list using the map method. It renders a `MenuItem` component for each item, displaying its image, title, price, and description.
- **Unique Categories Generation**: Unique categories are extracted from the menu items data and stored in an array, including an "all" category to display all items. This unique category list is managed as a state variable.
- **Category Filter Functionality**: The `Categories` component renders buttons for each category. Clicking a category button triggers a filter function, passed as a prop, which updates the state to show only the items belonging to the selected category.
- **Responsive Layout and Styling**: Custom CSS ensures the application is visually appealing and responsive across different devices, with a clean and intuitive user interface.

#### Implementation Process

1. **Component Setup**: Developed a Title component and imported menu items data into the project.
2. **State Initialization**: Set up menu items and categories as state variables in `App.jsx`.
3. **Menu Rendering**: Passed menu items to the `Menu` component for rendering each item via the `MenuItem` component.
4. **Category Management**: Extracted unique categories, including an "all" category, for filter functionality.
5. **Filter Implementation**: Integrated filter functionality in the `Categories` component to display menu items based on the selected category.
6. **Event Handling**: Set up event handlers for category buttons to update the displayed menu items.

#### Learning Outcomes

- **React Basics**: Gained a strong understanding of fundamental React concepts such as components, state, and props.
- **Dynamic Content Rendering**: Learned how to render and update content dynamically based on user interactions and state changes.
- **Data Filtering**: Enhanced skills in implementing filtering logic to display content conditionally.
- **Component Design**: Developed an appreciation for component-based architecture, creating reusable and modular components.

### [F. Tabs](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/06-tabs/tabs)

The Tabs Project is a React-based web application designed to display job information in a tabbed interface. It demonstrates fetching data from an external API, managing application state, and dynamically rendering components based on user interaction. This project is a great example of handling asynchronous data, component-based architecture, and state management in React.

#### Features

- **Data Fetching and Loading State**: Utilizes `fetch` API within the `useEffect` hook to retrieve job information from an external API. A loading state is implemented to display a spinner or message while data is being fetched.
- **State Management**: The fetched data is stored in a state variable using the `useState` hook, allowing dynamic updates and rendering.
- **JobInfo Component**: This component displays the details of a job, such as the company name, dates, title, and duties. It uses object destructuring to extract information from the job object.
- **Duties Component**: Iterates over the duties array of a job and renders each item. Integrated with the `react-icons` library for optional icons.
- **UUID for Unique Keys**: Implements the `uuid` library to generate unique identifiers for each job, which are used as keys in the `JobInfo` and `Duties` components.
- **BtnContainer Component**: Contains buttons for each job. Clicking a button updates the currently displayed job information.
- **Dynamic Rendering of Job Information**: A `currentItem` state variable tracks the index of the currently displayed job. The `JobInfo` component renders information based on this index.
- **Interactive Job Selection**: Each button in the `BtnContainer` is linked to a job. Clicking these buttons triggers a function that sets the `currentItem`, thereby updating the displayed job information.

#### Implementation Process

1. **Fetching Data**: Implemented an API call to fetch job information and manage the loading state.
2. **Stateful Data Storage**: Stored the fetched data in a state variable for dynamic rendering.
3. **Job Details Display**: Developed the `JobInfo` component to display job details.
4. **Unique Key Generation**: Used the `uuid` library to generate unique keys for list items.
5. **Interactive Navigation**: Created a `BtnContainer` component for job selection.
6. **State Management for Display**: Managed which job details to display using a `currentItem` state variable.
7. **Dynamic Content Rendering**: Ensured the content changes reflect the selected job from the navigation menu.

#### Learning Outcomes

- **Asynchronous Data Fetching**: Gained experience in fetching data from an external API within React components.
- **State and Effect Hooks**: Developed a deeper understanding of React's useState and useEffect hooks for state management and side effects.
- **Dynamic Component Rendering**: Learned to render components dynamically based on user interactions and application state.
- **React Component Architecture**: Enhanced skills in structuring an application using reusable React components.

### [G. Slider](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/07-slider/slider)

The Slider Project is a dynamic and interactive web application built using React. It showcases a carousel-style slider that displays information from an array of data. The project demonstrates advanced React concepts, including conditional rendering, state management, and handling user interactions. 

#### Features

- **Data Import and State Management**: The application imports data from `data.js` and sets it up as a state value using the `useState` hook. Different arrays like `shortList`, `list`, and `longList` can be used as the default value.
- **Carousel Component**: The `Carousel.jsx` component displays the slider, iterating over the `people` state to create each slide.
- **Navigation Buttons**: Prev and Next buttons are implemented to navigate through the slides. These buttons trigger functions to change the current slide, utilizing the `setCurrentPerson` function.
- **Dynamic Styling**: CSS is used to style the slider container, slides, and buttons. The layout is achieved using `position: relative` for the container and `position: absolute` for slides and buttons.
- **Main Logic**: The slider's movement is controlled using the CSS `transform` property with `translateX` values. This logic is used to move slides left or right and to keep the active slide in focus.
- **Auto Slide Functionality**: Auto sliding is implemented using `setInterval` in the `useEffect` hook, which automatically changes the current slide at regular intervals.
- **React Slick Library (Optional)**: For a more advanced implementation, the `react-slick` library can be used to create a more feature-rich slider.

#### Implementation Process

1. **State Initialization**: Set up initial state values for `people` and `currentPerson` in the `Carousel` component.
2. **Data Rendering**: Render slides by iterating over the `people` array and applying dynamic styling.
3. **Navigation Logic**: Implemented functions `prevSlide` and `nextSlide` to update `currentPerson` state, allowing navigation through slides.
4. **Styling**: Applied CSS to style the slider container, slides, and navigation buttons.
5. **Auto Slide Feature**: Added auto slide functionality with a cleanup to clear the interval when the component unmounts.
6. **React Slick Integration (Optional)**: Optionally, integrate the React Slick library for additional slider features.

#### Learning Outcomes

- **React State and Effects**: Gained proficiency in managing state and side effects in React applications.
- **Dynamic Content Rendering**: Learned to render content dynamically based on the application's state and user interactions.
- **CSS Positioning and Transformations**: Developed skills in using CSS for complex layouts and animations.
- **Handling User Interactions**: Enhanced understanding of handling user events like button clicks in React.
- **Auto Sliding Logic**: Implemented auto sliding functionality using JavaScript intervals and React's effect hook.

### [H. Lorem Ipsum](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/08-lorem-ipsum/lorem-ipsum)

The Lorem Ipsum Project is a React-based web application that generates placeholder text. It allows users to specify the number of paragraphs of lorem ipsum text they need. The project is an excellent demonstration of React concepts like state management, forms handling, and dynamic content rendering.

#### Features

- **Dynamic Data Import**: Imports the text array from `data.js` and manages it using React's `useState` hook.
- **User Input for Paragraph Count**: Users can input the desired number of paragraphs. The count is managed by a state variable.
- **Form Handling**: Implements a form with a number input and a submit button. The form handles changes and submission events to update the state accordingly.
- **Conditional Content Rendering**: Dynamically renders the specified number of paragraphs from the imported text array.
- **Unique ID Generation**: Utilizes the `nanoid` library to assign unique keys to each paragraph element during rendering.

#### Implementation Process

1. **State Initialization**: In `App.jsx`, state variables for `count` (number of paragraphs) and `text` (array of paragraphs) are initialized using `useState`.
2. **Form Setup**: A form is created with a number input field linked to the `count` state and a submit button. The input field is configured with minimum and maximum values and an event handler for changes.
3. **Data Import and State Management**: The text array is imported from `data.js`. A new array based on the user's paragraph count choice is generated and set to the `text` state upon form submission.
4. **Form Submission Handling**: The `handleSubmit` function attached to the form's `onSubmit` event prevents default behavior and updates the `text` state based on the `count` state.
5. **Dynamic Content Rendering**: The text state is rendered below the form. The `map` method iterates over the array, rendering each paragraph with a unique key generated by `nanoid`.
6. **CSS Styling**: The application is styled using CSS, focusing on the layout of the form and the display of the text.

#### Learning Outcomes

- **React State and Event Handling**: Demonstrates managing state and handling form events in React.
- **Dynamic Rendering**: Showcases rendering content dynamically based on user input and state changes.
- **Utilizing External Libraries**: Incorporates the `nanoid` library for generating unique identifiers.
- **Form Validation and Handling**: Implements basic form validation and efficient handling of user input.

### [I. Color Generator](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/09-color-generator/color-generator)

The Color Generator Project is a React application designed to generate different shades and tints of a specified color. It utilizes various React concepts such as state management, component composition, and external library integration.

#### Features

- **Dynamic Color Generation**: Generates a variety of color shades based on user input.
- **Form Component**: Manages user input for color values through a form.
- **Values.js Integration**: Uses the `values.js` library to create color shades.
- **React-Toastify**: Implements toast notifications for user feedback.
- **Clipboard Functionality**: Allows users to copy color values to the clipboard.
- **Responsive Design**: Adapts the layout for different screen sizes.

#### Implementation

1. **Component Structure**:
    - `Form`: Manages color input and submission.
    - `ColorList`: Renders the list of color shades.
    - `SingleColor`: Displays individual color shades.
2. **Color State Management**: Uses `useState` in the `Form` component to manage the color input.
3. **Form Handling**:
    - Color input field to receive user input.
    - `handleSubmit` to process form submission and generate color shades.
4. **Color Generation with Values.js**: Utilizes `values.js` to generate an array of color shades and tints.
5. **Toast Notifications**: Implements `react-toastify` for error handling and user feedback.
6. **Clipboard API**: Allows copying color values to the clipboard directly from the `SingleColor` component.
7. **CSS Styling**: Defines the layout and appearance of the application, ensuring responsiveness and visual appeal.

#### Code Explanation

- **Form Component**: Contains a color input and a text input synced with the color state. On submission, it invokes `addColor` to update the color list.
- **ColorList Component**: Iterates over the color array, rendering each color as a `SingleColor` component.
- **SingleColor Component**: Displays the color's hex value and weight. Clicking on a color copies its value to the clipboard and shows a success toast.
- **App Component**: Manages the main color array state. It updates this state based on user input from the `Form` component and handles errors using toasts.
- **CSS Styling**: Uses CSS Grid to create a responsive layout for the color list. Styles are also applied for the form and individual color items.

#### Learning Outcomes

- **React State Management**: Demonstrates the use of React hooks for state and effect management.
- **Third-Party Libraries**: Shows how to integrate and use external libraries (`values.js`, `react-toastify`) in a React application.
- **Event Handling and User Feedback**: Covers form handling, event listeners, and providing user feedback through toast notifications.
- **Clipboard Interaction**: Implements the Clipboard API for enhancing user experience.
- **Responsive Web Design**: Utilizes CSS Grid for a responsive layout.

### [J. Grocery Bud](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/10-grocery-bud/grocery-bud)

The Grocery Bud Project is a React application designed for managing a grocery list. It showcases fundamental React concepts including state management, component composition, form handling, local storage integration, and the use of external libraries.

#### Features

- **State Management**: Manages grocery items and their states.
- **Form Component**: Handles item input and submission.
- **Item Addition and Removal**: Enables adding new items and removing existing ones.
- **Local Storage**: Preserves items between browser sessions.
- **Toast Notifications**: Provides user feedback for actions.
- **Editable Items**: Allows marking items as completed or pending.

#### Implementation

1. **State Variable**: `useState` hook manages the list of grocery items.
2. **Form Component**:
    - Contains an input field for item names.
    - `handleSubmit` function validates input and adds items to the list.
3. **Items Component**:
    - Iterates over grocery items.
    - Renders each item using `SingleItem` component.
4. **SingleItem Component**:
    - Manages individual item state (`isChecked`).
    - Renders item name with conditional styling.
    - Provides functionality for removing and editing items.
5. **Local Storage Integration**:
    - Saves and retrieves the grocery list.
    - Updates upon item addition or removal.
6. **React-Toastify**: Implements toast notifications for user interactions.
7. **CSS Styling**: Provides layout and design for the application.

#### Code Explanation

- **App Component**: The main component that orchestrates the application logic. Manages the grocery list state and integrates local storage and toast notifications.
- **Form Component**: Manages item input, includes form submission logic, and invokes `addItem` on submission.
- **Items Component**: Renders a list of grocery items using the `SingleItem` component.
- **SingleItem Component**: Displays individual grocery items. Handles item editing and removal functionalities.
- **Local Storage Functions**: `getLocalStorage` and `setLocalStorage` manage data persistence in the browser's local storage.
- **CSS Styling**: Ensures a responsive and visually appealing layout.

#### Learning Outcomes

- **React State Management**: Demonstrates the use of React hooks for managing application state.
- **Form Handling and Event Processing**: Covers handling user inputs and form submissions.
- **Component-Based Architecture**: Showcases building a UI using reusable components.
- **Local Storage**: Teaches data persistence in web applications.
- **External Libraries**: Illustrates the integration of `nanoid` for unique identifiers and `react-toastify` for user notifications.
- **CSS for Styling and Layout**: Uses CSS for styling components and creating a responsive layout.

### [K. Navbar](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/11-navbar/navbar)

The Navbar Project is focused on creating a responsive navigation bar in React. It demonstrates key React concepts such as component creation, state management, and the use of external libraries. The project involves building a dynamic navbar that adapts to different screen sizes and user interactions.

#### Features

- **Responsive Design**: Adapts to different screen sizes, ensuring usability across devices.
- **Dynamic Menu Expansion**: Uses state management to toggle the display of menu items.
- **Integration of React Icons**: Incorporates icons from `react-icons` library.
- **Use of Refs and DOM Measurements**: Employs `useRef` and `getBoundingClientRect()` for dynamic height calculation.
- **Styling with CSS**: Provides visually appealing and functional design.

#### Implementation

1. **Navbar Component**: Core component that renders the navigation bar.
    - **State Management**: Uses `useState` to manage the visibility of menu links.
    - **React Icons Integration**: Incorporates icons like `FaBars` for the menu toggle.
    - **Refs for Dynamic Height**: Utilizes `useRef` to reference DOM elements for dynamic height calculation.
2. **Data Handling**:
    - **Data File**: `data.jsx` contains arrays for links and social icons.
    - **Rendering Data**: Maps through the arrays to render navigation and social links.
3. **CSS Styling**:
    - **Initial Setup**: Basic styling for the navigation bar including color, shadow, and layout.
    - **Responsive Design**: Media queries for adapting the layout on larger screens.
    - **Dynamic Height**: CSS transitions for smooth expansion and collapse of the menu.
4. **Main and Index Files**:
    - **`main.jsx`**: React entry point, rendering the `App` component.
    - **`index.html`**: Basic HTML template.
5. **Package Management**:
    - **`package.json`**: Lists project dependencies and scripts.

#### Code Breakdown

- **`App.jsx`**: Main application component, renders the `Navbar`.
- **`Navbar.jsx`**:
  - Manages the state for link visibility.
  - Handles the toggle functionality.
  - Renders navigation and social links dynamically.
- **`data.jsx`**: Stores navigation and social links data.
- **CSS Files**:
  - Global styles for the application.
  - Specific styles for the navbar component.

#### Learning Outcomes

- **Component-Based Architecture**: Building UIs with reusable components.
- **State and Event Handling**: Managing state and handling user interactions.
- **Refs and DOM Access**: Using React refs for direct DOM manipulation.
- **Responsive Design**: Creating interfaces that adapt to different screen sizes.
- **External Libraries**: Utilizing third-party libraries like `react-icons`.

### [L. Sidebar](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/12-sidebar/sidebar)

The Sidebar Project in React demonstrates the creation of a dynamic sidebar and modal components, with a focus on React's context API for state management and global context sharing.

#### Key Features

- **Responsive Sidebar**: A sidebar that can be toggled open or closed, adapting to various screen sizes.
- **Modal Component**: A modal overlay that can be opened and closed, showcasing dynamic content rendering.
- **Global State Management**: Utilizing React's context API to manage the application's state globally.
- **Custom React Hook**: A custom hook (`useGlobalContext`) to easily access and modify the global state throughout the components.
- **Interactive UI Elements**: Buttons in the `Home` component to open the sidebar and modal, enhancing user interaction.

#### Implementation Details

##### Components
1. **`Home` Component**: Houses buttons to toggle the sidebar and modal.
2. **`Modal` Component**: Renders a modal overlay with close functionality.
3. **`Sidebar` Component**: Displays a sidebar with navigation links and social icons.

##### Context and State Management
- **`AppProvider`**: Wraps the application to provide global state using React's context.
- **State Variables**: `isSidebarOpen` and `isModalOpen` to track visibility states.
- **Control Functions**: Functions like `openSidebar`, `closeSidebar`, `openModal`, and `closeModal` to toggle states.

##### Styling
- **CSS**: Extensive styling for sidebar, modal, buttons, and animations.
- **Responsive Design**: Media queries to ensure proper display on larger screens.

##### Additional Files
- **`data.jsx`**: Contains arrays for navigation and social links, demonstrating data handling.
- **`context.jsx`**: Defines the global context and custom hook.

#### Learning Outcomes

- **React Context API**: Demonstrates how to use context for global state management.
- **Component Design**: Creating reusable and modular components.
- **State Management**: Handling component states and interactions.
- **CSS Animations**: Implementing keyframe animations for interactive UI elements.
- **Responsive Layouts**: Designing UIs that adapt to various screen sizes.
- **Third-Party Libraries**: Integration of `react-icons` for enhanced UI design.

### [M. Strapi Submenus](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/13-strapi-submenus/strapi-submenus)

The Strapi Submenus project is a React-based application showcasing the use of global context, conditional rendering, and responsive design to create a dynamic and user-friendly interface with a focus on navigation elements like a sidebar, hero, navbar, and submenu.

#### Key Features

- **Responsive Sidebar and Navbar**: A sidebar that can be toggled open or closed and a navbar that adapts to various screen sizes.
- **Dynamic Submenus**: Submenus that change content based on user interaction, demonstrating advanced state management and conditional rendering.
- **Global Context API Usage**: Leveraging React's Context API for global state management to control the visibility of sidebars and submenus.
- **Interactive UI Elements**: Buttons and links in the Navbar and Sidebar that interactively change the UI.

#### Implementation Details

##### Components
1. **`Navbar`**: Displays a logo and a button to toggle the sidebar. Interacts with the global context for state management.
2. **`Hero`**: A hero component for presenting a large text section, adding visual appeal.
3. **`Sidebar`**: A component that lists navigation links dynamically generated from `data.jsx`.
4. **`Submenu`**: Dynamically displays submenu content based on user interactions, such as hovering over navigation links.

##### Global Context and State Management
- **`AppContext`**: Provides global state including `isSidebarOpen` and `pageId`.
- **Control Functions**: Functions like `openSidebar`, `closeSidebar`, and `setPageId` to manage global state.

##### Styling and Responsiveness
- Extensive CSS for styling individual components with a focus on responsiveness, especially for the Navbar and Sidebar.
- Use of CSS media queries for adapting the UI to different screen sizes.
- Dynamic CSS classes in React components to alter styles based on state.

##### Data Handling and Dynamic Rendering
- **`data.jsx`**: Contains the data structure used for rendering navigation links and submenus.
- Dynamic rendering of links in the Sidebar and Navbar based on data from `data.jsx`.
- Conditional rendering in the `Submenu` component based on the current `pageId` from the global context.

##### Interaction and UI Dynamics
- Mouse event handling to change the global state (`pageId`) and control the display of submenus.
- Sidebar toggle functionality using React state and context.
- `useGlobalContext` custom hook for easy access to global state within components.

#### Learning Outcomes

- **React Context and Hooks**: Demonstrates the use of context for global state management and custom hooks.
- **Dynamic Rendering**: Showcases rendering UI elements based on changing state and data structures.
- **CSS and Responsive Design**: Emphasizes the importance of responsive design and dynamic styling in modern web development.
- **Interaction Handling**: Handling user interactions like mouse events to trigger UI changes.

### [N. Cart](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/14-cart/cart)

The Cart Project is a complex React application that demonstrates the use of modern React features such as Context, useReducer, and Hooks to manage a shopping cart's state and interactions. It utilizes a more complicated data structure (`Map`) for efficient state management and implements various functionalities like item addition, removal, quantity adjustment, and total calculation.

#### Key Features

1. **Use of `Map` for Cart State**: The application uses a JavaScript `Map` for the cart state, enhancing efficiency in data retrieval and manipulation.
2. **Dynamic Cart Management**: Features to add, remove, and adjust the quantity of items in the cart.
3. **Global State Management**: Using React Context and useReducer for global state management across components.
4. **Fetching Data**: Data for the cart items is fetched from an external API.
5. **Total Calculation**: The application includes a function to calculate the total cost and quantity of items in the cart.
6. **Responsive UI**: The UI updates responsively based on user interactions and cart state changes.

#### Component Structure

- **`Navbar`**: Displays the total quantity of items in the cart.
- **`CartContainer`**: Main component displaying the cart items and the total cost.
- **`CartItem`**: Represents each item in the cart with options to increase, decrease, or remove the item.

#### State Management

- **Context and useReducer**: A combination of Context API and useReducer Hook for managing global state, making it easier to handle complex state logic.
- **Actions and Reducer**: Defined actions (`CLEAR_CART`, `REMOVE`, `INCREASE`, `DECREASE`, `LOADING`, `DISPLAY_ITEMS`) and a reducer to handle these actions.

#### Data Handling

- **Using `Map`**: The cart state is stored as a `Map`, allowing efficient access and modification of cart items.
- **Fetching from API**: Cart items are fetched from a provided API endpoint and populated into the cart state.
- **Utility Functions**: Functions like `getTotals` to calculate the total cost and quantity of items in the cart.

#### Styling

- Extensive CSS for a clean and user-friendly interface.
- Responsive design for different screen sizes.

#### Learning Outcomes

- **Efficient State Management**: Using `Map` for state management in a React application.
- **Global State with Context and Reducer**: Implementing useReducer in combination with Context API for global state management.
- **Handling Async Operations**: Fetching data from an API and updating the state accordingly.
- **Dynamic UI Interactions**: Updating the UI based on user interactions and state changes.

## [5. Axios](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/05-axios-tutorial/axios)

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

## [6. React Query](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/06-react-query)

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

## [7. Fetch Stock Images](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/07-unsplash-images/stock-images)

The Fetch Stock Images is a React-based web application that leverages the Unsplash API to display a collection of high-quality stock photos. The project demonstrates key React concepts including context API for state management, React Query for data fetching, and implementing a dark theme toggle feature.

### Objectives
- Integrate with the Unsplash API to fetch and display images based on user input.
- Implement a dark/light theme toggle using React context and CSS.
- Utilize React Query for efficient data fetching and caching.
- Enhance user experience with responsive design and dynamic content.

### Setup and Installation
- **Dependencies**: Run `npm install` to install necessary packages.
- **Start Development Server**: Use `npm run dev` to start the development server.

### Key Features

#### 1. Initial Setup and Structure
- **Components**: Created `ThemeToggle`, `SearchForm`, and `Gallery` components.
- **Global Context**: Set up a global context to manage application state.

#### 2. Dark Theme Implementation
- **State Management**: Implemented `isDarkTheme` state and `toggleDarkTheme` function.
- **Dynamic Theming**: Added logic to dynamically add/remove `.dark-theme` class to the body element based on theme state.
- **CSS for Dark Theme**: Defined CSS variables and styles for dark and light themes.

#### 3. User Preference for Dark Mode
- Used media query `(prefers-color-scheme: dark)` to set the initial theme based on user system preferences.

#### 4. Search Functionality
- **Search Form**: Developed a form to capture user search input and initiate image search.
- **Integration with Unsplash API**: Utilized Unsplash API to fetch images based on user search queries.

#### 5. React Query Integration
- Integrated React Query in the `Gallery` component for fetching images from Unsplash API.
- Set up React Query dev tools for debugging and inspection.

#### 6. Search Implementation
- **Search Value State**: Managed the search input state in the global context.
- **Dynamic Fetching**: Modified `useQuery` to re-fetch images based on user's search input.

#### 7. Dark Mode Preference Detection
- Implemented JavaScript logic to check user's preference for dark mode and set the application theme accordingly.

#### 8. Local Storage Integration
- Used local storage to persist the `isDarkTheme` state across browser sessions.

#### 9. Environment Variable Setup
- Configured environment variables using VITE for storing sensitive information like API keys.

#### 10. Netlify Deployment
- Deployed the application on Netlify and set up environment variables for production.

#### 11. Styling
- Added comprehensive CSS for styling the application and ensuring responsiveness.

#### 12. Additional Code Implementations
- Provided JavaScript code for toggling the dark theme and managing form submissions.

### Technologies Used
- React.js
- React Query
- Axios for API requests
- React Icons for UI icons
- CSS3 for styling
- VITE as a build tool
- Netlify for deployment

### Learning Outcomes
- **API Integration**: Learned to integrate and fetch data from third-party APIs (Unsplash API).
- **State Management**: Gained experience in managing application state using React context.
- **React Query**: Explored advanced data fetching and caching mechanisms with React Query.
- **Dark Mode Implementation**: Understood the nuances of implementing a user-preferred theme system.

### Future Enhancements
- Implement advanced features like pagination or infinite scrolling for image results.
- Improve the responsive design for better mobile device compatibility.
- Integrate user authentication to allow personalized features.

## [8. Contentful CMS](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/08-contentful-cms/contentful)

The Contentful CMS Project is a React-based web application that integrates with Contentful, a headless Content Management System (CMS). This project demonstrates how to fetch and display content dynamically from Contentful, allowing for easy content updates and management.

### Objectives
- To integrate Contentful CMS for content management in a React application.
- To display dynamic content, specifically a hero section and a list of projects, managed via Contentful.
- To learn how to use the Contentful SDK and create custom hooks for fetching data.

### Setup and Installation
- **Install Dependencies**: Run `npm install` to install the necessary packages.
- **Run Development Server**: Execute `npm run dev` to start the local development server.

### Key Features

#### 1. Initial Setup and Project Structure
- **Setup**: Initialized with `npm install` and run with `npm run dev`.
- **Components**: Created and rendered `Hero` and `Projects` components in the main application (`App.jsx`).

#### 2. Hero Component
- **Design**: Developed the Hero component with a heading, a descriptive paragraph, and an SVG image.
- **Styling**: Utilized CSS for layout and design enhancements.

#### 3. Integration with Contentful
- **Contentful SDK**: Implemented Contentful's SDK to fetch data from the CMS.
- **Headless CMS**: Leveraged the headless CMS approach for flexible content management.

#### 4. Fetching and Displaying Projects
- **Custom Hook (`useFetchProjects`)**: Developed a custom hook to fetch project data from Contentful.
- **Dynamic Rendering**: Displayed projects dynamically in the `Projects` component using fetched data.
- **Content Structure**: Managed and structured content types and entries within Contentful for projects.

#### 5. Styling and Layout
- **CSS**: Extensive use of CSS for styling the layout, ensuring a visually appealing and responsive design.
- **Media Queries**: Implemented media queries for responsiveness and a better user experience across different devices.

#### 6. Environment Configuration
- **.env File**: Utilized environment variables for Contentful space ID and access token, ensuring secure API calls.

### Technologies Used
- React.js for frontend development.
- Contentful CMS for managing and delivering content.
- CSS3 for styling.
- VITE for environment variable management.

### Learning Outcomes
- **CMS Integration**: Gained experience in integrating and managing a CMS within a React application.
- **Data Fetching**: Learned to fetch and parse data from a headless CMS using custom hooks.
- **Dynamic Content Rendering**: Explored rendering content dynamically based on CMS data, enhancing content management flexibility.

### Future Enhancements
- Introduce more content types and components to showcase the versatility of Contentful.
- Implement additional features like search and filter for the projects list.
- Improve accessibility and SEO optimization.

## [9. MixMaster](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/09-mixmaster/mixmaster)

The MixMaster Project is a single-page application (SPA) developed with React. This web application utilizes React Router for seamless navigation and styled-components for CSS in JS. The project's main focus is to demonstrate advanced routing techniques, styled components, and integrating external APIs for fetching data.

### Objectives
- To create an SPA using React and React Router.
- To demonstrate the use of styled-components for styling.
- To fetch and display cocktail data from TheCocktailDB API.
- To provide a seamless user experience with dynamic routing and navigation.

### Setup and Installation
- **Install Dependencies**: Run `npm install` to install the necessary packages.
- **Run Development Server**: Execute `npm run dev` to start the local development server.

### Key Features

#### 1. React Router Integration
- **Single-Page Application (SPA)**: Built as an SPA for dynamic content updates without full page reloads.
- **Routing**: Implemented React Router to handle different routes like Home, About, Newsletter, and specific Cocktail details.

#### 2. Page Components
- **Page Structure**: Created various page components like About, Cocktail, Error, HomeLayout, Landing, and Newsletter.
- **Export and Import Structure**: Utilized an index.js file in the pages directory for clean export and import of components.

#### 3. Styled Components
- **Styling**: Adopted styled-components for CSS in JS, ensuring scoped and conflict-free CSS.
- **Reusable Styles**: Created a wrappers folder in assets for reusable styled components.

#### 4. Navigation and Linking
- **Navbar**: Developed a Navbar component using styled-components and React Router's `NavLink`.
- **Linking**: Enabled linking between different pages using React Router's `Link` component.

#### 5. External API Integration
- **TheCocktailDB API**: Integrated TheCocktailDB API to fetch cocktail data based on user searches.
- **Dynamic Data Fetching**: Used React Router's loader functions for fetching data before rendering components.

#### 6. Form Handling and Toast Notifications
- **Newsletter Signup**: Implemented a newsletter sign-up form with submission handling.
- **Toast Notifications**: Integrated react-toastify for displaying success or error messages.

#### 7. Error Handling and Page Loading
- **Error Pages**: Setup custom error pages for handling 404 and other errors.
- **Loading States**: Managed loading states across routes and components.

### Technologies Used
- React.js for frontend development.
- React Router for routing and navigation.
- Styled Components for CSS in JS.
- Axios for API requests.
- TheCocktailDB API for cocktail data.
- React Toastify for toast notifications.

### Learning Outcomes
- **SPA Navigation**: Gained insights into creating and managing SPAs with dynamic content loading.
- **Styled Components**: Explored the advantages of using styled-components in a React application.
- **API Integration**: Learned to integrate and use external APIs within React components.
- **React Router Loaders**: Understood the concept of loaders in React Router for pre-loading data.

### Future Enhancements
- Expand the cocktail database with more categories and filters.
- Improve mobile responsiveness and design aesthetics.
- Add user authentication and personalization features.

## [10. Tailwind Portfolio](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/10-tailwind-portfolio/portfolio)

The Tailwind Portfolio project is a React application showcasing a personal web development portfolio. The project emphasizes the use of Tailwind CSS for styling, creating a responsive and visually appealing user interface.

### Objectives
- To develop a single-page portfolio application using React and Vite.
- To integrate Tailwind CSS for responsive design and modern styling.
- To implement various UI components like Navbar, Hero section, Skills, and Projects.

### Installation and Setup
- **Create Vite Project**: `npm create vite@latest my-project -- --template react`
- **Install Dependencies**: `npm install`
- **Add Tailwind CSS**: `npm install -D tailwindcss postcss autoprefixer`
- **Start Development Server**: `npm run dev`

### Key Features

#### 1. Tailwind CSS Integration
- **Styling**: Utilizes Tailwind CSS for all components, ensuring a responsive and modern design.
- **Custom Directives**: Implements Tailwind directives in the `index.css` for base, components, and utilities layers.

#### 2. React Components
- **Navbar**: A navigation bar with links to different sections of the portfolio.
- **Hero**: A welcome section with a large heading and social media icons.
- **Skills**: Showcases various skills with icons and descriptions.
- **Projects**: Displays a list of projects with images and links to GitHub repositories.

#### 3. Responsive Design
- Ensures that the portfolio looks great on all devices, from mobile phones to desktop screens.

#### 4. Assets and Icons
- Incorporates SVG images and icons for a visually rich user experience.
- Uses `react-icons` library for social media and other icons.

#### 5. Page Components
- Implements different page components for About, Skills, and Projects sections.
- Each section has a unique layout and design, tailored to display content effectively.

### Technologies Used
- React.js for frontend development.
- Vite for fast build and development.
- Tailwind CSS for styling.
- Nanoid for generating unique keys.
- React Icons for scalable vector icons.

### Challenges and Learnings
- Mastering Tailwind CSS for responsive and efficient styling.
- Implementing a consistent design and layout using Tailwind's utility classes.
- Organizing React components and managing assets for a clean project structure.

### Future Enhancements
- Adding more interactive elements and animations.
- Integrating a blog section with Markdown support.
- Implementing a contact form with backend integration.

## [11. Redux Toolkit](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/11-redux-toolkit-tutorial)

This tutorial provides a comprehensive guide to building a shopping cart application using Redux Toolkit and React. It covers everything from setting up the project with Create React App to implementing advanced features like asynchronous actions and modal management.

### Objectives
- To understand how to set up and use Redux Toolkit in a React application.
- To learn how to create slices for different features like a shopping cart and a modal.
- To handle asynchronous actions with `createAsyncThunk`.
- To integrate Redux DevTools for easier state management debugging.

### Installation and Setup
- **Create Project**: `npx create-react-app my-app --template redux`
- **Install Dependencies**: `npm install @reduxjs/toolkit react-redux axios`
- **Start Development Server**: `npm start`

### Key Features

#### 1. Redux Toolkit Setup
- **Initial Setup**: Begin with a Create React App template specifically for Redux.
- **Store Configuration**: Set up the Redux store using `configureStore` from Redux Toolkit.

#### 2. React Components
- **Navbar**: Display the total number of items in the cart.
- **CartContainer & CartItem**: Manage and display cart items, including functionality to add, remove, and adjust item quantities.

#### 3. Managing Global State
- **Slices**: Use `createSlice` to manage different pieces of state like cart and modal.
- **Reducers and Actions**: Define reducers and actions within slices for state management.

#### 4. Asynchronous Actions
- **Async Thunks**: Use `createAsyncThunk` for fetching cart items asynchronously from an API.
- **Handling API Responses**: Manage loading states and API responses effectively.

#### 5. Modal Implementation
- **Modal Component**: Create a modal for confirming the clearing of the cart.
- **Modal Slice**: Manage the modal's open and close state using a separate slice.

### Technologies Used
- React.js for building the user interface.
- Redux Toolkit for state management.
- Axios for making API requests.
- React Redux for connecting Redux to React components.

### Learning Objectives
- Gaining a deeper understanding of Redux Toolkit's powerful features for simplifying Redux code.
- Learning to handle asynchronous actions within Redux Toolkit.
- Implementing a modular structure for Redux state with slices.

### Future Enhancements
- Adding user authentication and profile management.
- Expanding the cart functionality to include payment processing.
- Integrating more complex state management scenarios.

## [12. Comfy Store](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/12-comfy-store/comfy-store)

The Comfy Store Project is a comprehensive React-based e-commerce application. It leverages modern web technologies such as Redux Toolkit, React Router, React Query, and Tailwind CSS with daisyUI for styling. The application features user authentication, product browsing, cart management, order processing, and more.

### Key Functionalities

#### User Interface Components
- **CartItem**: Manages individual items in the shopping cart.
- **CartItemsList**: Lists all items in the cart.
- **CartTotals**: Displays the total cost, shipping, tax, and order total.
- **CheckoutForm**: Handles the checkout process, including form submission and order placement.
- **ComplexPaginationContainer**: Implements advanced pagination for product lists.
- **ErrorElement**: Displays errors encountered during routing or loading.
- **FeaturedProducts**: Showcases featured products.
- **Filters**: Allows users to filter products based on various criteria.
- **FormInput, FormSelect, FormRange, FormCheckbox**: Custom form elements for user inputs.
- **Header**: Displays the top header of the application.
- **Hero**: A hero section for the landing page.
- **Loading**: A loading spinner for asynchronous operations.
- **NavLinks**: Navigation links for the application.
- **Navbar**: The main navigation bar.
- **OrdersList**: Lists user orders.
- **PaginationContainer**: Basic pagination functionality.
- **ProductsContainer**: Manages the display of products in grid or list format.
- **ProductsGrid**: Displays products in a grid layout.
- **ProductsList**: Displays products in a list layout.
- **SectionTitle**: Renders section titles.
- **SubmitBtn**: A custom submit button for forms.

#### Redux Toolkit Slices
- **Cart Slice (`cartSlice.js`)**: Manages cart state including items, totals, and interactions like add, remove, and edit cart items.
- **User Slice (`userSlice.js`)**: Manages user state, including login, logout, and theme toggling.

#### React Pages
Includes various pages like `About`, `Cart`, `Checkout`, `Error`, `HomeLayout`, `Landing`, `Login`, `Orders`, `Products`, `Register`, `SingleProduct`.

#### Main Application File
- **App.jsx**: The main application component that sets up routing and React Query.

#### Styling and Theming
- Utilizes Tailwind CSS with daisyUI for a responsive and modern UI.
- Implements dark and light themes switchable by the user.

#### Backend Interaction
- Uses `axios` for API requests and handles user authentication, product fetching, cart manipulation, and order processing.
- React Query is used for data fetching and state synchronization with the backend.

#### State Management
- Redux Toolkit for global state management across the application.
- React Query for server state management.

#### Routing
- React Router for managing routes and navigation within the application.

#### Additional Utilities
- Custom utility functions like `formatPrice` and `generateAmountOptions` for common operations.

### Development Approach
The project follows a modular approach with a clear separation of concerns, making use of React's component-based architecture. It also demonstrates best practices in state management, asynchronous operations, and responsive design.

### Future Enhancements
Potential future enhancements could include expanding product categories, integrating payment processing, adding user profile management, and enhancing the user experience with more interactive features.

### Project Challenges

#### Challenge 1: Vite and Tailwind Setup
- The project begins with setting up a Vite project for a React application and integrating Tailwind CSS for styling.

#### Challenge 2: DaisyUI Integration
- DaisyUI, a Tailwind CSS component library, was added to provide pre-designed components. The TailwindCSS Typography plugin was also installed.

#### Challenge 3: Page Creation
- Various pages such as About, Cart, Checkout, etc., are created and exported from a central index file.

#### Challenge 4: React Router Configuration
- The project sets up React Router for page navigation, with a focus on nested routing (for elements like the navbar).

#### Challenge 5: Error Handling
- An error page was developed to handle 404 and other errors, with options for users to navigate back home.

#### Challenge 6: Input Field Component
- Custom input field components are created for forms, including text inputs for logging in.

#### Challenge 7: Login Page
- The login page was structured with form inputs, submit buttons, and a loading spinner.

#### Challenge 8: Register Page
- A similar approach was used for the register page, focusing on user registration features.

#### Challenge 9: Custom CSS Class
- A custom CSS class was added for alignment and layout control.

#### Challenge 10: Header Component
- The header component includes navigation links like Login and Register.

#### Challenge 11: Navbar Structure
- The Navbar is structured with responsive design and includes dropdown menus for smaller screens.

#### Challenge 12: Navigation Links
- A NavLinks component was created to dynamically generate navigation links.

#### Challenge 13: Theme Toggle
- A toggle component was introduced for switching between light and dark themes.

#### Challenge 14: Theme Selection
- Multiple themes from DaisyUI are added for user selection.

#### Challenge 15: Theme Change Implementation
- The application implements functionality to change themes based on user interaction.

#### Challenge 16: About Page
- The About page was set up with text and layout to introduce the store.

#### Challenge 17: Hero Component
- A Hero component was introduced on the landing page, with images and text highlighting the store's features.

#### Challenge 18: Axios Custom Instance
- Custom Axios instances are created for API calls, with a focus on exploring and utilizing a specific API.

#### Challenge 19: Landing Loader
- The landing page was set up with a loader to fetch featured products, displaying them dynamically.

#### Challenge 20: Featured Products
- Components for displaying featured products are created, including grid layouts and section titles.

#### Challenge 21: Price Formatting
- A utility function was introduced for formatting price values, catering to different formats like cents.

#### Challenge 22: Single Product Display
- The application handles the display of individual product details, including options for colors and quantities.

#### Challenge 23: Products Page Setup
- The Products page is structured with components for filtering, product display, and pagination.

#### Challenge 24: Products Container
- A Products container was created to toggle between grid and list views of products.

#### Challenge 25: Filters with Search Input
- Filters implemented with search input functionality, allowing users to search for specific products.

#### Challenge 26: Select Input Filters
- Additional filters were added using select inputs for categories, companies, and sort order.

#### Challenge 27: Price Range Filter
- A range input filter was introduced for price selection, utilizing local state for interactivity.

#### Challenge 28: Shipping Filter
- A checkbox input can be used to filter products based on shipping options.

#### Challenge 29: Global Loading State
- The application implements a global loading state, showing a spinner during data fetching.

#### Challenge 30: Query Params for Filters
- Query parameters are used for filtering products based on user selections.

#### Challenge 31: Pagination Implementation
- Pagination functionality was added to navigate through product pages.

Continuing from Challenge 31, the project progresses with the following challenges:

#### Challenge 32: Setup RTK and react-toastify
- The project integrates Redux Toolkit (RTK) for state management and react-toastify for displaying notifications. This includes setting up cartSlice, configuring the store, and integrating RTK and react-toastify in main.jsx.

#### Challenge 33: Add Product (SingleProductPage)
- Functionality was added to the SingleProduct page to dispatch the addItem action and add items to the cart, leveraging Redux for state management.

#### Challenge 34: AddItem Reducer
- The addItem reducer was developed within the cartSlice to manage cart state, including adding items, clearing the cart, and updating totals. Navbar.jsx utilizes Redux's useSelector to display cart items.

#### Challenge 35: Refactor and Setup Local Storage
- The project refactors to retrieve the initial cart state from local storage. A calculateTotals reducer was implemented to re-calculate cart totals and taxes.

#### Challenge 36: Clear Cart, Remove Item, and Edit Item
- Additional reducers are set up for clearCart, removeItem, and editItem within the cartSlice, facilitating various cart functionalities like item removal and quantity editing.

#### Challenge 37: Setup Cart Page
- The Cart page has been configured with a two-column layout, integrating CartItemsList and CartTotals components to display cart items and totals.

#### Challenge 38: Cart Totals
- A CartTotals component has been created to display detailed information like subtotal, shipping, tax, and total cost.

#### Challenge 39: Cart Items List
- The CartItemsList component has been developed to iterate over cart items and return a CartItem component, which displays item details and includes remove and edit functionalities.

#### Challenge 40: Setup User Slice
- A userSlice was set up in Redux Toolkit for managing user authentication state and UI theme.

#### Challenge 41: Move Theme Logic
- Theme logic was moved to userSlice, centralizing theme management within the Redux state.

#### Challenge 42: Setup Logout and Access User
- Functionality for user logout was implemented, and user state is accessed in various components like Header, NavLinks, and Cart Page for personalized user experience.

#### Challenge 43: Register User
- The Register component was set up with an action to handle user registration, including form submission and API interaction for account creation.

#### Challenge 44: Login Setup
- The Login component is configured with an action to manage the user login process, integrating Redux for state updates.

#### Challenge 45: Login User
- The loginUser action in userSlice and the Login component are set up to handle the user login process, updating the Redux store with user data.

#### Challenge 46: Demo User
- Functionality was added to allow users to log in as a demo user, simplifying the user testing and demonstration process.

#### Challenge 47: Checkout Page Setup
- The Checkout page is structured with a CheckoutForm component, handling the user's order placement process.

#### Challenge 48: Restrict Access
- Access to the Checkout page is restricted based on user authentication, with unauthenticated users redirected to the login page.

#### Challenge 49: CheckoutForm
- The CheckoutForm component developed to handle order creation, integrating API interactions and updating the Redux store accordingly.

#### Challenge 50: Auth Error
- Authentication errors in the CheckoutForm are managed by checking response status and redirecting to the login page as necessary.

#### Challenge 51: Orders Request Overview
- The setup for testing the orders request is conducted using Thunder Client, ensuring proper API integration.

#### Challenge 52: Orders Page Setup
- The Orders page was set up with an OrdersList component and a loader function that fetches user orders and restricts access based on user authentication.

#### Challenge 53: Render Orders
- The Orders page was configured to conditionally render user orders, integrating OrdersList and PaginationContainer components for a comprehensive view.

#### Challenge 54: Complex Pagination
- A ComplexPaginationContainer component is developed to manage sophisticated pagination needs on the Orders page.

#### Challenge 55: Setup React Query
- React Query was integrated into the application for efficient server state management, with the query client passed down to various pages like Landing, SingleProduct, and Products.

#### Challenge 56: Landing
- React Query was set up on the Landing page to fetch featured products, enhancing the data fetching process.

#### Challenge 57: Single Product
- The SingleProduct page is configured with React Query to manage the fetching of individual product details.

#### Challenge 58: All Products
- React Query is utilized on the Products page to handle the fetching of all products, considering various query parameters for filtering.

#### Challenge 59: Orders
- The Orders page integrates React Query to fetch and display user orders, streamlining the data management process.

#### Challenge 60: Remove Queries
- Redundant queries in CheckoutForm and Header are removed to optimize the application's performance.

### Challenges
Throughout these challenges, the Comfy Store project focuses on building a comprehensive e-commerce application. It covers various aspects such as setting up the project environment, creating functional components, implementing routing and state management, handling user inputs and filters, and introducing responsive design and thematic elements. The project provides a practical approach to developing a modern React application with an emphasis on functionality, usability, and aesthetics.

## Sources & Credits
Guided Exercises by [John Smilga](https://github.com/john-smilga)