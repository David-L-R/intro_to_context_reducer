import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BlogContextProvider } from "./contexts/blog/BlogContext";
import { FavBlogPostsContextProvider } from "./contexts/favBlog/FavBlogContext";

import NavBar from "./components/nav/NavBar";
import FavBlogCardsContainer from "./components/blog/FavBlogCardsContainer";
import BlogCardsContainer from "./components/blog/BlogCardsContainer";

function App() {
  return (
    <>
      <NavBar />
      <BlogContextProvider>
        <FavBlogPostsContextProvider>
          <FavBlogCardsContainer sectionTitle="Favorite Blog Posts" />

          <BlogCardsContainer sectionTitle="All Blog Posts" />
        </FavBlogPostsContextProvider>
      </BlogContextProvider>
    </>
  );
}

export default App;
