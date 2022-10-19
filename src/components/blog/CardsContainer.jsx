// import { useState, useEffect } from "react";
// import { useBlogContext } from "react";
import Container from "react-bootstrap/Container";
import {
  BlogContextProvider,
  useBlogContext,
} from "../../contexts/blog/BlogContext";
import BlogCard from "./BlogCard";

const CardsContainer = () => {
  const blogPosts = useBlogContext();
  // const [blogPosts, setBlogPosts] = useState([]);
  // const fetchBlogPosts = async () => {
  //   const response = await fetch("http://localhost:3002/posts/");
  //   const data = await response.json();
  //   setBlogPosts(data);
  // };
  // useEffect(() => {
  //   fetchBlogPosts();
  // }, []);
  return (
      <Container className="w-100 mt-5 cards-container">
        {blogPosts?.map((blogPost) => (
          <BlogCard {...blogPost} key={blogPost.id} />
        ))}
      </Container>
  );
};

export default CardsContainer;
