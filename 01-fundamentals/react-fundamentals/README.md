# React Sandbox

## [1. Fundamentals](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/01-fundamentals/react-fundamentals)

<img src="https://custom-icon-badges.demolab.com/badge/Fundamentals-ffb2b2.svg?logo=bookmark&logoColor=000000&style=for-the-badge" width="100%" alt="Fundamentals" />

![Best Selling Books - Site Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/01-fundamentals/01-fundamentals-site.png)

In this section of my React learning journey, I have meticulously explored the foundational concepts and techniques crucial for building React applications. Each commit in my repository is a step in this journey, reflecting my evolving understanding and application of React.

### Key Learnings

#### Initial Setup and Component Creation

- **React Application Setup**: Leveraged Create-React-App for a streamlined setup and launch of the development server.
- **Creating Components**: Developed my initial `Greeting` component, gaining proficiency in JSX and various component creation methods, including ES7 snippets.

#### Deep Dive into JSX

- **JSX Rules and Syntax**: Mastered the nuances of JSX, including the necessity of wrapper divs, using `React.Fragment`, and understanding self-closing tags.
- **Component Nesting and Prop Drilling**: Explored complex data flow through nested components and prop drilling.

#### Styling and Performance Optimization

- **CSS and Inline Styles**: Experimented with external CSS and inline styles using JavaScript objects, learning about style precedence in React.
- **Image Optimization**: Enhanced performance by shifting image imports from the public folder to the src folder.

#### Advanced Concepts

- **Event Handling and States**: Investigated event handling in JSX, including anonymous functions and the intricacies of event objects.
- **Code Refactoring**: Improved code organization by refactoring components and employing ES6 modules for cleaner, modular code.

#### Building the BookList Application

- **Dynamic Rendering**: Implemented dynamic component rendering using the `map` function and the concept of keys for efficient updates.
- **Props and State Management**: Enhanced the `Book` component's dynamism by passing data as props and utilizing spread operators for props.
- **Styling and Layout**: Focused on CSS for styling individual components and setting responsive layouts.

#### Additional Insights

- **JavaScript in JSX**: Demonstrated the integration of JavaScript in JSX, including handling expressions and variables.
- **Destructuring and Children Props**: Utilized destructuring for cleaner code and explored the use of children props for component flexibility.
- **Event Handling Enhancements**: Delved deeper into event handling, showcasing methods for more concise and direct event management in components.
- **Complex Prop Drilling**: Tackled more advanced prop drilling scenarios involving functions as props.

### Components

#### Book Component

![Best Selling Books - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/01-fundamentals/01-fundamentals-component-1.png)

### Project Structure

- `public/index.html`: Entry point with basic HTML structure and metadata.
- `src/index.js`: JavaScript entry, rendering the `BookList` component.
- `src/Book.js`: Component for displaying book details.
- `src/books.js`: Array of book objects, demonstrating data structuring.
- `src/index.css`: Central CSS file for styling.