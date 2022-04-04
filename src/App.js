
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navigation from './Components/Navbar/Navbar';
import Recipes from './Components/Recipes/Recipes';



function App() {
  return (
    <div>
     <Navigation />
     <Recipes />
    </div>
  );
}

export default App;
