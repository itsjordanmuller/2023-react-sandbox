### [G. Slider](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/07-slider/slider)

<img src="https://custom-icon-badges.demolab.com/badge/Slider%20Project-b2dfff.svg?logo=star-fill&logoColor=000000&style=for-the-badge" width="100%" alt="Slider Project" />

The Slider Project is a dynamic and interactive web application built using React. It showcases a carousel-style slider that displays information from an array of data. The project demonstrates advanced React concepts, including conditional rendering, state management, and handling user interactions. 

#### Features

- **Data Import and State Management**: The application imports data from `data.js` and sets it up as a state value using the `useState` hook. Different arrays like `shortList`, `list`, and `longList` can be used as the default value.
- **Carousel Component**: The `Carousel.jsx` component displays the slider, iterating over the `people` state to create each slide.
- **Navigation Buttons**: Prev and Next buttons are implemented to navigate through the slides. These buttons trigger functions to change the current slide, utilizing the `setCurrentPerson` function.
- **Dynamic Styling**: CSS is used to style the slider container, slides, and buttons. The layout is achieved using `position: relative` for the container and `position: absolute` for slides and buttons.
- **Main Logic**: The slider's movement is controlled using the CSS `transform` property with `translateX` values. This logic is used to move slides left or right and to keep the active slide in focus.
- **Auto Slide Functionality**: Auto sliding is implemented using `setInterval` in the `useEffect` hook, which automatically changes the current slide at regular intervals.
- **React Slick Library (Optional)**: For a more advanced implementation, the `react-slick` library can be used to create a more feature-rich slider.

#### Implementation Process

1. **State Initialization**: Set up initial state values for `people` and `currentPerson` in the `Carousel` component.
2. **Data Rendering**: Render slides by iterating over the `people` array and applying dynamic styling.
3. **Navigation Logic**: Implemented functions `prevSlide` and `nextSlide` to update `currentPerson` state, allowing navigation through slides.
4. **Styling**: Applied CSS to style the slider container, slides, and navigation buttons.
5. **Auto Slide Feature**: Added auto slide functionality with a cleanup to clear the interval when the component unmounts.
6. **React Slick Integration (Optional)**: Optionally, integrate the React Slick library for additional slider features.

#### Learning Outcomes

- **React State and Effects**: Gained proficiency in managing state and side effects in React applications.
- **Dynamic Content Rendering**: Learned to render content dynamically based on the application's state and user interactions.
- **CSS Positioning and Transformations**: Developed skills in using CSS for complex layouts and animations.
- **Handling User Interactions**: Enhanced understanding of handling user events like button clicks in React.
- **Auto Sliding Logic**: Implemented auto sliding functionality using JavaScript intervals and React's effect hook.