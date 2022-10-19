import { Card, Button } from "react-bootstrap";
import { toTitleCase, toSentenceCase } from "../../utils";
const BlogCard = ({ blogPost, buttonText, handleClick }) => {
  const { title, body, userId } = blogPost;
  return (
    <Card className="m-1" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{toTitleCase(title)}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          User Number {userId}
        </Card.Subtitle>
        <Card.Text>{toSentenceCase(body)}</Card.Text>
        <Button variant="primary" onClick={() => handleClick(blogPost)}>
          {buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
