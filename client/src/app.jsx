import Pages from "./pages/pages";
import {BrowserRouter as Router} from 'react-router-dom';
import Header from "./components/header";
import Search from "./components/search";



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Search />
        <Pages />
      </Router>
    </div>
  );
}

export default App;
