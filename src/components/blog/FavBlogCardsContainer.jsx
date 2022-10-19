import Container from "react-bootstrap/Container";
import { useFavBlogPostsContext } from "../../contexts/favBlog/FavBlogContext";
import BlogCard from "./BlogCard";

const FavBlogCardsContainer = ({ sectionTitle }) => {
  const { favBlogs } = useFavBlogPostsContext();

  return (
    <Container className="w-100 mt-5 p-5 cards-container shadow">
      <h1 className="w-100 text-center">{sectionTitle}</h1>
      {favBlogs?.map((blogPost) => (
        <BlogCard blogPost={blogPost} key={blogPost.id} />
      ))}
    </Container>
  );
};

export default FavBlogCardsContainer;
