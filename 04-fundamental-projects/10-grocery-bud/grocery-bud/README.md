### [J. Grocery Bud](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/10-grocery-bud/grocery-bud)

<img src="https://custom-icon-badges.demolab.com/badge/Grocery%20Bud%20Project-b2baff.svg?logo=star-fill&logoColor=000000&style=for-the-badge" width="100%" alt="Grocery Bud Project" />

The Grocery Bud Project is a React application designed for managing a grocery list. It showcases fundamental React concepts including state management, component composition, form handling, local storage integration, and the use of external libraries.

#### Features

- **State Management**: Manages grocery items and their states.
- **Form Component**: Handles item input and submission.
- **Item Addition and Removal**: Enables adding new items and removing existing ones.
- **Local Storage**: Preserves items between browser sessions.
- **Toast Notifications**: Provides user feedback for actions.
- **Editable Items**: Allows marking items as completed or pending.

#### Implementation

1. **State Variable**: `useState` hook manages the list of grocery items.
2. **Form Component**:
    - Contains an input field for item names.
    - `handleSubmit` function validates input and adds items to the list.
3. **Items Component**:
    - Iterates over grocery items.
    - Renders each item using `SingleItem` component.
4. **SingleItem Component**:
    - Manages individual item state (`isChecked`).
    - Renders item name with conditional styling.
    - Provides functionality for removing and editing items.
5. **Local Storage Integration**:
    - Saves and retrieves the grocery list.
    - Updates upon item addition or removal.
6. **React-Toastify**: Implements toast notifications for user interactions.
7. **CSS Styling**: Provides layout and design for the application.

#### Code Explanation

- **App Component**: The main component that orchestrates the application logic. Manages the grocery list state and integrates local storage and toast notifications.
- **Form Component**: Manages item input, includes form submission logic, and invokes `addItem` on submission.
- **Items Component**: Renders a list of grocery items using the `SingleItem` component.
- **SingleItem Component**: Displays individual grocery items. Handles item editing and removal functionalities.
- **Local Storage Functions**: `getLocalStorage` and `setLocalStorage` manage data persistence in the browser's local storage.
- **CSS Styling**: Ensures a responsive and visually appealing layout.

#### Learning Outcomes

- **React State Management**: Demonstrates the use of React hooks for managing application state.
- **Form Handling and Event Processing**: Covers handling user inputs and form submissions.
- **Component-Based Architecture**: Showcases building a UI using reusable components.
- **Local Storage**: Teaches data persistence in web applications.
- **External Libraries**: Illustrates the integration of `nanoid` for unique identifiers and `react-toastify` for user notifications.
- **CSS for Styling and Layout**: Uses CSS for styling components and creating a responsive layout.