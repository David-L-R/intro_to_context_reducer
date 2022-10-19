import React, { createContext, useContext, useReducer } from "react";

// create context
const FavBlogPostsContext = createContext();

//The reducer function contains your custom state logic
//and the initialState can be a simple value but generally will contain an object.
const initialState = { favBlogs: [] };

function favBlogReducer(state, action) {
  const { type, payload } = action;
  const { favBlogs } = state;
  switch (type) {
    case "ADD_FAV_BLOG":
      if (!favBlogs.find((blog) => blog.id === payload.id)) {
        return { favBlogs: [...favBlogs, payload] };
      }
      break;
    case "REMOVE_FAV_BLOG": {
      const newFavBlogArr = favBlogs.filter((blog) => blog.id !== payload.id);
      return { favBlogs: newFavBlogArr };
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
}

const FavBlogPostsProvider = ({ children }) => {
  //The useReducer Hook accepts two arguments.
  //useReducer(<reducer>, <initialState>)
  //The useReducer Hook returns the current stateand a dispatchmethod.

  const [state, dispatch] = useReducer(favBlogReducer, initialState);
  const value = { favBlogs: state.favBlogs, dispatch };

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

export { FavBlogPostsContext, FavBlogPostsProvider, useFavBlogPostsContext };
