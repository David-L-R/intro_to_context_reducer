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
