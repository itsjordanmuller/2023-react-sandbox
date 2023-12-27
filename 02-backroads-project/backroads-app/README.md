## [2. BackRoads Project](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/02-backroads-project/backroads-app)

<img src="https://custom-icon-badges.demolab.com/badge/BackRoads%20Project-ffbeb2.svg?logo=star-fill&logoColor=000000&style=for-the-badge" width="100%" alt="BackRoads Project" />

![BackRoads - Site Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/02-backroads-project/02-backroads-site.png)

This section of my React learning journey focuses on developing the "BackRoads App," a travel tour showcase application. The process involved setting up the project using Create-React-App, building individual components, and linking them with a centralized data source for dynamic content rendering.

### Development Steps

#### Initial Setup

- **Project Creation**: Used Create-React-App for initial setup.
- **Boilerplate Modification**: Removed unnecessary extras from the src folder.
- **Importing Starter HTML**: Brought in HTML, CSS, and images from the project's starter files and adapted them for React.

#### Component Development and Styling

- **Component Refactoring**: Segmented the app into reusable components, such as `Navbar`, `Hero`, `About`, `Services`, `Tours`, and `Footer`.
- **Dynamic Content Rendering**: Utilized data from `data.js` for dynamic rendering in components like `Navbar`, `Services`, `Tours`, and `Footer`.
- **Styling Adjustments**: Modified CSS to fit the React component structure and adjusted class names to the JSX-friendly `className`.

#### Data Centralization and Management

- **Centralized Data Source**: Created `data.js` to manage content for tours, services, page links, and social links.
- **Dynamic Image Sources**: Modified image sources in components like `Hero` and `About` to dynamically load from the `images` folder.
- **Reusable Sub-components**: Developed sub-components like `PageLinks`, `SocialLinks`, `Service`, and `Tour` for modular content rendering.

#### Advanced Configuration

- **Package.json Modification**: Adjusted `package.json` to include CI environment variables and build scripts for different environments.
- **Component Enhancement**: Implemented features like dynamic page links and social icons, refactoring for better code reuse and maintainability.

### Components

#### About Component

![About - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/02-backroads-project/02-backroads-component-1.png)

#### Services Component

![Services - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/02-backroads-project/02-backroads-component-2.png)

#### Tours Component

![Tours - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/02-backroads-project/02-backroads-component-3.png)

#### Footer Component

![Footer - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/02-backroads-project/02-backroads-component-4.png)

#### Hero Component

![Hero - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/02-backroads-project/02-backroads-component-5.png)

#### Navbar Component

![Navbar - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/02-backroads-project/02-backroads-component-6.png)

#### Title Component

![Title - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/02-backroads-project/02-backroads-component-7.png)

#### Social Links Component

![Social Links - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/02-backroads-project/02-backroads-component-8.png)

#### Page Links Component

![Page Links - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/02-backroads-project/02-backroads-component-9.png)

### Project Structure

- `App.js`: The main app component integrating all sub-components.
- `data.js`: Central data source for the app's dynamic content.
- `components/`: Folder containing individual components and sub-components.
- `images/`: Contains images used throughout the app.
- `index.js`: Entry point for the React app, rendering `App`.
- `package.json`: Configuration file for dependencies, scripts, and project metadata.