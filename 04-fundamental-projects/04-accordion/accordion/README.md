### [D. Accordion](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/04-accordion/accordion)

<img src="https://custom-icon-badges.demolab.com/badge/Accordion%20Project-b2fff8.svg?logo=star-fill&logoColor=000000&style=for-the-badge" width="100%" alt="Accordion Project" />

The Accordion Project is a dynamic web application built using React, designed to display a list of frequently asked questions (FAQs) in an accordion-style format. This project emphasizes the use of state management, conditional rendering, and component-based architecture in React.

![Accordion - Site Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/04-accordion/04-accordion-site.png)

#### Features

- **Data Handling**: The project begins by importing a set of questions from `data.js`, which consists of an array of objects. Each object represents a FAQ with a title and corresponding information.
- **State Management**: React's `useState` hook is used to manage the state of the accordion. It tracks which question is currently open, allowing for dynamic rendering of the accordion's content.
- **Dynamic Question Rendering**: The application iterates over the questions array, rendering a `SingleQuestion` component for each FAQ. This component includes the question title and a toggle button to show or hide the answer.
- **Toggle Functionality**: Each `SingleQuestion` component has a toggle button that controls the display of the answer. Clicking the button toggles the state of a `showInfo` flag, determining whether the answer text is shown.
- **Exclusive Open Question**: The application is enhanced with functionality to ensure that only one question can be open at a time. This is achieved by modifying the state to track the currently selected question index.

#### Accordion Components

##### Questions Component

![Accordion - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/04-accordion/04-accordion-component-1.png)

##### Question Component - Open

![Question (Open) - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/04-accordion/04-accordion-component-2.png)

##### Question Component - Closed

![Question (Closed) - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/04-accordion/04-accordion-component-3.png)

#### Implementation Process

1. **Initial Setup**: The project starts with setting up the basic React application structure and importing necessary files and dependencies.
2. **Data Import and State Setup**: FAQs data is imported, and a state variable is set up to manage the currently open question.
3. **Question Components**: Implemented components for displaying individual questions (`Question`) and the entire list of questions (`Questions`).
4. **Interactive Toggle**: Added toggle functionality to show and hide answers for each question.
5. **Exclusive Display Logic**: Modified the state management to allow only one question to be open at a time, enhancing the accordion behavior.

#### Styling and Layout

Custom CSS is applied to provide a clean and intuitive user interface. The accordion-style layout is responsive, ensuring a smooth user experience across various devices.

#### Learning Outcomes

- **Component-Based Architecture**: Gained insights into structuring a React application using reusable components.
- **State Management in React**: Enhanced understanding of state management with the useState hook, especially in controlling component behaviors.
- **Conditional Rendering**: Learned techniques for dynamically rendering components based on the application's state and user interactions.
- **Event Handling**: Developed skills in handling user events and updating the application's state accordingly.