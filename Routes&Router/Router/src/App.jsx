import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { BookList } from "./BookList";
import { Home } from "./Home";
import Book from "./Book";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/books"}>Books</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/books" element={<BookList></BookList>}></Route>
          <Route path="/books/:id" element={<Book></Book>}></Route>
        </Routes>
      </nav>
    </>
  );
}

export default App;
