### [N. Cart](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/14-cart/cart)

<img src="https://custom-icon-badges.demolab.com/badge/Cart%20Project-dbb2ff.svg?logo=star-fill&logoColor=000000&style=for-the-badge" width="100%" alt="Cart Project" />

The Cart Project is a complex React application that demonstrates the use of modern React features such as Context, useReducer, and Hooks to manage a shopping cart's state and interactions. It utilizes a more complicated data structure (`Map`) for efficient state management and implements various functionalities like item addition, removal, quantity adjustment, and total calculation.

#### Key Features

1. **Use of `Map` for Cart State**: The application uses a JavaScript `Map` for the cart state, enhancing efficiency in data retrieval and manipulation.
2. **Dynamic Cart Management**: Features to add, remove, and adjust the quantity of items in the cart.
3. **Global State Management**: Using React Context and useReducer for global state management across components.
4. **Fetching Data**: Data for the cart items is fetched from an external API.
5. **Total Calculation**: The application includes a function to calculate the total cost and quantity of items in the cart.
6. **Responsive UI**: The UI updates responsively based on user interactions and cart state changes.

#### Component Structure

- **`Navbar`**: Displays the total quantity of items in the cart.
- **`CartContainer`**: Main component displaying the cart items and the total cost.
- **`CartItem`**: Represents each item in the cart with options to increase, decrease, or remove the item.

#### State Management

- **Context and useReducer**: A combination of Context API and useReducer Hook for managing global state, making it easier to handle complex state logic.
- **Actions and Reducer**: Defined actions (`CLEAR_CART`, `REMOVE`, `INCREASE`, `DECREASE`, `LOADING`, `DISPLAY_ITEMS`) and a reducer to handle these actions.

#### Data Handling

- **Using `Map`**: The cart state is stored as a `Map`, allowing efficient access and modification of cart items.
- **Fetching from API**: Cart items are fetched from a provided API endpoint and populated into the cart state.
- **Utility Functions**: Functions like `getTotals` to calculate the total cost and quantity of items in the cart.

#### Styling

- Extensive CSS for a clean and user-friendly interface.
- Responsive design for different screen sizes.

#### Learning Outcomes

- **Efficient State Management**: Using `Map` for state management in a React application.
- **Global State with Context and Reducer**: Implementing useReducer in combination with Context API for global state management.
- **Handling Async Operations**: Fetching data from an API and updating the state accordingly.
- **Dynamic UI Interactions**: Updating the UI based on user interactions and state changes.