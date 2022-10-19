import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BlogPostsProvider } from "./contexts/blog/BlogContext";
import { FavBlogPostsProvider } from "./contexts/favBlog/FavBlogContext";

import NavBar from "./components/nav/NavBar";
import FavBlogCardsContainer from "./components/blog/FavBlogCardsContainer";
import BlogCardsContainer from "./components/blog/BlogCardsContainer";

function App() {
  return (
    <>
      <NavBar />
      <BlogPostsProvider>
        <FavBlogPostsProvider>
          <FavBlogCardsContainer sectionTitle="Favorite Blog Posts" />

          <BlogCardsContainer sectionTitle="All Blog Posts" />
        </FavBlogPostsProvider>
      </BlogPostsProvider>
    </>
  );
}

export default App;
