# Intro to `useContext` and `useReducer` Hooks

**Context**

Provides a way to pass data through the component tree without having to pass props down manually at every level.

There's a built-in Hook provided by React called `useContext` that allows any descendent component to gain access to the value on a Context Provider. It also subscribes the component that uses `useContext` to be re-rendered anytime the value of the context changes.

**Reducer**

A Reducer takes a state and an action as arguments, and it returns a new state.

`useReducer` is a React hook which enables the use of the Reducer pattern. `useReducer` is generally used in place of useState in a component.

When we implement the `useReducer` hook, we gain access to a function called dispatch. Dispatch takes Actions, and send them to the Reducer. Dispatch calls the Reducer with the correct state.

## Project Setup

- Install dependencies by running `npm i` at the project root
- Use the command `json-server --watch db.json --port 3002` to run the `json-server`
- Use the command `npm start` to start the project
  Runs the app in the development mode.
  Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available `db.json` Routes

**Data Source:** https://jsonplaceholder.typicode.com

- GET http://localhost:3002/posts/
- GET http://localhost:3002/posts/:id
- POST http://localhost:3002/posts/
- DELETE http://localhost:3002/posts/:id

## BlogContext Description/Script

1. Import all necessary **hooks**

```js
import React, { createContext, useContext, useState, useEffect } from "react";
```

2. Create a **context** called `BlogContext` with the `createContext()` Hook

```js
// create context
const BlogContext = createContext();
```

3. Create a `BlogPostsProvider` that takes in an argument of `children` and returns the `Provider` component.

**Question:** ?
**Answer:**

```js
const BlogPostsProvider = ({ children }) => {
  return (
    // the Provider gives access to the context to its children
    <BlogContext.Provider>{children}</BlogContext.Provider>
  );
};
```

4. Fetch all **blog posts** and store in **state**

```js
const BlogPostsProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const fetchBlogPosts = async () => {
    try {
      const response = await fetch("http://localhost:3002/posts/");
      const blogPosts = await response.json();

      setBlogPosts(blogPosts);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    // the Provider gives access to the context to its children
    <BlogContext.Provider value={blogPosts}>{children}</BlogContext.Provider>
  );
};
```

5. Give the `BlogContext.Provider` a value assigned to the blogPosts array
6. Export `BlogContext` and `BlogPostsProvider`
7. Create a **custom hook** called `useBlogContext` to use the `BlogContext`

**`BlogContext.js` FINAL CODE**

```js
import React, { createContext, useContext, useState, useEffect } from "react";

// create context
const BlogContext = createContext();

const BlogPostsProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const fetchBlogPosts = async () => {
    try {
      const response = await fetch("http://localhost:3002/posts/");
      const blogPosts = await response.json();

      setBlogPosts(blogPosts);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    // the Provider gives access to the context to its children
    <BlogContext.Provider value={blogPosts}>{children}</BlogContext.Provider>
  );
};
// custom hook to use the context
const useBlogContext = () => {
  // get the context
  const context = useContext(BlogContext);

  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error("useBlogContext was used outside of its Provider");
  }

  return context;
};

export { BlogContext, BlogPostsProvider, useBlogContext };
```

8. Import `BlogContextProfider` to `App.js` and wrap the components you want to have access to the **blog posts**

```js
import { BlogPostsProvider } from "./contexts/blog/BlogContext";
...
function App() {
  return (
    <>
      <NavBar />
      <BlogPostsProvider>
        <CardsContainer />
      </BlogPostsProvider>
    </>
  );
}
```

9. Erase the fetch logic inside `CardsContainer.jsx`

10. Import the `useBlogContext` Hook to `CardsContainer.jsx`

```js
import { useBlogContext } from "../../contexts/blog/BlogContext";
```

## Instructions/Script

1.
