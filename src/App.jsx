import "./App.css";
import Header from "./components/Header";
import ListBox from "./components/ListBox";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <SearchBar />
        <ListBox />
      </div>
    </>
  );
}

export default App;
