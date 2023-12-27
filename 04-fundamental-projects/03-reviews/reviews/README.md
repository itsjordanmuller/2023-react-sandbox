### [C. Reviews](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/03-reviews/reviews)

<img src="https://custom-icon-badges.demolab.com/badge/Reviews%20Project-b2ffec.svg?logo=star-fill&logoColor=000000&style=for-the-badge" width="100%" alt="Reviews Project" />

![Reviews - Site Image 1](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/03-reviews/03-reviews-site-1.png)

![Reviews - Site Image 2](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/03-reviews/03-reviews-site-2.png)

The Reviews Project is an interactive web application built using React, showcasing the implementation of a reviews display system. It focuses on rendering user reviews dynamically and providing navigation controls for users to interact with the reviews.

#### Features

- **Data Importation**: The project begins by importing review data from `data.js`, which consists of an array of objects. Each object contains details of a person's review, including their name, job, image URL, and review text.
- **State Management**: A state variable is set up using React's `useState` hook to control the display of the current review. This state holds the index of the currently displayed review.
- **Conditional Rendering**: The application renders the details of the person corresponding to the current index. This includes their image, name, job, and review text.
- **Navigation Controls**:
  - **Previous and Next Buttons**: Users can navigate through the reviews using 'prev' and 'next' buttons. These buttons update the current index and render the respective previous or next review.
  - **Random Review Button**: There is also a feature to display a random review. When clicked, it selects a random index from the reviews array and displays the corresponding review.
- **React Icons Integration**: The project integrates the `react-icons` library to enhance the UI with icons like quotes and arrows for a visually appealing experience.

#### Review Components

##### Reviews Component

![Reviews - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/03-reviews/03-reviews-component-1.png)

#### Implementation Process

1. **Initial Setup**: The project starts with importing required files and setting up the basic React application structure.
2. **Data Import and State Setup**: Reviews data is imported from a file, and a state variable is set up to track the currently displayed review.
3. **Review Display**: Implemented the functionality to render the first person's review upon application load.
4. **Interactive Navigation**: Added the ability to cycle through reviews using next and previous buttons.
5. **Random Review Feature**: Integrated a button to display a random review from the array.

#### Styling and Layout

The application is styled using custom CSS to provide a user-friendly and engaging interface. The layout is designed to be intuitive, with clear navigation controls and a pleasant aesthetic.

#### Learning Outcomes

- **State Management in React**: Gained practical experience in using the useState hook for controlling component states.
- **Dynamic Rendering**: Developed skills in rendering components based on the application's state and user interactions.
- **Handling Events**: Enhanced understanding of handling user events like clicks to update the application's state.
- **Integrating External Libraries**: Learned how to integrate and utilize external libraries like `react-icons` in a React project.