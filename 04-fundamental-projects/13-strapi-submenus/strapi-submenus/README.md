### [M. Strapi Submenus](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/13-strapi-submenus/strapi-submenus)

<img src="https://custom-icon-badges.demolab.com/badge/Strapi%20Submenus%20Project-cfb2ff.svg?logo=star-fill&logoColor=000000&style=for-the-badge" width="100%" alt="Strapi Submenus Project" />

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