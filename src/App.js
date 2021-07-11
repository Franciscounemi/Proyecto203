import './App.css';
//import Calculadora from './components/cards/Calculadora';
//import Tarjeta from './components/cards/Tarjeta';
import ListCards from './components/cards/ListCards';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ListCards/>
    </div>
  );
}

export default App;
/*function App() {
  return (
    <div className="App">
      <h1 className="p-1 bg-danger bg-gradient text-dark">TALLER DE POO - Francisco Pinargoti</h1>
      <Calculadora/>
      <Tarjeta/>
    </div>
  );
}

export default App;*/
