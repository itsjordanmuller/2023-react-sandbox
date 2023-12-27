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