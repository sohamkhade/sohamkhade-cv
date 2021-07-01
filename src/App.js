import './App.css';
import Home from './Components/Home/Home';
import 'react-bootstrap';
import NavigationBar from "./Components/NavigationBar/NavigationBar";

function App() {
  return (
    <div className="App">
        <NavigationBar />
        <Home />
    </div>
  );
}

export default App;
