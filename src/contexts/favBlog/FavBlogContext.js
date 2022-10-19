import React, { createContext, useContext } from "react";

// create context
const FavBlogPostsContext = createContext();

const FavBlogPostsContextProvider = ({ children }) => {
  return (
    // the Provider gives access to the context to its children
    <FavBlogPostsContext.Provider value={null}>
      {children}
    </FavBlogPostsContext.Provider>
  );
};
// custom hook to use the context
const useFavBlogPostsContext = () => {
  // get the context
  const context = useContext(FavBlogPostsContext);

  // if `undefined`, throw an error
  if (context === undefined) {
    throw new Error("useFavBlogPostsContext was used outside of its Provider");
  }

  return context;
};

export {
  FavBlogPostsContext,
  FavBlogPostsContextProvider,
  useFavBlogPostsContext,
};
