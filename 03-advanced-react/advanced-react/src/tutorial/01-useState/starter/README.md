#### [A. useState](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/03-advanced-react/advanced-react/src/tutorial/01-useState/starter)

<img src="https://custom-icon-badges.demolab.com/badge/useState%20Hook-ffd7b2.svg?logo=bookmark&logoColor=000000&style=for-the-badge" width="100%" alt="useState Hook" />

Explored the basics of useState for handling variables, arrays, objects, and grasped the nuances and common pitfalls.

##### `01-error-example.jsx`
In `ErrorExample`, I explored a common mistake when trying to update a state variable in React without using `useState`. The `count` variable is initialized as `0`, and I implemented an `increaseCount` function to increment it. However, despite the count being incremented in the function, it doesn't trigger a re-render in the component, leaving the UI unchanged. This example serves as a fundamental illustration of why `useState` is essential for updating state in React components.

##### `02-useState-basics.jsx`
In `UseStateBasics`, I applied the `useState` hook to manage the state of a `count` variable. Here, `useState` is imported from React, allowing the component to track and update the `count` state dynamically. The `increaseCount` function now correctly updates the state, and each click on the "Increase" button results in the UI being updated. This exercise demonstrates the basic but crucial concept of state management in React.

##### `03-useState-array.jsx`
`UseStateArray` extends the use of `useState` to manage an array of data. I used `useState` to set an initial state from an external data source. The component allows for individual items to be removed from the state array using the `removeItem` function, which filters out the item by its `id`. There's also a button to clear all items, showcasing how `useState` can handle more complex state logic like filtering or emptying an array.

##### `04-useState-object.jsx`
In `UseStateObject`, I managed the state of an object containing multiple properties. The `useState` hook initializes the state with a person object. The `displayPerson` function demonstrates updating the state object correctly using the spread operator to maintain other object properties. This example provides insights into managing object-type state and the importance of correctly handling state immutability.

##### `05-useState-gotcha.jsx`
`UseStateGotcha` addresses a common pitfall with `useState` when used inside `setTimeout`. It highlights the asynchronous nature of state updates in React. The `handleClick` function utilizes a closure to capture the current state inside `setTimeout`, ensuring the state updates as expected even after a delay. This is a crucial lesson in understanding how React's state updates work in asynchronous scenarios.

Overall, these exercises deepened my understanding of `useState`, emphasizing its importance in React for state management and re-rendering components. I explored various use cases, from simple counters to managing arrays and objects, and tackled common issues like asynchronous state updates.

##### [Birthday Buddy](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/01-birthday-buddy/birthday-buddy)

![Birthday Buddy - Site Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/01-birthday-buddy/01-birthday-buddy-site.png)

##### Birthday Buddy Components

###### App Component

![App - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/01-birthday-buddy/01-birthday-buddy-component-1.png)

###### List Component

![List - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/01-birthday-buddy/01-birthday-buddy-component-2.png)

###### Person Component

![Person - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/01-birthday-buddy/01-birthday-buddy-component-3.png)