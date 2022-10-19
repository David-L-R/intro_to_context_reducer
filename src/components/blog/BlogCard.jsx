import { Card, Button } from "react-bootstrap";
import { toTitleCase, toSentenceCase } from "../../utils";
const BlogCard = ({ userId, id, title, body }) => {
  const isFavorite = false;
  return (
    <Card className="m-1" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{toTitleCase(title)}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          User Number {userId}
        </Card.Subtitle>
        <Card.Text>{toSentenceCase(body)}</Card.Text>
        <Button variant="primary">
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
