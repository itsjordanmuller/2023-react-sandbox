### [L. Sidebar](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/12-sidebar/sidebar)

<img src="https://custom-icon-badges.demolab.com/badge/Sidebar%20Project-c3b2ff.svg?logo=star-fill&logoColor=000000&style=for-the-badge" width="100%" alt="Sidebar Project" />

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