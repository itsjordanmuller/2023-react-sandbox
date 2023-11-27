## [9. MixMaster](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/09-mixmaster/mixmaster)

<img src="https://custom-icon-badges.demolab.com/badge/MixMaster%20Project-ffb2e4.svg?logo=star-fill&logoColor=000000&style=for-the-badge" width="100%" alt="MixMaster Project" />

The MixMaster Project is a single-page application (SPA) developed with React. This web application utilizes React Router for seamless navigation and styled-components for CSS in JS. The project's main focus is to demonstrate advanced routing techniques, styled components, and integrating external APIs for fetching data.

### Objectives
- To create an SPA using React and React Router.
- To demonstrate the use of styled-components for styling.
- To fetch and display cocktail data from TheCocktailDB API.
- To provide a seamless user experience with dynamic routing and navigation.

### Setup and Installation
- **Install Dependencies**: Run `npm install` to install the necessary packages.
- **Run Development Server**: Execute `npm run dev` to start the local development server.

### Key Features

#### 1. React Router Integration
- **Single-Page Application (SPA)**: Built as an SPA for dynamic content updates without full page reloads.
- **Routing**: Implemented React Router to handle different routes like Home, About, Newsletter, and specific Cocktail details.

#### 2. Page Components
- **Page Structure**: Created various page components like About, Cocktail, Error, HomeLayout, Landing, and Newsletter.
- **Export and Import Structure**: Utilized an index.js file in the pages directory for clean export and import of components.

#### 3. Styled Components
- **Styling**: Adopted styled-components for CSS in JS, ensuring scoped and conflict-free CSS.
- **Reusable Styles**: Created a wrappers folder in assets for reusable styled components.

#### 4. Navigation and Linking
- **Navbar**: Developed a Navbar component using styled-components and React Router's `NavLink`.
- **Linking**: Enabled linking between different pages using React Router's `Link` component.

#### 5. External API Integration
- **TheCocktailDB API**: Integrated TheCocktailDB API to fetch cocktail data based on user searches.
- **Dynamic Data Fetching**: Used React Router's loader functions for fetching data before rendering components.

#### 6. Form Handling and Toast Notifications
- **Newsletter Signup**: Implemented a newsletter sign-up form with submission handling.
- **Toast Notifications**: Integrated react-toastify for displaying success or error messages.

#### 7. Error Handling and Page Loading
- **Error Pages**: Setup custom error pages for handling 404 and other errors.
- **Loading States**: Managed loading states across routes and components.

### Technologies Used
- React.js for frontend development.
- React Router for routing and navigation.
- Styled Components for CSS in JS.
- Axios for API requests.
- TheCocktailDB API for cocktail data.
- React Toastify for toast notifications.

### Learning Outcomes
- **SPA Navigation**: Gained insights into creating and managing SPAs with dynamic content loading.
- **Styled Components**: Explored the advantages of using styled-components in a React application.
- **API Integration**: Learned to integrate and use external APIs within React components.
- **React Router Loaders**: Understood the concept of loaders in React Router for pre-loading data.

### Future Enhancements
- Expand the cocktail database with more categories and filters.
- Improve mobile responsiveness and design aesthetics.
- Add user authentication and personalization features.