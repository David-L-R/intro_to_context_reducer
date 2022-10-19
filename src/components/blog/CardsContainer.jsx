import Container from "react-bootstrap/Container";
import { useBlogContext } from "../../contexts/blog/BlogContext";
import BlogCard from "./BlogCard";

const CardsContainer = () => {
  const blogPosts = useBlogContext();
  return (
    <Container className="w-100 mt-5 cards-container">
      {blogPosts?.map((blogPost) => (
        <BlogCard {...blogPost} key={blogPost.id} />
      ))}
    </Container>
  );
};

export default CardsContainer;
