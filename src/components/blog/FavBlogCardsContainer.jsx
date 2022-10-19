import Container from "react-bootstrap/Container";
import { useFavBlogPostsContext } from "../../contexts/favBlog/FavBlogContext";
import BlogCard from "./BlogCard";

const FavBlogCardsContainer = ({ sectionTitle }) => {
  const favBlogPosts = useFavBlogPostsContext();
  return (
    <Container className="w-100 mt-5 p-5 cards-container shadow">
      <h1 className="w-100 text-center">{sectionTitle}</h1>
      {!!favBlogPosts ? (
        favBlogPosts.map((blogPost) => (
          <BlogCard {...blogPost} key={blogPost.id} />
        ))
      ) : (
        <h5 className="w-100 text-center">No favorite posts yet</h5>
      )}
    </Container>
  );
};

export default FavBlogCardsContainer;
