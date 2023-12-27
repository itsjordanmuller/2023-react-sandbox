## [8. Contentful CMS](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/08-contentful-cms/contentful)

<img src="https://custom-icon-badges.demolab.com/badge/Contentful%20CMS%20Project-ffb2f0.svg?logo=star-fill&logoColor=000000&style=for-the-badge" width="100%" alt="Contentful CMS Project" />

The Contentful CMS Project is a React-based web application that integrates with Contentful, a headless Content Management System (CMS). This project demonstrates how to fetch and display content dynamically from Contentful, allowing for easy content updates and management.

### Objectives
- To integrate Contentful CMS for content management in a React application.
- To display dynamic content, specifically a hero section and a list of projects, managed via Contentful.
- To learn how to use the Contentful SDK and create custom hooks for fetching data.

### Setup and Installation
- **Install Dependencies**: Run `npm install` to install the necessary packages.
- **Run Development Server**: Execute `npm run dev` to start the local development server.

### Key Features

#### 1. Initial Setup and Project Structure
- **Setup**: Initialized with `npm install` and run with `npm run dev`.
- **Components**: Created and rendered `Hero` and `Projects` components in the main application (`App.jsx`).

#### 2. Hero Component
- **Design**: Developed the Hero component with a heading, a descriptive paragraph, and an SVG image.
- **Styling**: Utilized CSS for layout and design enhancements.

#### 3. Integration with Contentful
- **Contentful SDK**: Implemented Contentful's SDK to fetch data from the CMS.
- **Headless CMS**: Leveraged the headless CMS approach for flexible content management.

#### 4. Fetching and Displaying Projects
- **Custom Hook (`useFetchProjects`)**: Developed a custom hook to fetch project data from Contentful.
- **Dynamic Rendering**: Displayed projects dynamically in the `Projects` component using fetched data.
- **Content Structure**: Managed and structured content types and entries within Contentful for projects.

#### 5. Styling and Layout
- **CSS**: Extensive use of CSS for styling the layout, ensuring a visually appealing and responsive design.
- **Media Queries**: Implemented media queries for responsiveness and a better user experience across different devices.

#### 6. Environment Configuration
- **.env File**: Utilized environment variables for Contentful space ID and access token, ensuring secure API calls.

### Technologies Used
- React.js for frontend development.
- Contentful CMS for managing and delivering content.
- CSS3 for styling.
- VITE for environment variable management.

### Learning Outcomes
- **CMS Integration**: Gained experience in integrating and managing a CMS within a React application.
- **Data Fetching**: Learned to fetch and parse data from a headless CMS using custom hooks.
- **Dynamic Content Rendering**: Explored rendering content dynamically based on CMS data, enhancing content management flexibility.

### Future Enhancements
- Introduce more content types and components to showcase the versatility of Contentful.
- Implement additional features like search and filter for the projects list.
- Improve accessibility and SEO optimization.