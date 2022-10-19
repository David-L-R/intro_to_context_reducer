import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BlogContextProvider } from "./contexts/blog/BlogContext";
import NavBar from "./components/nav/NavBar";
import CardsContainer from "./components/blog/CardsContainer";

function App() {
  return (
    <BlogContextProvider>
      <NavBar />
      <CardsContainer />
    </BlogContextProvider>
  );
}

export default App;
