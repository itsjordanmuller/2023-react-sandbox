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