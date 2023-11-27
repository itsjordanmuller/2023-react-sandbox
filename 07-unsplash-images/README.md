## [7. Fetch Stock Images](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/07-unsplash-images/stock-images)

<img src="https://custom-icon-badges.demolab.com/badge/Unsplash%20Images%20Project-ffb2fc.svg?logo=star-fill&logoColor=000000&style=for-the-badge" width="100%" alt="Unsplash Images Project" />

The Fetch Stock Images is a React-based web application that leverages the Unsplash API to display a collection of high-quality stock photos. The project demonstrates key React concepts including context API for state management, React Query for data fetching, and implementing a dark theme toggle feature.

### Objectives
- Integrate with the Unsplash API to fetch and display images based on user input.
- Implement a dark/light theme toggle using React context and CSS.
- Utilize React Query for efficient data fetching and caching.
- Enhance user experience with responsive design and dynamic content.

### Setup and Installation
- **Dependencies**: Run `npm install` to install necessary packages.
- **Start Development Server**: Use `npm run dev` to start the development server.

### Key Features

#### 1. Initial Setup and Structure
- **Components**: Created `ThemeToggle`, `SearchForm`, and `Gallery` components.
- **Global Context**: Set up a global context to manage application state.

#### 2. Dark Theme Implementation
- **State Management**: Implemented `isDarkTheme` state and `toggleDarkTheme` function.
- **Dynamic Theming**: Added logic to dynamically add/remove `.dark-theme` class to the body element based on theme state.
- **CSS for Dark Theme**: Defined CSS variables and styles for dark and light themes.

#### 3. User Preference for Dark Mode
- Used media query `(prefers-color-scheme: dark)` to set the initial theme based on user system preferences.

#### 4. Search Functionality
- **Search Form**: Developed a form to capture user search input and initiate image search.
- **Integration with Unsplash API**: Utilized Unsplash API to fetch images based on user search queries.

#### 5. React Query Integration
- Integrated React Query in the `Gallery` component for fetching images from Unsplash API.
- Set up React Query dev tools for debugging and inspection.

#### 6. Search Implementation
- **Search Value State**: Managed the search input state in the global context.
- **Dynamic Fetching**: Modified `useQuery` to re-fetch images based on user's search input.

#### 7. Dark Mode Preference Detection
- Implemented JavaScript logic to check user's preference for dark mode and set the application theme accordingly.

#### 8. Local Storage Integration
- Used local storage to persist the `isDarkTheme` state across browser sessions.

#### 9. Environment Variable Setup
- Configured environment variables using VITE for storing sensitive information like API keys.

#### 10. Netlify Deployment
- Deployed the application on Netlify and set up environment variables for production.

#### 11. Styling
- Added comprehensive CSS for styling the application and ensuring responsiveness.

#### 12. Additional Code Implementations
- Provided JavaScript code for toggling the dark theme and managing form submissions.

### Technologies Used
- React.js
- React Query
- Axios for API requests
- React Icons for UI icons
- CSS3 for styling
- VITE as a build tool
- Netlify for deployment

### Learning Outcomes
- **API Integration**: Learned to integrate and fetch data from third-party APIs (Unsplash API).
- **State Management**: Gained experience in managing application state using React context.
- **React Query**: Explored advanced data fetching and caching mechanisms with React Query.
- **Dark Mode Implementation**: Understood the nuances of implementing a user-preferred theme system.

### Future Enhancements
- Implement advanced features like pagination or infinite scrolling for image results.
- Improve the responsive design for better mobile device compatibility.
- Integrate user authentication to allow personalized features.
