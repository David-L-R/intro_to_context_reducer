# Intro to `useContext` and `useReducer` Hooks

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

3. Create a `BlogContextProvider` that takes in an argument of `children` and returns the `Provider` component.

**Question:** ?
**Answer:**

```js
const BlogContextProvider = ({ children }) => {
  return (
    // the Provider gives access to the context to its children
    <BlogContext.Provider>{children}</BlogContext.Provider>
  );
};
```

4. Fetch all **blog posts** and store in **state**

```js
const BlogContextProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const fetchBlogPosts = async () => {
    try {
      const response = await fetch("http://localhost:3002/posts/");
      const blogPosts = await response.json();
      console.log(blogPosts);
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

5. Return the `BlogContext.Provider` element and pass it **children**
6. Give the `BlogContext.Provider` a value assigned to the blogPosts array
7. Export `BlogContext` and `BlogContextProvider`
8. Create a **custom hook** called `useBlogContext` to use the `BlogContext`

**`BlogContext.js` FINAL CODE**

```js
import React, { createContext, useContext, useState, useEffect } from "react";

// create context
const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const fetchBlogPosts = async () => {
    try {
      const response = await fetch("http://localhost:3002/posts/");
      const blogPosts = await response.json();
      console.log(blogPosts);
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

export { BlogContext, BlogContextProvider, useBlogContext };
```

## Project Instructions/Script

1.
