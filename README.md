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