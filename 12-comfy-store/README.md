## [12. Comfy Store](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/12-comfy-store/comfy-store)

<img src="https://custom-icon-badges.demolab.com/badge/Comfy%20Store%20Project-ffb2be.svg?logo=star-fill&logoColor=000000&style=for-the-badge" width="100%" alt="Comfy Store Project" />

The Comfy Store Project is a comprehensive React-based e-commerce application. It leverages modern web technologies such as Redux Toolkit, React Router, React Query, and Tailwind CSS with daisyUI for styling. The application features user authentication, product browsing, cart management, order processing, and more.

### Key Functionalities

#### User Interface Components
- **CartItem**: Manages individual items in the shopping cart.
- **CartItemsList**: Lists all items in the cart.
- **CartTotals**: Displays the total cost, shipping, tax, and order total.
- **CheckoutForm**: Handles the checkout process, including form submission and order placement.
- **ComplexPaginationContainer**: Implements advanced pagination for product lists.
- **ErrorElement**: Displays errors encountered during routing or loading.
- **FeaturedProducts**: Showcases featured products.
- **Filters**: Allows users to filter products based on various criteria.
- **FormInput, FormSelect, FormRange, FormCheckbox**: Custom form elements for user inputs.
- **Header**: Displays the top header of the application.
- **Hero**: A hero section for the landing page.
- **Loading**: A loading spinner for asynchronous operations.
- **NavLinks**: Navigation links for the application.
- **Navbar**: The main navigation bar.
- **OrdersList**: Lists user orders.
- **PaginationContainer**: Basic pagination functionality.
- **ProductsContainer**: Manages the display of products in grid or list format.
- **ProductsGrid**: Displays products in a grid layout.
- **ProductsList**: Displays products in a list layout.
- **SectionTitle**: Renders section titles.
- **SubmitBtn**: A custom submit button for forms.

#### Redux Toolkit Slices
- **Cart Slice (`cartSlice.js`)**: Manages cart state including items, totals, and interactions like add, remove, and edit cart items.
- **User Slice (`userSlice.js`)**: Manages user state, including login, logout, and theme toggling.

#### React Pages
Includes various pages like `About`, `Cart`, `Checkout`, `Error`, `HomeLayout`, `Landing`, `Login`, `Orders`, `Products`, `Register`, `SingleProduct`.

#### Main Application File
- **App.jsx**: The main application component that sets up routing and React Query.

#### Styling and Theming
- Utilizes Tailwind CSS with daisyUI for a responsive and modern UI.
- Implements dark and light themes switchable by the user.

#### Backend Interaction
- Uses `axios` for API requests and handles user authentication, product fetching, cart manipulation, and order processing.
- React Query is used for data fetching and state synchronization with the backend.

#### State Management
- Redux Toolkit for global state management across the application.
- React Query for server state management.

#### Routing
- React Router for managing routes and navigation within the application.

#### Additional Utilities
- Custom utility functions like `formatPrice` and `generateAmountOptions` for common operations.

### Development Approach
The project follows a modular approach with a clear separation of concerns, making use of React's component-based architecture. It also demonstrates best practices in state management, asynchronous operations, and responsive design.

### Future Enhancements
Potential future enhancements could include expanding product categories, integrating payment processing, adding user profile management, and enhancing the user experience with more interactive features.

### Project Challenges

#### Challenge 1: Vite and Tailwind Setup
- The project begins with setting up a Vite project for a React application and integrating Tailwind CSS for styling.

#### Challenge 2: DaisyUI Integration
- DaisyUI, a Tailwind CSS component library, was added to provide pre-designed components. The TailwindCSS Typography plugin was also installed.

#### Challenge 3: Page Creation
- Various pages such as About, Cart, Checkout, etc., are created and exported from a central index file.

#### Challenge 4: React Router Configuration
- The project sets up React Router for page navigation, with a focus on nested routing (for elements like the navbar).

#### Challenge 5: Error Handling
- An error page was developed to handle 404 and other errors, with options for users to navigate back home.

#### Challenge 6: Input Field Component
- Custom input field components are created for forms, including text inputs for logging in.

#### Challenge 7: Login Page
- The login page was structured with form inputs, submit buttons, and a loading spinner.

#### Challenge 8: Register Page
- A similar approach was used for the register page, focusing on user registration features.

#### Challenge 9: Custom CSS Class
- A custom CSS class was added for alignment and layout control.

#### Challenge 10: Header Component
- The header component includes navigation links like Login and Register.

#### Challenge 11: Navbar Structure
- The Navbar is structured with responsive design and includes dropdown menus for smaller screens.

#### Challenge 12: Navigation Links
- A NavLinks component was created to dynamically generate navigation links.

#### Challenge 13: Theme Toggle
- A toggle component was introduced for switching between light and dark themes.

#### Challenge 14: Theme Selection
- Multiple themes from DaisyUI are added for user selection.

#### Challenge 15: Theme Change Implementation
- The application implements functionality to change themes based on user interaction.

#### Challenge 16: About Page
- The About page was set up with text and layout to introduce the store.

#### Challenge 17: Hero Component
- A Hero component was introduced on the landing page, with images and text highlighting the store's features.

#### Challenge 18: Axios Custom Instance
- Custom Axios instances are created for API calls, with a focus on exploring and utilizing a specific API.

#### Challenge 19: Landing Loader
- The landing page was set up with a loader to fetch featured products, displaying them dynamically.

#### Challenge 20: Featured Products
- Components for displaying featured products are created, including grid layouts and section titles.

#### Challenge 21: Price Formatting
- A utility function was introduced for formatting price values, catering to different formats like cents.

