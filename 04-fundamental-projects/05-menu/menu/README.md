### [E. Menu](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/05-menu/menu)

<img src="https://custom-icon-badges.demolab.com/badge/Menu%20Project-b2f8ff.svg?logo=star-fill&logoColor=000000&style=for-the-badge" width="100%" alt="Menu Project" />

The Menu Project is an interactive and responsive web application developed using React. It is designed to display a restaurant menu with various categories and items, offering dynamic filtering capabilities. This project demonstrates essential React concepts, including component creation, state management, and event handling.

![Menu - Site Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/05-menu/05-menu-site.png)

#### Features

- **Title Component**: A reusable Title component is implemented to display the main title of the app, enhancing reusability and modularity.
- **Data Import and State Management**: The menu items data, imported from `data.js`, is an array of objects representing individual menu items. This data is managed using React's `useState` hook in the `App.jsx` component, allowing dynamic updates and rendering.
- **Dynamic Menu Item Rendering**: The `Menu` component receives the menu items state and iterates over the list using the map method. It renders a `MenuItem` component for each item, displaying its image, title, price, and description.
- **Unique Categories Generation**: Unique categories are extracted from the menu items data and stored in an array, including an "all" category to display all items. This unique category list is managed as a state variable.
- **Category Filter Functionality**: The `Categories` component renders buttons for each category. Clicking a category button triggers a filter function, passed as a prop, which updates the state to show only the items belonging to the selected category.
- **Responsive Layout and Styling**: Custom CSS ensures the application is visually appealing and responsive across different devices, with a clean and intuitive user interface.

#### Menu Components

##### Title Component

![Title - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/05-menu/05-menu-component-1.png)

##### Menu Component

![Menu - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/05-menu/05-menu-component-2.png)

##### MenuItem Component

![MenuItem - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/05-menu/05-menu-component-3.png)

#### Implementation Process

1. **Component Setup**: Developed a Title component and imported menu items data into the project.
2. **State Initialization**: Set up menu items and categories as state variables in `App.jsx`.
3. **Menu Rendering**: Passed menu items to the `Menu` component for rendering each item via the `MenuItem` component.
4. **Category Management**: Extracted unique categories, including an "all" category, for filter functionality.
5. **Filter Implementation**: Integrated filter functionality in the `Categories` component to display menu items based on the selected category.
6. **Event Handling**: Set up event handlers for category buttons to update the displayed menu items.

#### Learning Outcomes

- **React Basics**: Gained a strong understanding of fundamental React concepts such as components, state, and props.
- **Dynamic Content Rendering**: Learned how to render and update content dynamically based on user interactions and state changes.
- **Data Filtering**: Enhanced skills in implementing filtering logic to display content conditionally.
- **Component Design**: Developed an appreciation for component-based architecture, creating reusable and modular components.