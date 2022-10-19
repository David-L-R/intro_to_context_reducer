import Container from "react-bootstrap/Container";
import { useBlogContext } from "../../contexts/blog/BlogContext";
import BlogCard from "./BlogCard";

const BlogCardsContainer = ({ sectionTitle }) => {
  const blogPosts = useBlogContext();
  return (
    <Container className="w-100 mt-5 p-5 cards-container shadow">
      <h1 className="w-100 text-center">{sectionTitle}</h1>
      {blogPosts?.map((blogPost) => (
        <BlogCard {...blogPost} key={blogPost.id} />
      ))}
    </Container>
  );
};

export default BlogCardsContainer;
