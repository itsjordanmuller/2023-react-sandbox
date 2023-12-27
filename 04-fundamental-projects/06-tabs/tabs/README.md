### [F. Tabs](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/06-tabs/tabs)

<img src="https://custom-icon-badges.demolab.com/badge/Tabs%20Project-b2ecff.svg?logo=star-fill&logoColor=000000&style=for-the-badge" width="100%" alt="Tabs Project" />

The Tabs Project is a React-based web application designed to display job information in a tabbed interface. It demonstrates fetching data from an external API, managing application state, and dynamically rendering components based on user interaction. This project is a great example of handling asynchronous data, component-based architecture, and state management in React.

#### Features

- **Data Fetching and Loading State**: Utilizes `fetch` API within the `useEffect` hook to retrieve job information from an external API. A loading state is implemented to display a spinner or message while data is being fetched.
- **State Management**: The fetched data is stored in a state variable using the `useState` hook, allowing dynamic updates and rendering.
- **JobInfo Component**: This component displays the details of a job, such as the company name, dates, title, and duties. It uses object destructuring to extract information from the job object.
- **Duties Component**: Iterates over the duties array of a job and renders each item. Integrated with the `react-icons` library for optional icons.
- **UUID for Unique Keys**: Implements the `uuid` library to generate unique identifiers for each job, which are used as keys in the `JobInfo` and `Duties` components.
- **BtnContainer Component**: Contains buttons for each job. Clicking a button updates the currently displayed job information.
- **Dynamic Rendering of Job Information**: A `currentItem` state variable tracks the index of the currently displayed job. The `JobInfo` component renders information based on this index.
- **Interactive Job Selection**: Each button in the `BtnContainer` is linked to a job. Clicking these buttons triggers a function that sets the `currentItem`, thereby updating the displayed job information.

#### Implementation Process

1. **Fetching Data**: Implemented an API call to fetch job information and manage the loading state.
2. **Stateful Data Storage**: Stored the fetched data in a state variable for dynamic rendering.
3. **Job Details Display**: Developed the `JobInfo` component to display job details.
4. **Unique Key Generation**: Used the `uuid` library to generate unique keys for list items.
5. **Interactive Navigation**: Created a `BtnContainer` component for job selection.
6. **State Management for Display**: Managed which job details to display using a `currentItem` state variable.
7. **Dynamic Content Rendering**: Ensured the content changes reflect the selected job from the navigation menu.

#### Learning Outcomes

- **Asynchronous Data Fetching**: Gained experience in fetching data from an external API within React components.
- **State and Effect Hooks**: Developed a deeper understanding of React's useState and useEffect hooks for state management and side effects.
- **Dynamic Component Rendering**: Learned to render components dynamically based on user interactions and application state.
- **React Component Architecture**: Enhanced skills in structuring an application using reusable React components.