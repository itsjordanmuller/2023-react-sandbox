#### [B. useEffect](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/03-advanced-react/advanced-react/src/tutorial/02-useEffect/starter)

<img src="https://custom-icon-badges.demolab.com/badge/useEffect%20Hook-ffe4b2.svg?logo=bookmark&logoColor=000000&style=for-the-badge" width="100%" alt="useEffect Hook" />

Learned about useEffect for managing side effects, data fetching, and the critical role of cleanup functions.

##### `01-code-example.jsx`
In `CodeExample`, I experimented with calling a function within a functional React component. Here, `sayHello` is invoked on each render, demonstrating how React components behave like normal JavaScript functions. Although this example is straightforward, it sets the stage for understanding more complex side effects and their handling in React components.

##### `02-useEffect-basics.jsx`
`UseEffectBasics` introduces the `useEffect` hook, a fundamental aspect of handling side effects in React. This example showed how `useEffect` runs after every render by default but can be controlled with dependency arrays. By including an empty dependency array, I ensured that the effect runs only once after the initial render, similar to `componentDidMount` in class components. This exercise was pivotal in understanding the basic mechanics of `useEffect`.

##### `03-multiple-effects.jsx`
In `MultipleEffects`, I delved into the concept of using multiple `useEffect` hooks in a single component. Each `useEffect` was tied to a different state variable (`value` and `secondValue`), and I set up separate effects that run when each respective state changes. This approach demonstrated how to isolate side effects based on specific state or prop changes, providing a clearer understanding of how to manage complex component behaviors efficiently.

##### `04-fetch-data.jsx`
`FetchData` was a practical application of `useEffect` for fetching data from an API. This exercise involved making an asynchronous request to the GitHub API to fetch user data. Here, I learned how to integrate `useEffect` with async functions and manage state based on the data received from external sources. It highlighted the importance of `useEffect` in handling asynchronous operations and updating the UI accordingly.

##### `05-cleanup-function.jsx`
Finally, `CleanupFunction` focused on the cleanup aspect of `useEffect`. It demonstrated how to properly clean up side effects, especially those involving subscriptions or event listeners, to prevent memory leaks. The component toggles the visibility of `RandomComponent`, which subscribes to a window scroll event. The cleanup function in the `useEffect` hook ensures that the event listener is removed when the component is unmounted, emphasizing the importance of cleaning up to maintain optimal performance and prevent bugs.

These exercises provided a comprehensive overview of `useEffect`, from basic usage to complex scenarios involving data fetching and cleanup. Each example built upon the previous, enhancing my understanding of managing side effects in functional components using the `useEffect` hook.

##### [Tours](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/02-tours/tours)

![Tours - Site Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/02-tours/02-tours-site.png)

##### Tours Components

###### Tours Component

![Tours - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/02-tours/02-tours-component-1.png)

###### Tour Component

![Tour - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/02-tours/02-tours-component-2.png)

###### Loading Component

![Loading - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/02-tours/02-tours-component-3.png)

##### [3. Reviews](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/03-reviews/reviews)

![Reviews - Site Image 1](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/03-reviews/03-reviews-site-1.png)

![Reviews - Site Image 2](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/03-reviews/03-reviews-site-2.png)

##### Reviews Components

###### Reviews Component

![Reviews - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/03-reviews/03-reviews-component-1.png)

##### [4. Accordion](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/04-accordion/accordion)

![Accordion - Site Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/04-accordion/04-accordion-site.png)

##### Accordion Components

###### Questions Component

![Accordion - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/04-accordion/04-accordion-component-1.png)

###### Question Component - Open

![Question (Open) - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/04-accordion/04-accordion-component-2.png)

###### Question Component - Closed

![Question (Closed) - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/04-accordion/04-accordion-component-3.png)

##### [5. Menu](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/05-menu/menu)

![Menu - Site Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/05-menu/05-menu-site.png)

##### Menu Components

###### Title Component

![Title - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/05-menu/05-menu-component-1.png)

###### Menu Component

![Menu - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/05-menu/05-menu-component-2.png)

###### MenuItem Component

![MenuItem - Component Image](https://github.com/itsjordanmuller/2023-react-sandbox/blob/main/04-fundamental-projects/05-menu/05-menu-component-3.png)

- [6. Tabs](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/06-tabs/tabs)

- [7. Slider](https://github.com/itsjordanmuller/2023-react-sandbox/tree/main/04-fundamental-projects/07-slider/slider)