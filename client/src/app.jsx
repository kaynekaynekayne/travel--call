import Pages from "./pages/pages";
import {BrowserRouter as Router} from 'react-router-dom';
import Header from "./components/header";
import { AuthContextProvider } from "./context/authContext";


function App() {
  return (
    <div className="App">
      <Router>
        <AuthContextProvider>
          <Header />
          <Pages />
        </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
