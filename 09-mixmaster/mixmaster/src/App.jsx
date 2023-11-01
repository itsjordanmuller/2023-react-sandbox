import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h2>Home Page</h2>,
  },
  {
    path: "/about",
    element: (
      <div>
        <h2>About Page</h2>
      </div>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
