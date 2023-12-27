#### [F. React Forms](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/03-advanced-react/advanced-react/src/tutorial/06-forms/starter)

<img src="https://custom-icon-badges.demolab.com/badge/React%20Forms-e8ffb2.svg?logo=bookmark&logoColor=000000&style=for-the-badge" width="100%" alt="React Forms" />

Handled form inputs and managed form state using the State hook, exploring controlled components in depth.

##### `01-controlled-inputs.jsx`
In `ControlledInputs`, I explored controlled components in React forms. This concept involves managing the form data through React state, using `useState`. Each form input’s value is tied to a state variable, and every change in the input updates this state. The form submission is handled through a `handleSubmit` function that prevents the default form submission and logs the current state. This exercise was crucial in understanding how to handle user inputs in a React-controlled manner.

##### `02-user-challenge.jsx`
`UserChallenge` built on the concept of controlled inputs, with an added complexity of managing a list of users. Here, I implemented a form to add new users, updating the users' state with each submission. Additionally, I integrated a `removeUser` function to demonstrate dynamic state updates in response to user actions. This exercise provided practical experience in handling more complex form states and rendering dynamic lists based on user input.

##### `03-multiple-inputs.jsx`
In `MultipleInputs`, I managed a form with multiple inputs using a single state object. By using a single `handleChange` function and leveraging the input's `name` attribute, I efficiently handled the state of multiple form fields. This pattern reduced redundancy and streamlined the process of updating the state with multiple fields, demonstrating a more scalable approach to form handling in React.

##### `04-other-inputs.jsx`
`OtherInputs` introduced handling different types of form inputs, specifically checkboxes and dropdowns. I managed their states using `useState` and handled changes with respective functions. This exercise highlighted the versatility of React in handling various form elements, showing how to adapt state management techniques for different types of user inputs.

##### `05-form-data.jsx`
In `UncontrolledInputs`, I experimented with the FormData API to handle form submissions. Instead of managing each input's state, I used the FormData API to retrieve form values upon submission. This approach represents an alternative way of handling forms in React, especially useful when not requiring real-time tracking of input values. The exercise demonstrated a less common, yet efficient way of handling forms in React, particularly for simpler use cases.

Through these exercises, I gained a comprehensive understanding of handling forms in React. From controlled inputs, managing multiple inputs, adapting to different input types, to experimenting with the FormData API, each example deepened my knowledge of form handling, a critical aspect of user interactions in web applications.

- [8. Lorem Ipsum Generator](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/08-lorem-ipsum/lorem-ipsum)

- [9. Color Generator](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/09-color-generator/color-generator)

- [10.  Grocery Bud](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/10-grocery-bud/grocery-bud)