#### Challenge 22: Single Product Display
- The application handles the display of individual product details, including options for colors and quantities.

#### Challenge 23: Products Page Setup
- The Products page is structured with components for filtering, product display, and pagination.

#### Challenge 24: Products Container
- A Products container was created to toggle between grid and list views of products.

#### Challenge 25: Filters with Search Input
- Filters implemented with search input functionality, allowing users to search for specific products.

#### Challenge 26: Select Input Filters
- Additional filters were added using select inputs for categories, companies, and sort order.

#### Challenge 27: Price Range Filter
- A range input filter was introduced for price selection, utilizing local state for interactivity.

#### Challenge 28: Shipping Filter
- A checkbox input can be used to filter products based on shipping options.

#### Challenge 29: Global Loading State
- The application implements a global loading state, showing a spinner during data fetching.

#### Challenge 30: Query Params for Filters
- Query parameters are used for filtering products based on user selections.

#### Challenge 31: Pagination Implementation
- Pagination functionality was added to navigate through product pages.

Continuing from Challenge 31, the project progresses with the following challenges:

#### Challenge 32: Setup RTK and react-toastify
- The project integrates Redux Toolkit (RTK) for state management and react-toastify for displaying notifications. This includes setting up cartSlice, configuring the store, and integrating RTK and react-toastify in main.jsx.

#### Challenge 33: Add Product (SingleProductPage)
- Functionality was added to the SingleProduct page to dispatch the addItem action and add items to the cart, leveraging Redux for state management.

#### Challenge 34: AddItem Reducer
- The addItem reducer was developed within the cartSlice to manage cart state, including adding items, clearing the cart, and updating totals. Navbar.jsx utilizes Redux's useSelector to display cart items.

#### Challenge 35: Refactor and Setup Local Storage
- The project refactors to retrieve the initial cart state from local storage. A calculateTotals reducer was implemented to re-calculate cart totals and taxes.

#### Challenge 36: Clear Cart, Remove Item, and Edit Item
- Additional reducers are set up for clearCart, removeItem, and editItem within the cartSlice, facilitating various cart functionalities like item removal and quantity editing.

#### Challenge 37: Setup Cart Page
- The Cart page has been configured with a two-column layout, integrating CartItemsList and CartTotals components to display cart items and totals.

#### Challenge 38: Cart Totals
- A CartTotals component has been created to display detailed information like subtotal, shipping, tax, and total cost.

#### Challenge 39: Cart Items List
- The CartItemsList component has been developed to iterate over cart items and return a CartItem component, which displays item details and includes remove and edit functionalities.

#### Challenge 40: Setup User Slice
- A userSlice was set up in Redux Toolkit for managing user authentication state and UI theme.

#### Challenge 41: Move Theme Logic
- Theme logic was moved to userSlice, centralizing theme management within the Redux state.

#### Challenge 42: Setup Logout and Access User
- Functionality for user logout was implemented, and user state is accessed in various components like Header, NavLinks, and Cart Page for personalized user experience.

#### Challenge 43: Register User
- The Register component was set up with an action to handle user registration, including form submission and API interaction for account creation.

#### Challenge 44: Login Setup
- The Login component is configured with an action to manage the user login process, integrating Redux for state updates.

#### Challenge 45: Login User
- The loginUser action in userSlice and the Login component are set up to handle the user login process, updating the Redux store with user data.

#### Challenge 46: Demo User
- Functionality was added to allow users to log in as a demo user, simplifying the user testing and demonstration process.

#### Challenge 47: Checkout Page Setup
- The Checkout page is structured with a CheckoutForm component, handling the user's order placement process.

#### Challenge 48: Restrict Access
- Access to the Checkout page is restricted based on user authentication, with unauthenticated users redirected to the login page.

#### Challenge 49: CheckoutForm
- The CheckoutForm component developed to handle order creation, integrating API interactions and updating the Redux store accordingly.

#### Challenge 50: Auth Error
- Authentication errors in the CheckoutForm are managed by checking response status and redirecting to the login page as necessary.

#### Challenge 51: Orders Request Overview
- The setup for testing the orders request is conducted using Thunder Client, ensuring proper API integration.

#### Challenge 52: Orders Page Setup
- The Orders page was set up with an OrdersList component and a loader function that fetches user orders and restricts access based on user authentication.

#### Challenge 53: Render Orders
- The Orders page was configured to conditionally render user orders, integrating OrdersList and PaginationContainer components for a comprehensive view.

#### Challenge 54: Complex Pagination
- A ComplexPaginationContainer component is developed to manage sophisticated pagination needs on the Orders page.

#### Challenge 55: Setup React Query
- React Query was integrated into the application for efficient server state management, with the query client passed down to various pages like Landing, SingleProduct, and Products.

#### Challenge 56: Landing
- React Query was set up on the Landing page to fetch featured products, enhancing the data fetching process.

#### Challenge 57: Single Product
- The SingleProduct page is configured with React Query to manage the fetching of individual product details.

#### Challenge 58: All Products
- React Query is utilized on the Products page to handle the fetching of all products, considering various query parameters for filtering.

#### Challenge 59: Orders
- The Orders page integrates React Query to fetch and display user orders, streamlining the data management process.

#### Challenge 60: Remove Queries
- Redundant queries in CheckoutForm and Header are removed to optimize the application's performance.

### Challenges
Throughout these challenges, the Comfy Store project focuses on building a comprehensive e-commerce application. It covers various aspects such as setting up the project environment, creating functional components, implementing routing and state management, handling user inputs and filters, and introducing responsive design and thematic elements. The project provides a practical approach to developing a modern React application with an emphasis on functionality, usability, and aesthetics.