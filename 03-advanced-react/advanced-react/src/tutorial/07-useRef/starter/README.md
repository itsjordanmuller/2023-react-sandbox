#### [G. useRef](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/03-advanced-react/advanced-react/src/tutorial/07-useRef/starter)

<img src="https://custom-icon-badges.demolab.com/badge/useRef%20Hook-dbffb2.svg?logo=bookmark&logoColor=000000&style=for-the-badge" width="100%" alt="useRef Hook" />

Explored useRef for accessing DOM elements and retaining values across renders without causing re-renders.

##### `01-useRef-basics.jsx`
In `UseRefBasics`, I delved into the `useRef` hook, a powerful feature in React for accessing DOM elements directly and persisting values across renders. This exercise involved two key aspects of `useRef`:

1. **Accessing DOM Elements:** I used `useRef` to create a reference (`refContainer`) to a text input. This allowed me to focus on the input automatically when the component renders, demonstrating how `useRef` can interact with the DOM.

2. **Tracking Component Renders:** I utilized `useRef` to create a persistent variable (`isMounted`) that doesn't trigger re-renders when its value changes. This variable was used to track if the component had been rendered more than once, illustrating `useRef`'s ability to persist data across renders without causing additional renders.

The `handleSubmit` function showcases a practical use of `useRef` by accessing the value of the input field directly, a common pattern in form handling. This exercise was instrumental in understanding the versatility of `useRef`, from manipulating the DOM to preserving data across component updates, making it a unique tool in the React hook arsenal.

- [11. Navbar](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/11-navbar/navbar)