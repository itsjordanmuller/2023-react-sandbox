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