import React, { createContext, useContext, useReducer } from "react";

// create context
const FavBlogPostsContext = createContext();

const initialState = { favBlogs: [] };

function favBlogReducer(state, action) {
  switch (action.type) {
    case "ADD_FAV_BLOG": {
      if (!state.favBlogs.find((blog) => blog.id === action.payload.id)) {
        return { favBlogs: [...state.favBlogs, action.payload] };
      }
    }
    case "REMOVE_FAV_BLOG": {
      const newFavBlogArr = state.favBlogs.filter(
        (blog) => blog.id !== action.payload.id
      );
      return { favBlogs: newFavBlogArr };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
const FavBlogPostsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favBlogReducer, initialState);
  const value = { favBlogs: state.favBlogs, dispatch };
  console.log("state in favblogpost context", state);
  return (
    // the Provider gives access to the context to its children

    <FavBlogPostsContext.Provider value={value}>
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
