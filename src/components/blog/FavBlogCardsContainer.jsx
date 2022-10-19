import Container from "react-bootstrap/Container";
import { useFavBlogPostsContext } from "../../contexts/favBlog/FavBlogContext";
import BlogCard from "./BlogCard";

const FavBlogCardsContainer = ({ sectionTitle }) => {
  const { favBlogs, dispatch } = useFavBlogPostsContext();
  const handleRemoveFav = (post) => {
    dispatch({ type: "REMOVE_FAV_BLOG", payload: post });
  };
  console.log("favBlogPosts in container", favBlogs);
  return (
    <Container className="w-100 mt-5 p-5 cards-container shadow">
      <h1 className="w-100 text-center">{sectionTitle}</h1>
      {favBlogs?.map((blogPost) => (
        <BlogCard
          blogPost={blogPost}
          key={blogPost.id}
          buttonText="Remove from favorites"
          handleClick={handleRemoveFav}
        />
      ))}
    </Container>
  );
};

export default FavBlogCardsContainer;
