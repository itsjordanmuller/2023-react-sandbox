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