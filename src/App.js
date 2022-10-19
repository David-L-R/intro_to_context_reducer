import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BlogContextProvider } from "./contexts/blog/BlogContext";
import NavBar from "./components/nav/NavBar";
import CardsContainer from "./components/blog/CardsContainer";

function App() {
  return (
    <>
      <NavBar />
      <BlogContextProvider>
        <CardsContainer />
      </BlogContextProvider>
    </>
  );
}

export default App;
