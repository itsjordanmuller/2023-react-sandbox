## [11. Redux Toolkit](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/11-redux-toolkit-tutorial)

<img src="https://custom-icon-badges.demolab.com/badge/Redux%20Toolkit-ffb2cb.svg?logo=bookmark&logoColor=000000&style=for-the-badge" width="100%" alt="Redux Toolkit" />

This tutorial provides a comprehensive guide to building a shopping cart application using Redux Toolkit and React. It covers everything from setting up the project with Create React App to implementing advanced features like asynchronous actions and modal management.

### Objectives
- To understand how to set up and use Redux Toolkit in a React application.
- To learn how to create slices for different features like a shopping cart and a modal.
- To handle asynchronous actions with `createAsyncThunk`.
- To integrate Redux DevTools for easier state management debugging.

### Installation and Setup
- **Create Project**: `npx create-react-app my-app --template redux`
- **Install Dependencies**: `npm install @reduxjs/toolkit react-redux axios`
- **Start Development Server**: `npm start`

### Key Features

#### 1. Redux Toolkit Setup
- **Initial Setup**: Begin with a Create React App template specifically for Redux.
- **Store Configuration**: Set up the Redux store using `configureStore` from Redux Toolkit.

#### 2. React Components
- **Navbar**: Display the total number of items in the cart.
- **CartContainer & CartItem**: Manage and display cart items, including functionality to add, remove, and adjust item quantities.

#### 3. Managing Global State
- **Slices**: Use `createSlice` to manage different pieces of state like cart and modal.
- **Reducers and Actions**: Define reducers and actions within slices for state management.

#### 4. Asynchronous Actions
- **Async Thunks**: Use `createAsyncThunk` for fetching cart items asynchronously from an API.
- **Handling API Responses**: Manage loading states and API responses effectively.

#### 5. Modal Implementation
- **Modal Component**: Create a modal for confirming the clearing of the cart.
- **Modal Slice**: Manage the modal's open and close state using a separate slice.

### Technologies Used
- React.js for building the user interface.
- Redux Toolkit for state management.
- Axios for making API requests.
- React Redux for connecting Redux to React components.

### Learning Objectives
- Gaining a deeper understanding of Redux Toolkit's powerful features for simplifying Redux code.
- Learning to handle asynchronous actions within Redux Toolkit.
- Implementing a modular structure for Redux state with slices.

### Future Enhancements
- Adding user authentication and profile management.
- Expanding the cart functionality to include payment processing.
- Integrating more complex state management scenarios.