//componente principal (una parte de la interfaz para que renderice algo por pantalla)
import logo from './assets/logoU.png';
import logo1 from './assets/logoSus.png';
import './App.css';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo1} className="App-logo1" alt="logo" />
        <Home/>
      </header>
    </div>
  );
}

export default App;
