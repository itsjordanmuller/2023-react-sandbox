#### [D. Project Structure](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/03-advanced-react/advanced-react/src/tutorial/04-project-structure)

<img src="https://custom-icon-badges.demolab.com/badge/Project%20Structure-fffcb2.svg?logo=bookmark&logoColor=000000&style=for-the-badge" width="100%" alt="Project Structure" />

Practiced organizing components, CSS, and JavaScript files for scalability and maintainability, focusing on efficient use of index files.

##### `Example` Folder
The `Example` folder contains two components, `FirstComponent` and `SecondComponent`, demonstrating the basic structure of React components. Each component returns a simple header element. The `Index.js` file in this folder imports both components and exports them as part of an `Example` component. This setup showcases how to effectively organize and bundle related components within a single directory, simplifying imports in larger projects.

###### Key Takeaways:
- Organizing related components in a single folder.
- Using an `index.js` file to export multiple components from a folder.

##### `Navbar` Folder
In the `Navbar` folder, I created a `Navbar.jsx` component, which is a simple component returning a header. The folder also includes an `index.jsx` file, which re-exports the `Navbar` component as the default export from the folder. This pattern is useful for maintaining clean and concise import statements in other parts of the application.

###### Key Takeaways:
- Simplifying imports by using an `index.jsx` file for re-exporting components.
- Enhancing the readability of import statements in the application.

##### `Pages` Folder
The `Pages` folder contains two components, `Home.jsx` and `About.jsx`, representing different pages of a web application. Both components are simple, rendering a div with text. The `index.jsx` file in this folder exports both components, allowing them to be imported using destructuring from the folder path in other parts of the application.

###### Key Takeaways:
- Grouping page components in a dedicated folder.
- Utilizing destructuring in import statements for cleaner code.

Overall, this section of the tutorial provided practical insights into organizing components and pages in a React application. By effectively structuring files and utilizing index files for exports, the project becomes more manageable, especially as it scales. This structure also aids in maintaining a clean and understandable codebase, which is crucial for collaborative development and long-term project maintenance.