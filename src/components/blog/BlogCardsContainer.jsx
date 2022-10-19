import Container from "react-bootstrap/Container";
import { useBlogContext } from "../../contexts/blog/BlogContext";
import { useFavBlogPostsContext } from "../../contexts/favBlog/FavBlogContext";
import BlogCard from "./BlogCard";

const BlogCardsContainer = ({ sectionTitle }) => {
  const blogPosts = useBlogContext();
  const { dispatch } = useFavBlogPostsContext();
  const handleAddFav = (post) => {
    dispatch({ type: "ADD_FAV_BLOG", payload: post });
  };
  return (
    <Container className="w-100 mt-5 p-5 cards-container shadow">
      <h1 className="w-100 text-center">{sectionTitle}</h1>
      {blogPosts?.map((blogPost) => (
        <BlogCard
          blogPost={blogPost}
          key={blogPost.id}
          buttonText="Add to favorites"
          handleClick={handleAddFav}
        />
      ))}
    </Container>
  );
};

export default BlogCardsContainer;
