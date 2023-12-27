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