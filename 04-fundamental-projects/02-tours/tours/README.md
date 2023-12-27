### [B. Tours](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/02-tours/tours)

<img src="https://custom-icon-badges.demolab.com/badge/Tours%20Project-b2ffdf.svg?logo=star-fill&logoColor=000000&style=for-the-badge" width="100%" alt="Tours Project" />

![Tours - Site Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/02-tours/02-tours-site.png)

The Tours Project is an engaging web application developed using React. It focuses on fetching, displaying, and managing a list of tour packages. The project is designed to demonstrate key React concepts such as component creation, state management, conditional rendering, and handling user interactions.

#### Features

- **Component-Based Architecture**: The application is divided into three main components - `Tours`, `Tour`, and `Loading`. Each component has a dedicated file (`Tours.jsx`, `Tour.jsx`, `Loading.jsx`) and is responsible for a specific part of the application.
- **Data Fetching**: In `App.jsx`, the application fetches tour data from a provided URL using the fetch API. While the data is loading, a spinner or loading message is displayed, implemented via the `Loading` component.
- **Dynamic Rendering of Tours**: Once the data is loaded, the `Tours` component stores the tour data in its state. It then maps over this data to render a `Tour` component for each tour, passing necessary details as props.
- **Interactive Tour Management**:
  - **Remove Tour**: Users can remove a tour from the list by clicking a button in the `Tour` component. This updates the state in `Tours` to exclude the removed tour.
  - **Read More Feature**: Each `Tour` component has a 'read more' button that toggles the expansion of the tour description. This is managed by a state within the `Tour` component.
- **Refreshing Tours Data**: The application includes a feature to re-fetch the tours data. When invoked, it fetches the data again from the URL and updates the state, with the loading state reintroduced during this process.

#### Tours Components

##### Tours Component

![Tours - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/02-tours/02-tours-component-1.png)

##### Tour Component

![Tour - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/02-tours/02-tours-component-2.png)

##### Loading Component

![Loading - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/02-tours/02-tours-component-3.png)

#### Implementation Process

1. **Initial Setup**: Started with the importation of necessary files and setting up the basic React application structure.
2. **Data Fetching**: Implemented the functionality to fetch tours data from an API and handle loading states.
3. **Loading Component**: Configured the `Loading` component to display during data fetching.
4. **Tour Rendering**: Enabled the rendering of individual tours using the `Tour` component within the `Tours` container.
5. **Interactive Features**: Added functionality to remove tours and toggle the display of tour information.
6. **Data Refreshing**: Implemented a feature to refresh the tour list by re-fetching data from the API.

#### Styling and Layout

Custom CSS is employed to provide a responsive and visually appealing layout. The styling ensures a clean and user-friendly interface, enhancing the overall user experience.

#### Learning Outcomes

- **React State and Effect Hooks**: Gained in-depth knowledge of managing component state and side effects.
- **Component Design**: Developed skills in designing and implementing reusable React components.
- **Data Fetching and Rendering**: Learned efficient techniques for fetching data from an API and dynamically rendering components based on the data.
- **User Interaction Handling**: Enhanced understanding of event handling and updating component state based on user actions.