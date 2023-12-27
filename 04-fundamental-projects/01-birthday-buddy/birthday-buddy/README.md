### [A. Birthday Buddy](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/01-birthday-buddy/birthday-buddy)

<img src="https://custom-icon-badges.demolab.com/badge/Birthday%20Buddy%20Project-b2ffd3.svg?logo=star-fill&logoColor=000000&style=for-the-badge" width="100%" alt="Birthday Buddy Project" />

![Birthday Buddy - Site Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/01-birthday-buddy/01-birthday-buddy-site.png)

The Birthday Buddy Project is a simple, interactive web application designed to display and manage a list of birthdays. Developed using React, this project showcases fundamental React concepts and functionalities, including the use of state, components, and event handling.

#### Features

- **Data Import and Rendering**: The application imports data from `data.js`, containing an array of objects where each object represents a person with properties like name, age, and image URL.
- **State Management**: Utilizing React's `useState` hook, the application sets up a state variable to hold and manage the imported data. This allows for dynamic updates and rendering of the birthday list.
- **Dynamic List Rendering**: It leverages the `map` method to iterate over the array of people, rendering each person's details. This includes their image (with controlled width via inline styles), name, and age.

- **Component Structure**: The app is structured into components - `App`, `List`, and `Person`:
  - `App.jsx` serves as the main container, managing the state and overall layout.
  - `List.jsx` is responsible for rendering the array of people using the `Person` component.
  - `Person.jsx` focuses on presenting the details of each individual.

- **Interactive Features**: The app features a button in the main container that allows users to clear all items from the birthday list, demonstrating state manipulation and event handling.
- **Styling and Layout**: Custom CSS is used for styling, ensuring a responsive and visually appealing interface.

#### Birthday Buddy Components

#### App Component

![App - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/01-birthday-buddy/01-birthday-buddy-component-1.png)

#### List Component

![List - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/01-birthday-buddy/01-birthday-buddy-component-2.png)

#### Person Component

![Person - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/01-birthday-buddy/01-birthday-buddy-component-3.png)

#### Learning Outcomes

- **React Basics**: Gained practical experience in using React hooks for state management and understanding the component lifecycle.
- **Component Architecture**: Learned how to structure an application using reusable components and passing data via props.
- **Event Handling and State Updates**: Developed skills in handling user interactions and dynamically updating the application state.
- **Styling in React**: Enhanced understanding of applying CSS in React applications for a structured and attractive user interface.