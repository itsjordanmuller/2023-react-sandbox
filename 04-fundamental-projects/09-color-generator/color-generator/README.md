### [I. Color Generator](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/09-color-generator/color-generator)

<img src="https://custom-icon-badges.demolab.com/badge/Color%20Generator%20Project-b2c7ff.svg?logo=star-fill&logoColor=000000&style=for-the-badge" width="100%" alt="Color Generator Project" />

The Color Generator Project is a React application designed to generate different shades and tints of a specified color. It utilizes various React concepts such as state management, component composition, and external library integration.

#### Features

- **Dynamic Color Generation**: Generates a variety of color shades based on user input.
- **Form Component**: Manages user input for color values through a form.
- **Values.js Integration**: Uses the `values.js` library to create color shades.
- **React-Toastify**: Implements toast notifications for user feedback.
- **Clipboard Functionality**: Allows users to copy color values to the clipboard.
- **Responsive Design**: Adapts the layout for different screen sizes.

#### Implementation

1. **Component Structure**:
    - `Form`: Manages color input and submission.
    - `ColorList`: Renders the list of color shades.
    - `SingleColor`: Displays individual color shades.
2. **Color State Management**: Uses `useState` in the `Form` component to manage the color input.
3. **Form Handling**:
    - Color input field to receive user input.
    - `handleSubmit` to process form submission and generate color shades.
4. **Color Generation with Values.js**: Utilizes `values.js` to generate an array of color shades and tints.
5. **Toast Notifications**: Implements `react-toastify` for error handling and user feedback.
6. **Clipboard API**: Allows copying color values to the clipboard directly from the `SingleColor` component.
7. **CSS Styling**: Defines the layout and appearance of the application, ensuring responsiveness and visual appeal.

#### Code Explanation

- **Form Component**: Contains a color input and a text input synced with the color state. On submission, it invokes `addColor` to update the color list.
- **ColorList Component**: Iterates over the color array, rendering each color as a `SingleColor` component.
- **SingleColor Component**: Displays the color's hex value and weight. Clicking on a color copies its value to the clipboard and shows a success toast.
- **App Component**: Manages the main color array state. It updates this state based on user input from the `Form` component and handles errors using toasts.
- **CSS Styling**: Uses CSS Grid to create a responsive layout for the color list. Styles are also applied for the form and individual color items.

#### Learning Outcomes

- **React State Management**: Demonstrates the use of React hooks for state and effect management.
- **Third-Party Libraries**: Shows how to integrate and use external libraries (`values.js`, `react-toastify`) in a React application.
- **Event Handling and User Feedback**: Covers form handling, event listeners, and providing user feedback through toast notifications.
- **Clipboard Interaction**: Implements the Clipboard API for enhancing user experience.
- **Responsive Web Design**: Utilizes CSS Grid for a responsive layout.