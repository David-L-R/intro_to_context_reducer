import { Card, Button } from "react-bootstrap";
import { toTitleCase, toSentenceCase } from "../../utils";
import { useFavBlogPostsContext } from "../../contexts/favBlog/FavBlogContext";

const BlogCard = ({ blogPost }) => {
  const { title, body, userId } = blogPost;
  const { favBlogs, dispatch } = useFavBlogPostsContext();
  const isFav = favBlogs?.find((favBlog) => favBlog.id === blogPost.id);
  const handleClick = () => {
    isFav
      ? dispatch({ type: "REMOVE_FAV_BLOG", payload: blogPost })
      : dispatch({ type: "ADD_FAV_BLOG", payload: blogPost });
  };
  return (
    <Card className="m-1" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{toTitleCase(title)}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          User Number {userId}
        </Card.Subtitle>
        <Card.Text>{toSentenceCase(body)}</Card.Text>
        <Button variant="primary" onClick={handleClick}>
          {isFav ? "Remove from Favs" : "Add to Favs"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
