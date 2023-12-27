## [3. Advanced React](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/03-advanced-react/advanced-react)

<img src="https://custom-icon-badges.demolab.com/badge/Advanced%20React-ffcbb2.svg?logo=bookmark&logoColor=000000&style=for-the-badge" width="100%" alt="Advanced React" />

This section of the project is a deep dive into the more advanced aspects of React. It encompasses a wide range of topics from React hooks, conditional rendering, context API, custom hooks, to performance optimization and much more.

### Project Structure and Topics

This section of the project is methodically structured into directories, each centered around a pivotal React concept:

#### [A. useState](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/03-advanced-react/advanced-react/src/tutorial/01-useState/starter)

<img src="https://custom-icon-badges.demolab.com/badge/useState%20Hook-ffd7b2.svg?logo=bookmark&logoColor=000000&style=for-the-badge" width="100%" alt="useState Hook" />

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

##### [Birthday Buddy](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/01-birthday-buddy/birthday-buddy)

![Birthday Buddy - Site Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/01-birthday-buddy/01-birthday-buddy-site.png)

##### Birthday Buddy Components

###### App Component

![App - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/01-birthday-buddy/01-birthday-buddy-component-1.png)

###### List Component

![List - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/01-birthday-buddy/01-birthday-buddy-component-2.png)

###### Person Component

![Person - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/01-birthday-buddy/01-birthday-buddy-component-3.png)

#### [B. useEffect](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/03-advanced-react/advanced-react/src/tutorial/02-useEffect/starter)

<img src="https://custom-icon-badges.demolab.com/badge/useEffect%20Hook-ffe4b2.svg?logo=bookmark&logoColor=000000&style=for-the-badge" width="100%" alt="useEffect Hook" />

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

##### [Tours](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/02-tours/tours)

![Tours - Site Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/02-tours/02-tours-site.png)

##### Tours Components

###### Tours Component

![Tours - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/02-tours/02-tours-component-1.png)

###### Tour Component

![Tour - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/02-tours/02-tours-component-2.png)

###### Loading Component

![Loading - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/02-tours/02-tours-component-3.png)

#### [C. Conditional Rendering](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/03-advanced-react/advanced-react/src/tutorial/03-conditional-rendering/starter)

<img src="https://custom-icon-badges.demolab.com/badge/Conditional%20Rendering-fff0b2.svg?logo=bookmark&logoColor=000000&style=for-the-badge" width="100%" alt="Conditional Rendering" />

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

<img src="https://custom-icon-badges.demolab.com/badge/Project%20Structure-fffcb2.svg?logo=bookmark&logoColor=000000&style=for-the-badge" width="100%" alt="Project Structure" />

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

<img src="https://custom-icon-badges.demolab.com/badge/Leverage%20JavaScript-f4ffb2.svg?logo=bookmark&logoColor=000000&style=for-the-badge" width="100%" alt="Leverage JavaScript" />

Embraced JavaScript features like mapping over arrays and object destructuring within React components.

##### `List.jsx` - Mapping Through an Array
In `List.jsx`, I utilized the JavaScript `map` function to iterate over an array of people and render a `Person` component for each item. This exercise demonstrated the seamless integration of JavaScript array methods within JSX to dynamically render a list of components. The use of the `map` method here is a fundamental technique in React for rendering lists of data.

##### `Person.jsx` - Conditional Rendering and Optional Chaining
`Person.jsx` presented a more nuanced challenge. The goal was to display information about a person, including their image. I used optional chaining (`?.`) to safely access nested properties of an object without causing an error if a certain link in the chain is `null` or `undefined`. This is particularly useful in situations where data may be incomplete or inconsistently structured. 

Overall, these exercises emphasized the importance of JavaScript proficiency in React development. They illustrated how fundamental JavaScript concepts and newer features can be effectively applied in React to create dynamic, flexible, and resilient user interfaces.

#### [F. React Forms](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/03-advanced-react/advanced-react/src/tutorial/06-forms/starter)

<img src="https://custom-icon-badges.demolab.com/badge/React%20Forms-e8ffb2.svg?logo=bookmark&logoColor=000000&style=for-the-badge" width="100%" alt="React Forms" />

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

- [8. Lorem Ipsum Generator](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/08-lorem-ipsum/lorem-ipsum)

- [9. Color Generator](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/09-color-generator/color-generator)

- [10.  Grocery Bud](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/10-grocery-bud/grocery-bud)

#### [G. useRef](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/03-advanced-react/advanced-react/src/tutorial/07-useRef/starter)

<img src="https://custom-icon-badges.demolab.com/badge/useRef%20Hook-dbffb2.svg?logo=bookmark&logoColor=000000&style=for-the-badge" width="100%" alt="useRef Hook" />

Explored useRef for accessing DOM elements and retaining values across renders without causing re-renders.

##### `01-useRef-basics.jsx`
In `UseRefBasics`, I delved into the `useRef` hook, a powerful feature in React for accessing DOM elements directly and persisting values across renders. This exercise involved two key aspects of `useRef`:

1. **Accessing DOM Elements:** I used `useRef` to create a reference (`refContainer`) to a text input. This allowed me to focus on the input automatically when the component renders, demonstrating how `useRef` can interact with the DOM.

2. **Tracking Component Renders:** I utilized `useRef` to create a persistent variable (`isMounted`) that doesn't trigger re-renders when its value changes. This variable was used to track if the component had been rendered more than once, illustrating `useRef`'s ability to persist data across renders without causing additional renders.

The `handleSubmit` function showcases a practical use of `useRef` by accessing the value of the input field directly, a common pattern in form handling. This exercise was instrumental in understanding the versatility of `useRef`, from manipulating the DOM to preserving data across component updates, making it a unique tool in the React hook arsenal.

- [11. Navbar](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/11-navbar/navbar)

#### [H. Custom Hooks](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/03-advanced-react/advanced-react/src/tutorial/08-custom-hooks/starter)

<img src="https://custom-icon-badges.demolab.com/badge/Custom%20Hooks-cfffb2.svg?logo=bookmark&logoColor=000000&style=for-the-badge" width="100%" alt="Custom Hooks" />

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

<img src="https://custom-icon-badges.demolab.com/badge/Context%20API-c3ffb2.svg?logo=bookmark&logoColor=000000&style=for-the-badge" width="100%" alt="Context API" />

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

- [12. Sidebar](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/12-sidebar/sidebar)

- [13. Strapi Submenus](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/13-strapi-submenus/strapi-submenus)

- [14. Cart](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/14-cart/cart)

#### [J. useReducer](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/03-advanced-react/advanced-react/src/tutorial/10-useReducer/starter)

<img src="https://custom-icon-badges.demolab.com/badge/useReducer%20Hook-b6ffb2.svg?logo=bookmark&logoColor=000000&style=for-the-badge" width="100%" alt="useReducer Hook" />

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

- [14. Cart](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/14-cart/cart)

#### [K. Performance](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/03-advanced-react/advanced-react/src/tutorial/11-performance/starter)

<img src="https://custom-icon-badges.demolab.com/badge/Performance-b2ffba.svg?logo=bookmark&logoColor=000000&style=for-the-badge" width="100%" alt="Performance" />

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