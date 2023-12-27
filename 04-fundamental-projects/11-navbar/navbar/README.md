### [K. Navbar](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/11-navbar/navbar)

<img src="https://custom-icon-badges.demolab.com/badge/Navbar%20Project-b6b2ff.svg?logo=star-fill&logoColor=000000&style=for-the-badge" width="100%" alt="Navbar Project" />

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